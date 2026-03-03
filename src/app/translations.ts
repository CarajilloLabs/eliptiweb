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
      'Espai si penses fer-nos mal<br>o un banderí furtar,<br>que tenim en nostre casal<br>del vudú la bruixa més gran.',
      'Tinc una flor,<br>dins del meu cor.<br>Amb la teua màgia,<br>troba el meu amor.',
      'Gat negre al costat,<br>granota al costat.<br>Amb el foc de la falla,<br>tot el món encantat!',
      'Bruixeta, bruixeta,<br>remena el calder.<br>Amb el foc i la màgia,<br>tot anirà bé!',
      'Eixa mà vol clavar-nos,<br>dins d\'un gran forat.<br>A Segona ens espenta,<br>¡quin zombi més malvat!',
      'Maga, fes el teu conjur<br>amb l\'ajuda dels ouets,<br>que si plou en estes Falles...<br>¡es banyaran els ninotets!',
      'Mil \"likes\" vull tindre,<br>fent este ritual,<br>a TikTok vull viure<br>i ser el més genial.',
      'Molt de Xat GPT<br>i poca llibreta,<br>com el xiquet no estudie<br>traurà una nota ben llegeta!',
      'La mort és l\'últim ritual,<br>la cremà el nostre destí,<br>entre cendres queda escrit,<br>que tot té el seu camí.',
      'Tira la moneda,<br>que el ritual és clar:<br>la font arreplega<br>i tu a treballar.',
      'Un trèvol he trobat,<br>i la sort m\'ha donat.<br>Quatre fulles de color,<br>per a ser el millor!',
      'Tinc una moneda,<br>que la por se\'n vaja.<br>Butxaca plena,<br>fora la pena!'
    ]
  },
  es: {
    title: 'Crítica de la Falla Infantil',
    content: [
      'Espacio si piensas hacernos daño<br>o un banderín robar,<br>que en nuestro casal tenemos<br>a la bruja del vudú más grande.',
      'Tengo una flor<br>dentro de mi corazón.<br>Con tu magia,<br>encuentra mi amor.',
      'Gato negro al lado,<br>rana a mi lado.<br>Con el fuego de la falla,<br>todo el mundo encantado.',
      'Brujita, brujita,<br>remueve el caldero.<br>Con el fuego y la magia,<br>todo irá bien.',
      'Esa mano quiere meternos<br>dentro de un gran agujero.<br>A Segunda nos empuja,<br>¡qué zombi más perverso!',
      'Maga, haz tu conjuro<br>con la ayuda de los huevecitos,<br>que si llueve en estas Fallas...<br>¡se mojarán los ninotitos!',
      'Mil \"likes\" quiero tener,<br>haciendo este ritual;<br>en TikTok quiero vivir<br>y ser el más genial.',
      'Mucho Chat GPT<br>y poca libreta;<br>si el niño no estudia<br>sacará una nota bien discreta.',
      'La muerte es el último ritual,<br>la cremà nuestro destino;<br>entre cenizas queda escrito<br>que todo tiene su camino.',
      'Lanza la moneda,<br>que el ritual está claro:<br>la fuente la recoge<br>y tú a trabajar.',
      'Un trébol he encontrado<br>y la suerte me ha entregado.<br>Cuatro hojas de color<br>para ser el mejor.',
      'Tengo una moneda<br>para que el miedo se vaya.<br>Bolsillo lleno,<br>fuera la pena.'
    ]
  },
  en: {
    title: 'Children\'s Falla Critique',
    content: [
      'Space out if you plan to harm us<br>or steal a little flag,<br>in our falla hall we keep<br>the greatest voodoo witch of all.',
      'I have a flower<br>deep inside my heart.<br>With your magic,<br>help me find my love.',
      'Black cat by my side,<br>a frog by my side.<br>With the fire of the falla,<br>all the world is spellbound.',
      'Little witch, little witch,<br>stir up the cauldron.<br>With the fire and the magic,<br>everything will be fine.',
      'That hand wants to push us<br>into a giant hole.<br>It sends us down to Second,<br>what an evil zombie.',
      'Sorceress, cast your spell<br>with the help of the little eggs,<br>if it rains in these Fallas,<br>all the little ninots will get wet.',
      'A thousand \"likes\" I want to get<br>by doing this ritual;<br>on TikTok I want to live<br>and be the coolest of all.',
      'So much Chat GPT<br>and hardly any notebook;<br>if the child does not study,<br>the grade will be quite poor.',
      'Death is the final ritual,<br>the cremà is our fate;<br>written down among the ashes<br>is that everything has its own way.',
      'Throw in the coin,<br>for the ritual is clear:<br>the fountain gathers it,<br>and you go off to work.',
      'I have found a clover<br>and it has given me luck;<br>four colored leaves<br>to help me be the best.',
      'I have a coin<br>so that fear will go away;<br>with a pocket full,<br>sadness goes away.'
    ]
  },
  eu: {
    title: 'Haurren Fallaren Kritika',
    content: [
      'Toki egin kaltea egin nahi badiguzu<br>edo banderín bat lapurtu,<br>gure casal-ean dugu<br>vuduaren sorgin handiena.',
      'Lore bat daukat<br>bihotzaren barruan.<br>Zure magiarekin,<br>aurki ezazu nire maitasuna.',
      'Katu beltza alboan,<br>igel bat alboan.<br>Fallaren suarekin,<br>mundu osoa sorginduta.',
      'Sorgintxo, sorgintxo,<br>nahasi kazola.<br>Suarekin eta magiarekin,<br>dena ondo joango da.',
      'Esku horrek gurekin nahi du<br>zulo handi batean amaitu.<br>Bigarrenera bultzatzen gaitu,<br>zein zonbi gaiztoa, ikusi!',
      'Maga, egin ezazu zure sorginkeria<br>arrautzatxoen laguntzaz;<br>Falles hauetan euria egiten badu,<br>ninot txikitxoak guztiz bustiko dira.',
      'Mila \"like\" eduki nahi ditut<br>erritu hau eginez;<br>TikTok-en bizi nahi dut<br>eta guztietatik onena izan.',
      'Chat GPT asko<br>eta koaderno gutxi;<br>umeak ez badu ikasten,<br>nota benetan eskasa aterako du.',
      'Heriotza da azken errituala,<br>cremà da gure patua;<br>errautsetan idatzita geratzen da<br>gauza guztiek beren bidea dutela.',
      'Bota txanpona,<br>errituala argi dago:<br>iturriak jasotzen du<br>eta zu lanera.',
      'Hirusta bat aurkitu dut<br>eta zortea eman dit;<br>lau hosto koloretsu<br>onena izan nadin.',
      'Txanpon bat daukat<br>beldurra joan dadin;<br>poltsikoa beteta,<br>atsekabea kanpora.'
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
