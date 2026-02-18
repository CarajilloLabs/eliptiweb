export type Language = 'val' | 'es' | 'en';

export interface Translations {
  title: string;
  content: string[];
}

export const translations: Record<Language, Translations> = {
  val: {
    title: 'Crítica de la Falla',
    content: [
      'En aquesta nit màgica de foc i festa, la nostra falla es converteix en el reflex de la nostra identitat com a poble. Cada ninot, cada detall, cada crítica que es llegeix entre les flames, és un testimoni de la nostra història compartida.',
      'La falla no és només una obra d\'art efímera que crema en una nit. És la veu d\'un poble que es riu de si mateix, que critica amb humor i que celebra amb passió. És la tradició que es manté viva generació rere generació, portant amb ella els valors que ens defineixen.',
      'Aquest any, la nostra crítica vol ser un homenatge a tots aquells que fan possible aquesta festa. Als artistes fallers que donen vida als ninots, als veïns que participen activament, i a tots aquells que, d\'una manera o altra, contribueixen a que cada any aquesta tradició sigui més gran.',
      'Que les flames d\'aquesta nit ens recordin que, com la falla, la vida és efímera però plena de bellesa. I que, com la tradició fallera, els nostres vincles com a comunitat són el que realment perdura més enllà de qualsevol cremà.'
    ]
  },
  es: {
    title: 'Crítica de la Falla',
    content: [
      'En esta noche mágica de fuego y fiesta, nuestra falla se convierte en el reflejo de nuestra identidad como pueblo. Cada ninot, cada detalle, cada crítica que se lee entre las llamas, es un testimonio de nuestra historia compartida.',
      'La falla no es solo una obra de arte efímera que arde en una noche. Es la voz de un pueblo que se ríe de sí mismo, que critica con humor y que celebra con pasión. Es la tradición que se mantiene viva generación tras generación, llevando consigo los valores que nos definen.',
      'Este año, nuestra crítica quiere ser un homenaje a todos aquellos que hacen posible esta fiesta. A los artistas falleros que dan vida a los ninots, a los vecinos que participan activamente, y a todos aquellos que, de una manera u otra, contribuyen a que cada año esta tradición sea más grande.',
      'Que las llamas de esta noche nos recuerden que, como la falla, la vida es efímera pero llena de belleza. Y que, como la tradición fallera, nuestros vínculos como comunidad son lo que realmente perdura más allá de cualquier cremà.'
    ]
  },
  en: {
    title: 'Falla Critique',
    content: [
      'On this magical night of fire and celebration, our falla becomes the reflection of our identity as a people. Each ninot, each detail, each critique read among the flames, is a testimony to our shared history.',
      'The falla is not just an ephemeral work of art that burns in one night. It is the voice of a people who laugh at themselves, who criticize with humor and celebrate with passion. It is the tradition that stays alive generation after generation, carrying with it the values that define us.',
      'This year, our critique wants to be a tribute to all those who make this celebration possible. To the falla artists who bring the ninots to life, to the neighbors who actively participate, and to all those who, in one way or another, contribute to making this tradition greater each year.',
      'May the flames of this night remind us that, like the falla, life is ephemeral but full of beauty. And that, like the falla tradition, our bonds as a community are what truly endure beyond any cremà.'
    ]
  }
};

export const languageLabels: Record<Language, string> = {
  val: 'Valencià',
  es: 'Español',
  en: 'English'
};

export const languageFlags: Record<Language, string> = {
  val: '🟡🔴',
  es: '🇪🇸',
  en: '🇬🇧'
};
