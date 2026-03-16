import { criticaMajorVal } from './critica-major-val';
import { criticaMajorEs } from './critica-major-es';
import { criticaMajorEn } from './critica-major-en';
import { criticaMajorEu } from './critica-major-eu';

export type Language = 'val' | 'es' | 'en' | 'eu';

export interface Translations {
  title: string;
  content: string[];
}

export interface FallaIntroduction {
  logoSrc: string;
  logoAlt: string;
  content: string[];
}

export interface FallaMeta {
  monument: string;
  lemaLabel: string;
  artistLabel: string;
  explanationLabel: string;
  lema: string;
  artist: string;
}

export const majorIntroductions: Record<Language, FallaIntroduction> = {
  val: {
    logoSrc: 'img/afonats.png',
    logoAlt: 'Cartell Falla Major "Afonats"',
    content: [
      '<b>ESCENA DE BENVINGUDA:</b>',
      'Cada any, quan el calendari avança cap a març, Gandia es transforma en un escenari on la ironia, la memòria i la mirada crítica recuperen el seu lloc natural. Entre carrers que vibren, monuments que parlen i veus que s’alcen, les falles tornen a ser el ritual col·lectiu que ens obliga a mirar-nos de front.',
      'Enguany, en un context social, polític i econòmic que continua generant incerteses, la comissió de la Falla Plaça El·líptica, de la mà dels artistes Palacio i Serra, presenta un lema tan nítid com colpidor: Afonats.',
      'Afonats parla de nosaltres. Parla d’un país cansat d’escoltar promeses que s’esvaeixen com l’escuma de la mar. Parla d’unes institucions que sovint naveguen sense rumb, atrapades entre decisions improvisades i equilibris interessats.',
      'Però també parla de Gandia. D’una ciutat que encara arrossega batalles quotidianes: la gestió desigual dels barris, la convivència entre desenvolupament i patrimoni, la burocràcia que tot ho alentix i les tensions polítiques entre formacions més preocupades per marcar perfil que per fer avançar el municipi. I, com sempre, parla del veí de peu, que continua remant, siga com siga i contra qui siga.',
      'Aquest monument no és una fantasia marinera; és un mirall. Però també és un recordatori. Perquè, fins i tot afonats, sempre queda un últim glop d’aire, una última espenta, una última manera de tornar a pujar. Igual que la nostra comissió, que en cinquanta anys ha après a caure i a ressorgir, a enfonsar-se i a tornar a brillar.',
      'Benvinguts a Afonats: un viatge a les profunditats del que som i del que encara podem arribar a ser, si trobem, per fi, el coratge d’eixir a respirar.'
    ]
  },
  es: {
    logoSrc: 'img/afonats.png',
    logoAlt: 'Cartell Falla Major "Afonats"',
    content: [
      '<b>ESCENA DE BIENVENIDA:</b>',
      'Cada año, cuando el calendario avanza hacia marzo, Gandia se transforma en un escenario donde la ironía, la memoria y la mirada crítica recuperan su lugar natural. Entre calles que vibran, monumentos que hablan y voces que se alzan, las fallas vuelven a ser el ritual colectivo que nos obliga a mirarnos de frente.',
      'Este año, en un contexto social, político y económico que sigue generando incertidumbres, la comisión de la Falla Plaza Elíptica, de la mano de los artistas Palacio y Serra, presenta un lema tan nítido como impactante: Afonats.',
      'Afonats habla de nosotros. Habla de un país cansado de escuchar promesas que se desvanecen como la espuma del mar. Habla de unas instituciones que a menudo navegan sin rumbo, atrapadas entre decisiones improvisadas y equilibrios interesados.',
      'Pero también habla de Gandia. De una ciudad que aún arrastra batallas cotidianas: la gestión desigual de los barrios, la convivencia entre desarrollo y patrimonio, la burocracia que todo lo ralentiza y las tensiones políticas entre formaciones más preocupadas por marcar perfil que por hacer avanzar el municipio. Y, como siempre, habla del vecino de a pie, que sigue remando, sea como sea y contra quien sea.',
      'Este monumento no es una fantasía marinera; es un espejo. Pero también es un recordatorio. Porque, incluso afonats, siempre queda un último sorbo de aire, un último empujón, una última manera de volver a subir. Igual que nuestra comisión, que en cincuenta años ha aprendido a caer y a resurgir, a hundirse y a volver a brillar.',
      'Bienvenidos a Afonats: un viaje a las profundidades de lo que somos y de lo que aún podemos llegar a ser, si encontramos, por fin, el valor de salir a respirar.'
    ]
  },
  en: {
    logoSrc: 'img/afonats.png',
    logoAlt: 'Cartell Falla Major "Afonats"',
    content: [
      '<b>WELCOME SCENE:</b>',
      'Every year, as the calendar moves towards March, Gandia is transformed into a stage where irony, memory and a critical gaze recover their natural place. Between vibrant streets, speaking monuments and rising voices, the Fallas once again become the collective ritual that forces us to look at ourselves head‑on.',
      'This year, in a social, political and economic context that continues to generate uncertainty, the Plaza Elíptica Falla committee, together with the artists Palacio and Serra, presents a motto as clear as it is striking: Afonats.',
      'Afonats speaks about us. It speaks of a country tired of listening to promises that fade away like sea foam. It speaks of institutions that often sail without a course, trapped between improvised decisions and carefully balanced interests.',
      'But it also speaks of Gandia. Of a city that still drags along daily battles: the unequal management of neighbourhoods, the coexistence between development and heritage, the bureaucracy that slows everything down, and political tensions between parties more worried about shaping their image than about moving the town forward. And, as always, it speaks of the ordinary neighbour, who keeps rowing, no matter how and against whoever it may be.',
      'This monument is not a seafaring fantasy; it is a mirror. But it is also a reminder. Because even when we are “afonats”, there is always one last breath of air, one last push, one last way to rise again. Just like our committee, which in fifty years has learned to fall and to rise again, to sink and to shine once more.',
      'Welcome to Afonats: a journey into the depths of who we are and of what we can still become, if we finally find the courage to come up for air.'
    ]
  },
  eu: {
    logoSrc: 'img/afonats.png',
    logoAlt: 'Cartell Falla Major "Afonats"',
    content: [
      '<b>ONGI ETORRITZEKO ESZENA:</b>',
      'Urtero, egutegia martxorantz doanean, Gandia bihurtzen da ironia, oroimena eta begirada kritikoa bere tokira itzultzen diren agertoki. Kale bizietan, hitz egiten duten monumentuen eta altxatzen diren ahotsen artean, Falles berriz ere bihurtzen dira aurrez aurre begiratzera behartzen gaituen erritu kolektiboa.',
      'Aurten, ziurgabetasunak sortzen jarraitzen duen testuinguru sozial, politiko eta ekonomiko batean, Plaça El·líptica Falla‑ko batzordeak, Palacio eta Serra artistekin batera, lelo argi eta kolpagarri hau aurkezten du: Afonats.',
      'Afonats guaz ari da. Hitza ematen digute itsasoaren aparra bezala desagertzen diren promesez nekatutako herrialde bati buruz. Norabiderik gabe nabigatzen duten erakundeez ere ari da, erabaki inprobisatuen eta interesdun oreken artean harrapatuta.',
      'Baina Gandiaz ere mintzo da. Eguneroko borrokak arrastaka daramatzan hiri batez: auzoen kudeaketa desorekatuaz, garapena eta ondarea bateratzeko zailtasunaz, dena moteltzen duen burokraziaz eta udalerria aurrera eramatea baino gehiago irudia zaintzeaz arduratzen diren indar politikoen tentsioez. Eta, beti bezala, oinezko auzoarrari buruz hitz egiten du, nolanahi ere eta edonoren aurka arraunean jarraitzen duen horri buruz.',
      'Monumentu hau ez da itsas fantasia bat; ispilu bat da. Baina oroigarri bat ere bada. Izan ere, hondoratuta gaudenean ere, beti geratzen da aire‑zurrutada bat, azken bultzada bat, berriro igotzeko azken modu bat. Gure komisioen antzera, berrogeita hamar urteotan erortzen eta berriz altxatzen, hondoratzen eta berriro distiratzen ikasi baitu.',
      'Ongi etorri Afonats mundura: garenaren eta oraindik izan gaitezkeenaren sakonerako bidaia bat, azkenean arnasa hartzera ausartzen bagara.'
    ]
  }
};

