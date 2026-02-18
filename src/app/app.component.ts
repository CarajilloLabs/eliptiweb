import { Component, signal, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { translations, translationsInfantil, languageLabels, languageFlags, type Language } from './translations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fadeIn', [
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      state('hidden', style({ opacity: 0, transform: 'translateY(10px)' })),
      transition('hidden => visible', [
        animate('400ms ease-in-out')
      ]),
      transition('visible => hidden', [
        animate('200ms ease-in-out')
      ])
    ])
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly currentLanguage = signal<Language>('val');
  readonly translations = translations;
  readonly translationsInfantil = translationsInfantil;
  readonly languageLabels = languageLabels;
  readonly languageFlags = languageFlags;
  readonly isContentVisible = signal(true);
  readonly languages: Language[] = ['val', 'es', 'en', 'eu'];
  readonly isAudioPlaying = signal(false);

  readonly animationState = computed(() => this.isContentVisible() ? 'visible' : 'hidden');
  readonly currentTranslation = computed(() => this.translations[this.currentLanguage()]);
  readonly currentTranslationInfantil = computed(() => this.translationsInfantil[this.currentLanguage()]);

  private voices: SpeechSynthesisVoice[] = [];
  private audioPlayer: HTMLAudioElement | null = null;

  constructor() {
    const savedLanguage = localStorage.getItem('falla-language') as Language;
    if (savedLanguage && (savedLanguage === 'val' || savedLanguage === 'es' || savedLanguage === 'en' || savedLanguage === 'eu')) {
      this.currentLanguage.set(savedLanguage);
    }

    effect(() => {
      localStorage.setItem('falla-language', this.currentLanguage());
    });

    this.initVoices();
    this.initAudioPlayer();
  }

  private initAudioPlayer(): void {
    this.audioPlayer = new Audio('/sound/rm.opus');
    this.audioPlayer.preload = 'auto';
    
    this.audioPlayer.addEventListener('play', () => {
      this.isAudioPlaying.set(true);
    });
    
    this.audioPlayer.addEventListener('pause', () => {
      this.isAudioPlaying.set(false);
    });
    
    this.audioPlayer.addEventListener('ended', () => {
      this.isAudioPlaying.set(false);
    });
    
    this.audioPlayer.addEventListener('error', () => {
      this.isAudioPlaying.set(false);
    });
  }

  changeLanguage(lang: Language): void {
    if (lang !== this.currentLanguage()) {
      if (this.audioPlayer) {
        this.audioPlayer.pause();
        this.audioPlayer.currentTime = 0;
      }
      window.speechSynthesis.cancel();
      this.isContentVisible.set(false);
      setTimeout(() => {
        this.currentLanguage.set(lang);
        setTimeout(() => {
          this.isContentVisible.set(true);
        }, 50);
      }, 200);
    }
  }

  playMainCritique(): void {
    if (this.currentLanguage() === 'val' && this.audioPlayer) {
      if (this.audioPlayer.paused) {
        window.speechSynthesis.cancel();
        this.audioPlayer.currentTime = 0;
        this.audioPlayer.play().catch(err => {
          console.error('Error al reproducir audio:', err);
          this.isAudioPlaying.set(false);
        });
      } else {
        this.audioPlayer.pause();
        this.audioPlayer.currentTime = 0;
      }
    } else {
      if (this.audioPlayer) {
        this.audioPlayer.pause();
        this.audioPlayer.currentTime = 0;
      }
      const translation = this.currentTranslation();
      const text = [translation.title, ...translation.content].join('. ');
      this.playText(text);
    }
  }

  playChildCritique(): void {
    const translation = this.currentTranslationInfantil();
    const text = [translation.title, ...translation.content].join('. ');
    this.playText(text);
  }

  private playText(text: string): void {
    const speechSynthesis = window.speechSynthesis;
    if (!speechSynthesis) {
      return;
    }

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = this.getSpeechLang(this.currentLanguage());
    const voice = this.getVoiceForLanguage(this.currentLanguage());
    if (voice) {
      utterance.voice = voice;
    }
    speechSynthesis.speak(utterance);
  }

  private getSpeechLang(lang: Language): string {
    if (lang === 'val') {
      return 'ca-ES';
    }
    if (lang === 'es') {
      return 'es-ES';
    }
    if (lang === 'en') {
      return 'en-GB';
    }
    return 'eu-ES';
  }

  private initVoices(): void {
    const speechSynthesis = window.speechSynthesis;
    if (!speechSynthesis) {
      return;
    }

    const loadVoices = () => {
      this.voices = speechSynthesis.getVoices();
    };

    loadVoices();

    if (this.voices.length === 0) {
      speechSynthesis.addEventListener('voiceschanged', () => {
        loadVoices();
      });
    }
  }

  private getVoiceForLanguage(lang: Language): SpeechSynthesisVoice | null {
    if (this.voices.length === 0) {
      return null;
    }

    const languageMap: Record<Language, string[]> = {
      val: ['ca-ES', 'ca', 'es-ES', 'es'],
      es: ['es-ES', 'es'],
      en: ['en-GB', 'en-US', 'en'],
      eu: ['eu-ES', 'eu', 'es-ES', 'es']
    };

    const preferredTags = languageMap[lang];

    for (const tag of preferredTags) {
      const candidates = this.voices.filter(voice => voice.lang.toLowerCase().startsWith(tag.toLowerCase()));
      if (candidates.length > 0) {
        const ranked = candidates.sort((a, b) => {
          const scoreA = this.scoreVoice(a);
          const scoreB = this.scoreVoice(b);
          return scoreB - scoreA;
        });
        return ranked[0];
      }
    }

    const rankedAll = [...this.voices].sort((a, b) => {
      const scoreA = this.scoreVoice(a);
      const scoreB = this.scoreVoice(b);
      return scoreB - scoreA;
    });

    return rankedAll[0] ?? null;
  }

  private scoreVoice(voice: SpeechSynthesisVoice): number {
    const name = voice.name.toLowerCase();
    let score = 0;

    if (voice.localService) {
      score += 3;
    }

    if (name.includes('neural') || name.includes('natural')) {
      score += 4;
    }

    if (name.includes('premium') || name.includes('enhanced')) {
      score += 2;
    }

    if (name.includes('google') || name.includes('microsoft') || name.includes('apple')) {
      score += 1;
    }

    return score;
  }
}
