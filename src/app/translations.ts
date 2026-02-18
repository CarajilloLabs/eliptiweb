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
      'La falla infantil és el somriure de la nostra festa, el lloc on la innocència i la creativitat es donen la mà per crear màgia. Aquests ninots més petits porten amb ells la il·lusió dels més menuts, però també la saviesa de qui sap que la festa és per a tots.',
      'En cada detall de la falla infantil hi ha una lliçó: que la tradició es transmet de generació en generació, que els valors que ens uneixen com a comunitat també poden ser explicats amb paraules senzilles i colors vius. És la manera en què els nens i nenes aprenen a estimar la seva cultura mentre juguen.',
      'Aquest any, la nostra falla infantil ens recorda que la festa fallera és un univers complet on hi ha lloc per a la reflexió seriosa i per al joc alegre. Els artistes que creen aquestes obres saben que estan plantant la llavor de l\'amor per la tradició en els cors dels més joves.',
      'Que aquesta cremà infantil sigui el moment en què els nostres fills i filles comprenen que la festa és seva també, que la tradició els pertany i que, com les flames que cremen els ninots, la passió per la cultura fallera mai s\'apaga.'
    ]
  },
  es: {
    title: 'Crítica de la Falla Infantil',
    content: [
      'La falla infantil es la sonrisa de nuestra fiesta, el lugar donde la inocencia y la creatividad se dan la mano para crear magia. Estos ninots más pequeños llevan consigo la ilusión de los más pequeños, pero también la sabiduría de quien sabe que la fiesta es para todos.',
      'En cada detalle de la falla infantil hay una lección: que la tradición se transmite de generación en generación, que los valores que nos unen como comunidad también pueden ser explicados con palabras sencillas y colores vivos. Es la manera en que los niños y niñas aprenden a amar su cultura mientras juegan.',
      'Este año, nuestra falla infantil nos recuerda que la fiesta fallera es un universo completo donde hay lugar para la reflexión seria y para el juego alegre. Los artistas que crean estas obras saben que están plantando la semilla del amor por la tradición en los corazones de los más jóvenes.',
      'Que esta cremà infantil sea el momento en que nuestros hijos e hijas comprenden que la fiesta es suya también, que la tradición les pertenece y que, como las llamas que queman los ninots, la pasión por la cultura fallera nunca se apaga.'
    ]
  },
  en: {
    title: 'Children\'s Falla Critique',
    content: [
      'The children\'s falla is the smile of our celebration, the place where innocence and creativity join hands to create magic. These smaller ninots carry with them the wonder of the little ones, but also the wisdom of those who know that the celebration is for everyone.',
      'In every detail of the children\'s falla there is a lesson: that tradition is passed from generation to generation, that the values that unite us as a community can also be explained with simple words and bright colors. It is how children learn to love their culture while playing.',
      'This year, our children\'s falla reminds us that the falla celebration is a complete universe where there is room for serious reflection and joyful play. The artists who create these works know they are planting the seed of love for tradition in the hearts of the youngest.',
      'May this children\'s cremà be the moment when our sons and daughters understand that the celebration is also theirs, that tradition belongs to them, and that, like the flames that burn the ninots, the passion for falla culture never goes out.'
    ]
  },
  eu: {
    title: 'Haurren Fallaren Kritika',
    content: [
      'Haurren falla gure ospakizunaren irribarrea da, inozentzia eta sormenak eskua ematen dioten tokia magia sortzeko. Ninot txikiago hauek txikien harridura daramate, baina baita ospakizuna guztiontzat dela dakitenen jakinduria ere.',
      'Haurren fallaren xehetasun bakoitzean ikasgai bat dago: tradizioa belaunaldiz belaunaldi transmititzen dela, komunitate gisa batzen gaituzten balioak hitz sinpleekin eta kolore biziekin ere azal daitezkeela. Haurrek beren kultura maite ikasteko modua da jolasean.',
      'Urte honetan, gure haurren fallak gogorarazten digu falla ospakizuna unibertso osoa dela, non gogoeta serioetarako eta jolas alaietarako lekua dagoen. Lan hauek sortzen dituzten artistek dakite tradizioarekiko maitasunaren hazia landatzen ari direla gazteenen bihotzetan.',
      'Haurren cremà hau unea izan bedi gure seme-alabek ospakizuna ere berena dela ulertzen dutenean, tradizioa berena dela, eta ninotak erretzen dituzten garrak bezala, falla kulturarekiko pasioa ez dela inoiz itzaltzen.'
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