export const childIntroductions: Record<Language, FallaIntroduction> = {
  val: {
    logoSrc: 'img/ritual.png',
    logoAlt: 'Cartell Falla Infantil "Rituals"',
    content: [
      'Al món hi ha rituals per a tot: per a enamorar-se, per a tindre sort, per a que no ploga en Falles… i també per a fer diners, fer-se viral o, fins i tot, triomfar en TikTok.',
      'Esta falla ens convida a riure\'ns de tots eixos rituals que fem cada dia, com si foren màgia, però sense vareta.',
      'Xiquets i xiquetes protagonitzen escenes on la imaginació, l\'exageració i l\'humor convertixen les seues il·lusions en un gran embolic.',
      'Hi ha qui encén ciris per a aprovar sense estudiar, qui envia cartes d\'amor com si foren encanteris, qui demana diners a una ferradura oxidada i qui balla davant del cel per espantar els núvols.',
      'Tots ells utilitzen rituals màgics, absurds o impossibles per aconseguir allò que volen, i acaben descobrint que, per molt que crides als déus o al sant del que no ploga, el que més funciona és l\'esforç, l\'alegria i el comboi de les Falles.',
      'Amb ninots plens de color, crítica simpàtica i molts somriures, esta falla ens recorda que la vida no és un ritual perfecte, però entre foc, festa i germanor, sempre acaba sent màgica en Falles.'
    ]
  },
  es: {
    logoSrc: 'img/ritual.png',
    logoAlt: 'Cartel Falla Infantil \"Rituales\"',
    content: [
      'En el mundo hay rituales para todo: para enamorarse, para tener suerte, para que no llueva en Fallas… y también para ganar dinero, hacerse viral o, incluso, triunfar en TikTok.',
      'Esta falla nos invita a reírnos de todos esos rituales que hacemos cada día, como si fueran magia, pero sin varita.',
      'Niños y niñas protagonizan escenas donde la imaginación, la exageración y el humor convierten sus ilusiones en un gran embrollo.',
      'Hay quien enciende velas para aprobar sin estudiar, quien envía cartas de amor como si fueran hechizos, quien pide dinero a una herradura oxidada y quien baila bajo el cielo para espantar las nubes.',
      'Todos ellos usan rituales mágicos, absurdos o imposibles para conseguir lo que quieren, y acaban descubriendo que, por mucho que grites a los dioses o al santo de que no llueva, lo que más funciona es el esfuerzo, la alegría y el buen rollo de las Fallas.',
      'Con ninots llenos de color, crítica simpática y muchas sonrisas, esta falla nos recuerda que la vida no es un ritual perfecto, pero entre fuego, fiesta y hermandad, siempre acaba siendo mágica en Fallas.'
    ]
  },
  en: {
    logoSrc: 'img/ritual.png',
    logoAlt: 'Children Falla Poster \"Rituals\"',
    content: [
      'In this world there are rituals for everything: to fall in love, to have good luck, to stop it raining during Fallas, and also to make money, go viral or even succeed on TikTok.',
      'This children\'s falla invites us to laugh at all those rituals we do every day, as if they were magic, but without a wand.',
      'Boys and girls star in scenes where imagination, exaggeration and humour turn their wishes into one big mess.',
      'Some light candles to pass an exam without studying, some send love letters as if they were spells, some ask a rusty horseshoe for money and some dance under the sky to scare away the clouds.',
      'All of them use magical, absurd or impossible rituals to get what they want, and they end up discovering that, no matter how much you shout to the gods or to the saint of please no rain, what really works is effort, joy and the shared spirit of Fallas.',
      'With colourful ninots, gentle criticism and lots of smiles, this falla reminds us that life is not a perfect ritual, but among fire, celebration and togetherness, it always ends up being magical at Fallas.'
    ]
  },
  eu: {
    logoSrc: 'img/ritual.png',
    logoAlt: 'Haurren Falla Kartela \"Errituak\"',
    content: [
      'Munduan denetarako errituak daude: maitemintzeko, zorte ona izateko, Falletan euririk ez egiteko, eta baita dirua irabazteko, biral bihurtzeko edo TikTok-en arrakasta izateko ere.',
      'Falla infantil honek barre egitera gonbidatzen gaitu egunero egiten ditugun erritu horiez guztiez, magia balira bezala, baina makilarik gabe.',
      'Umeek protagonizatzen dituzte eszenak; irudimenak, gehiegikeriek eta umoreak haien ametsak anabasa handi bihurtzen dituzte.',
      'Batzuek kandela pizten dute ikasi gabe gainditzeko, beste batzuek maitasun gutunak bidaltzen dituzte sorginkeriak balira bezala, bada dirua eskatzera herdoildutako zaldi-ferrari heltzen zaiona, eta badago hodeiak uxatzeko zeruaren aurrean dantzan hasten dena ere.',
      'Guztiek erabiltzen dituzte erritu magiko, zentzugabe edo ezinezkoak nahi dutena lortzeko, eta azkenean deskubritzen dute, jainkoei edo ez dezala euririk egin santuari oihukatu arren, onena ahalegina, poza eta Falletako giro alaia dela.',
      'Kolorez beteriko ninotekin, kritika atseginarekin eta irribarre askorekin, falla honek gogorarazten digu bizitza ez dela erritu perfektua, baina suaren, festaren eta adiskidetzaren artean, beti bihurtzen dela magikoa Falletan.'
    ]
  }
};

