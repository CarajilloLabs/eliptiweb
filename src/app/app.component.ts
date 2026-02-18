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

  readonly animationState = computed(() => this.isContentVisible() ? 'visible' : 'hidden');
  readonly currentTranslation = computed(() => this.translations[this.currentLanguage()]);
  readonly currentTranslationInfantil = computed(() => this.translationsInfantil[this.currentLanguage()]);

  constructor() {
    const savedLanguage = localStorage.getItem('falla-language') as Language;
    if (savedLanguage && (savedLanguage === 'val' || savedLanguage === 'es' || savedLanguage === 'en' || savedLanguage === 'eu')) {
      this.currentLanguage.set(savedLanguage);
    }

    effect(() => {
      localStorage.setItem('falla-language', this.currentLanguage());
    });
  }

  changeLanguage(lang: Language): void {
    if (lang !== this.currentLanguage()) {
      this.isContentVisible.set(false);
      setTimeout(() => {
        this.currentLanguage.set(lang);
        setTimeout(() => {
          this.isContentVisible.set(true);
        }, 50);
      }, 200);
    }
  }
}
