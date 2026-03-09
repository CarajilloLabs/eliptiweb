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
      'Esta falla, amb el lema "Afonats", ens parla de tot allò que, com si fora el mar, ens pot engolir si no anem amb compte.',
      'El mar simbolitza la vida mateixa: a voltes tranquil·la, a voltes perillosa. Entre onades i criatures marines apareixen personatges que representen una societat que moltes vegades viu massa de pressa, sense mirar on navega.',
      '"Afonats" ens mostra com podem acabar perdent el rumb, ofegats per l\'ambició, la desinformació, la falta de valors o la indiferència. Personatges que semblen avançar, però en realitat s\'enfonsen.',
      'Amb una estètica marinera, plena de moviment, color i fantasia, la falla combina crítica i humor per recordar-nos que no tot el que brilla a la superfície és segur.',
      'Esta falla ens convida a alçar el cap, agafar el timó i decidir cap a on volem anar, abans que siga massa tard.',
      'Perquè si no sabem navegar junts, tots podem acabar… afonats.'
    ]
  },
  es: {
    logoSrc: 'img/afonats.png',
    logoAlt: 'Cartell Falla Major "Afonats"',
    content: [
      'Esta falla, con el lema "Afonats", nos habla de todo aquello que, como si fuera el mar, puede engullirnos si no vamos con cuidado.',
      'El mar simboliza la propia vida: a veces tranquila, a veces peligrosa. Entre olas y criaturas marinas aparecen personajes que representan una sociedad que muchas veces vive demasiado deprisa, sin mirar hacia dónde navega.',
      '"Afonats" nos muestra cómo podemos acabar perdiendo el rumbo, ahogados por la ambición, la desinformación, la falta de valores o la indiferencia. Personajes que parecen avanzar, pero en realidad se hunden.',
      'Con una estética marinera, llena de movimiento, color y fantasía, la falla combina crítica y humor para recordarnos que no todo lo que brilla en la superficie es seguro.',
      'Esta falla nos invita a alzar la cabeza, coger el timón y decidir hacia dónde queremos ir, antes de que sea demasiado tarde.',
      'Porque si no sabemos navegar juntos, todos podemos acabar… hundidos.'
    ]
  },
  en: {
    logoSrc: 'img/afonats.png',
    logoAlt: 'Cartell Falla Major "Afonats"',
    content: [
      'This falla, with the motto "Afonats", speaks about everything that, like the sea, can swallow us if we are not careful.',
      'The sea symbolizes life itself: sometimes calm, sometimes dangerous. Among waves and sea creatures appear characters who represent a society that often lives too fast, without looking where it is sailing.',
      '"Afonats" shows us how we can end up losing our course, drowned by ambition, misinformation, lack of values or indifference. Characters who seem to move forward but are actually sinking.',
      'With a seafaring aesthetic full of movement, colour and fantasy, the falla blends critique and humour to remind us that not everything that shines on the surface is safe.',
      'This falla invites us to lift our heads, take the helm and decide where we want to go before it is too late.',
      'Because if we do not know how to sail together, we can all end up… sunk.'
    ]
  },
  eu: {
    logoSrc: 'img/afonats.png',
    logoAlt: 'Cartell Falla Major "Afonats"',
    content: [
      '"Afonats" leloa duen falla honek, itsaso balitz bezala, kontuz ibiltzen ez bagara gu irents dezakeen guztiaz hitz egiten digu.',
      'Itsasoak bizitza bera sinbolizatzen du: batzuetan lasaia, batzuetan arriskutsua. Olatuen eta itsas izakien artean, askotan azkarregi bizi den eta nora doan begiratzen ez duen gizartea ordezkatzen duten pertsonaiak agertzen dira.',
      '"Afonats" obrak erakusten digu nola gal dezakegun norabidea, anbizioak, desinformazioak, balioen faltak edo axolagabekeriak itoak. Aurrera doazela ematen duten pertsonaiak dira, baina benetan hondoratzen ari dira.',
      'Itxura marineroarekin, mugimenduz, kolorez eta fantasiáz betea, falla honek kritika eta umorea uztartzen ditu, gainazalean distiratzen duen guztiak ez dela segurua gogorarazteko.',
      'Falla honek burua altxatzera, lema hartzera eta berandu izan baino lehen nora joan nahi dugun erabakitzera gonbidatzen gaitu.',
      'Elkarrekin nabigatzen ez badakigu, guztiok amai dezakegu… hondoratuta.'
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
    content: [
      'En aquesta nit màgica de foc i festa, la nostra falla es converteix en el reflex de la nostra identitat com a poble. Cada ninot, cada detall, cada crítica que es llegeix entre les flames, és un testimoni de la nostra història compartida.',
      'La falla no és només una obra d\'art efímera que crema en una nit. És la veu d\'un poble que es riu de si mateix, que critica amb humor i que celebra amb passió. És la tradició que es manté viva generació rere generació, portant amb ella els valors que ens defineixen.',
      'Aquest any, la nostra crítica vol ser un homenatge a tots aquells que fan possible aquesta festa. Als artistes fallers que donen vida als ninots, als veïns que participen activament, i a tots aquells que, d\'una manera o altra, contribueixen a que cada any aquesta tradició sigui més gran.',
      'Que les flames d\'aquesta nit ens recordin que, com la falla, la vida és efímera però plena de bellesa. I que, com la tradició fallera, els nostres vincles com a comunitat són el que realment perdura més enllà de qualsevol cremà.'
    ]
  },
  es: {
    title: 'Falla Mayor',
    content: [
      'En esta noche mágica de fuego y fiesta, nuestra falla se convierte en el reflejo de nuestra identidad como pueblo. Cada ninot, cada detalle, cada crítica que se lee entre las llamas, es un testimonio de nuestra historia compartida.',
      'La falla no es solo una obra de arte efímera que arde en una noche. Es la voz de un pueblo que se ríe de sí mismo, que critica con humor y que celebra con pasión. Es la tradición que se mantiene viva generación tras generación, llevando consigo los valores que nos definen.',
      'Este año, nuestra crítica quiere ser un homenaje a todos aquellos que hacen posible esta fiesta. A los artistas falleros que dan vida a los ninots, a los vecinos que participan activamente, y a todos aquellos que, de una manera u otra, contribuyen a que cada año esta tradición sea más grande.',
      'Que las llamas de esta noche nos recuerden que, como la falla, la vida es efímera pero llena de belleza. Y que, como la tradición fallera, nuestros vínculos como comunidad son lo que realmente perdura más allá de cualquier cremà.'
    ]
  },
  en: {
    title: 'Main Falla',
    content: [
      'On this magical night of fire and celebration, our falla becomes the reflection of our identity as a people. Each ninot, each detail, each critique read among the flames, is a testimony to our shared history.',
      'The falla is not just an ephemeral work of art that burns in one night. It is the voice of a people who laugh at themselves, who criticize with humor and celebrate with passion. It is the tradition that stays alive generation after generation, carrying with it the values that define us.',
      'This year, our critique wants to be a tribute to all those who make this celebration possible. To the falla artists who bring the ninots to life, to the neighbors who actively participate, and to all those who, in one way or another, contribute to making this tradition greater each year.',
      'May the flames of this night remind us that, like the falla, life is ephemeral but full of beauty. And that, like the falla tradition, our bonds as a community are what truly endure beyond any cremà.'
    ]
  },
  eu: {
    title: 'Falla Nagusia',
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