export const majorMeta: Record<Language, FallaMeta> = {
  val: {
    monument: 'MONUMENT MAJOR.',
    lemaLabel: 'LEMA:',
    artistLabel: 'ARTISTA:',
    explanationLabel: 'EXPLICACIÓ:',
    lema: 'Afonats',
    artist: 'Palacio I Serra'
  },
  es: {
    monument: 'MONUMENTO MAYOR.',
    lemaLabel: 'LEMA:',
    artistLabel: 'ARTISTA:',
    explanationLabel: 'EXPLICACIÓN:',
    lema: 'Afonats',
    artist: 'Palacio I Serra'
  },
  en: {
    monument: 'MAIN MONUMENT.',
    lemaLabel: 'MOTTO:',
    artistLabel: 'ARTIST:',
    explanationLabel: 'EXPLANATION:',
    lema: 'Afonats',
    artist: 'Palacio I Serra'
  },
  eu: {
    monument: 'MONUMENTU NAGUSIA.',
    lemaLabel: 'LELOA:',
    artistLabel: 'ARTISTA:',
    explanationLabel: 'AZALPENA:',
    lema: 'Afonats',
    artist: 'Palacio I Serra'
  }
};

export const childMeta: Record<Language, FallaMeta> = {
  val: {
    monument: 'MONUMENT INFANTIL.',
    lemaLabel: 'LEMA:',
    artistLabel: 'ARTISTA:',
    explanationLabel: 'EXPLICACIÓ:',
    lema: 'Rituals',
    artist: 'Barraques Art'
  },
  es: {
    monument: 'MONUMENTO INFANTIL.',
    lemaLabel: 'LEMA:',
    artistLabel: 'ARTISTA:',
    explanationLabel: 'EXPLICACIÓN:',
    lema: 'Rituals',
    artist: 'Barraques Art'
  },
  en: {
    monument: 'CHILDREN\'S MONUMENT.',
    lemaLabel: 'MOTTO:',
    artistLabel: 'ARTIST:',
    explanationLabel: 'EXPLANATION:',
    lema: 'Rituals',
    artist: 'Barraques Art'
  },
  eu: {
    monument: 'MONUMENTU INFANTILA.',
    lemaLabel: 'LELOA:',
    artistLabel: 'ARTISTA:',
    explanationLabel: 'AZALPENA:',
    lema: 'Rituals',
    artist: 'Barraques Art'
  }
};

export const translations: Record<Language, Translations> = {
  val: {
    title: 'Falla Major',
    content: criticaMajorVal
  },
  es: {
    title: 'Falla Mayor',
    content: criticaMajorEs
  },
  en: {
    title: 'Main Falla',
    content: criticaMajorEn
  },
  eu: {
    title: 'Falla Nagusia',
    content: criticaMajorEu
  }
};

export const translationsInfantil: Record<Language, Translations> = {
  val: {
    title: 'Falla Infantil',
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
    title: 'Falla Infantil',
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
    title: 'Children\'s Falla',
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
    title: 'Haurren Falla',
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

export const footerTexts: Record<Language, string> = {
  val: 'Realitzat per',
  es: 'Realizado por',
  en: 'Made by',
  eu: 'Egina'
};

export const listenLabels: Record<Language, string> = {
  val: 'Escoltar',
  es: 'Escuchar',
  en: 'Listen',
  eu: 'Entzun'
};

export const playingLabels: Record<Language, string> = {
  val: 'Reproduint...',
  es: 'Reproduciendo...',
  en: 'Playing...',
  eu: 'Erreproduzitzen...'
};
