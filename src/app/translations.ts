export type Language = 'val' | 'es' | 'en' | 'eu';

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
  },
  eu: {
    title: 'Fallaren Kritika',
    content: [
      'Su eta festa gau magiko honetan, gure falla gure herri identitatearen ispilu bihurtzen da. Ninot bakoitza, xehetasun bakoitza, garretan irakurtzen den kritika bakoitza, gure historia partekatuaren lekukotza da.',
      'Falla ez da gau bakar batean erretzen den arte lan epe laburra besterik. Bere buruari barre egiten dion herri baten ahotsa da, umorez kritikatzen duena eta pasioz ospatzen duena. Belaunaldiz belaunaldi bizirik mantetzen den tradizioa da, gureak definitzen duten balioak berekin eramaten dituena.',
      'Urte honetan, gure kritika ospakizun hau posible egiten duten guztiei omenaldia izan nahi du. Ninotak bizitzara ematen dizkieten artista falleroei, aktiboki parte hartzen duten auzokideei, eta modu batean edo bestean tradizio hau urtero handiagoa egiten laguntzen duten guztiei.',
      'Gau honetako garrek gogoraraz diezaguketela, falla bezala, bizitza epe laburra dela baina edertasunez betea. Eta falla tradizioa bezala, komunitate gisa dugun lotura dela benetan irauten duena edozein cremà baino haratago.'
    ]
  }
};

export const translationsInfantil: Record<Language, Translations> = {
  val: {
    title: 'Crítica de la Falla Infantil',
    content: [
      'Espai si penses fer-nos mal o un banderí furtar, que tenim en nostre casal del vudú la bruixa més gran.',
      'Tinc una flor, dins del meu cor. Amb la teua màgia, troba el meu amor.',
      'Gat negre al costat, granota al costat. Amb el foc de la falla, tot el món encantat!',
      'Bruixeta, bruixeta, remena el calder. Amb el foc i la màgia, tot anirà bé!',
      'Eixa mà vol clavar-nos dins d\'un gran forat. A Segona ens espenta, ¡quin zombi més malvat!',
      'Maga, fes el teu conjur amb l\'ajuda dels ouets, que si plou en estes Falles... ¡es banyaran els ninotets!',
      'Mil \"likes\" vull tindre, fent este ritual, a TikTok vull viure i ser el més genial.',
      'Molt de Xat GPT i poca llibreta, com el xiquet no estudie traurà una nota ben llegeta!',
      'La mort és l\'últim ritual, la cremà el nostre destí, entre cendres queda escrit, que tot té el seu camí.',
      'Tira la moneda, que el ritual és clar: la font arreplega i tu a treballar.',
      'Un trèvol he trobat, i la sort m\'ha donat. Quatre fulles de color, per a ser el millor!',
      'Tinc una moneda, que la por se\'n vaja. Butxaca plena, fora la pena!'
    ]
  },
  es: {
    title: 'Crítica de la Falla Infantil',
    content: [
      'Espacio si piensas hacernos daño o un banderín robar, que en nuestro casal tenemos a la bruja del vudú más grande.',
      'Tengo una flor dentro de mi corazón. Con tu magia, encuentra mi amor.',
      'Gato negro al lado, rana a mi lado. Con el fuego de la falla, todo el mundo encantado.',
      'Brujita, brujita, remueve el caldero. Con el fuego y la magia, todo irá bien.',
      'Esa mano quiere meternos dentro de un gran agujero. A Segunda nos empuja, ¡qué zombi más perverso!',
      'Maga, haz tu conjuro con la ayuda de los huevecitos, que si llueve en estas Fallas... ¡se mojarán los ninotitos!',
      'Mil \"likes\" quiero tener, haciendo este ritual; en TikTok quiero vivir y ser el más genial.',
      'Mucho Chat GPT y poca libreta; si el niño no estudia sacará una nota bien discreta.',
      'La muerte es el último ritual, la cremà nuestro destino; entre cenizas queda escrito que todo tiene su camino.',
      'Lanza la moneda, que el ritual está claro: la fuente la recoge y tú a trabajar.',
      'Un trébol he encontrado y la suerte me ha entregado. Cuatro hojas de color para ser el mejor.',
      'Tengo una moneda para que el miedo se vaya. Bolsillo lleno, fuera la pena.'
    ]
  },
  en: {
    title: 'Children\'s Falla Critique',
    content: [
      'Space out if you plan to harm us or steal a little flag, in our falla hall we keep the greatest voodoo witch of all.',
      'I have a flower deep inside my heart. With your magic, help me find my love.',
      'Black cat by my side, a frog by my side. With the fire of the falla, all the world is spellbound.',
      'Little witch, little witch, stir up the cauldron. With the fire and the magic, everything will be fine.',
      'That hand wants to push us into a giant hole. It sends us down to Second, what an evil zombie.',
      'Sorceress, cast your spell with the help of the little eggs, if it rains in these Fallas, all the little ninots will get wet.',
      'A thousand \"likes\" I want to get by doing this ritual; on TikTok I want to live and be the coolest of all.',
      'So much Chat GPT and hardly any notebook; if the child does not study, the grade will be quite poor.',
      'Death is the final ritual, the cremà is our fate; written down among the ashes is that everything has its own way.',
      'Throw in the coin, for the ritual is clear: the fountain gathers it, and you go off to work.',
      'I have found a clover and it has given me luck; four colored leaves to help me be the best.',
      'I have a coin so that fear will go away; with a pocket full, sadness goes away.'
    ]
  },
  eu: {
    title: 'Haurren Fallaren Kritika',
    content: [
      'Toki egin kaltea egin nahi badiguzu edo banderín bat lapurtu, gure casal-ean vuduaren sorgin handiena dugulako.',
      'Lore bat daukat bihotzaren barruan. Zure magiarekin, aurki ezazu nire maitasuna.',
      'Katu beltza alboan, igel bat alboan. Fallaren suarekin, mundu osoa sorginduta.',
      'Sorgintxo, sorgintxo, nahasi kazola. Suarekin eta magiarekin, dena ondo joango da.',
      'Esku horrek zulo handi batean sartu nahi gaitu. Bigarrenera bultzatzen gaitu, zein zonbi gaiztoa.',
      'Maga, egin ezazu zure sorginkeria arrautzatxoen laguntzaz; Falles hauetan euria egiten badu, ninot txikitxoak guztiz bustiko dira.',
      'Mila \"like\" eduki nahi ditut erritu hau eginez; TikTok-en bizi nahi dut eta guztietatik onena izan.',
      'Chat GPT asko eta koaderno gutxi; umeak ez badu ikasten, nota benetan eskasa aterako du.',
      'Heriotza da azken errituala, cremà da gure patua; errautsetan idatzita geratzen da gauza guztiek beren bidea dutela.',
      'Bota txanpona, errituala argi dago: iturriak jasotzen du eta zu lanera.',
      'Hirusta bat aurkitu dut eta zortea eman dit; lau hosto koloretsu onena izan nadin.',
      'Txanpon bat daukat beldurra joan dadin; poltsikoa beteta, atsekabea kanpora.'
    ]
  }
};

export const languageLabels: Record<Language, string> = {
  val: 'Valencià',
  es: 'Español',
  en: 'English',
  eu: 'Euskera'
};

export const languageFlags: Record<Language, string> = {
  val: '🟡🔴',
  es: '🇪🇸',
  en: '🇬🇧',
  eu: '🏴'
};
