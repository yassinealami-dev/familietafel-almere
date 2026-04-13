/*
  INTERNE BEDRIJFSDATA
  --------------------
  Dit bestand is bedoeld als interne bron voor jouw strategie.
  Het wordt NIET automatisch op de publieke website getoond.

  Gebruik dit later voor:
  - ondernemingsplan
  - pitch / gesprekken
  - roadmap
  - interne documentatie
  - toekomstige admin / dashboard / CMS-koppeling
*/

export const businessPlan = {
  assumptions: [
    "Je start lean vanuit Almere.",
    "Je begint zonder zitplaatsen: alleen afhalen en bezorgen.",
    "Je verkoopt dagvers warm, koelvers en diepvries.",
    "WhatsApp Business is je hoofdverkoopkanaal.",
    "De website is bij opening een simpele verkoopsite, geen groot platform.",
  ],

  concept: {
    name: "Familiegerichte maaltijdservice in Almere",
    description:
      "Een lokale maaltijdservice in Almere met slimme koel- en vriesopslag als kern van het model.",
    proposition:
      "Dagverse warme maaltijden, koelverse opties en diepvriesmaaltijden in Almere, makkelijk te bestellen via WhatsApp Business.",
    strengths: [
      "Warm geeft snelle cashflow",
      "Koelvers geeft gemak voor 1 tot 3 dagen",
      "Diepvries geeft voorraad, bundels en herhaalomzet",
      "Klein menu betekent minder verspilling en minder stress",
    ],
  },

  mission:
    "Mensen in Almere helpen aan betaalbare, lekkere en betrouwbare maaltijden zonder gedoe.",

  firstPhaseGoal:
    "Zo snel mogelijk een klein, stabiel klantenbestand opbouwen met lage kosten en zo min mogelijk financieel risico.",

  positioning: {
    avoid: [
      "Geen luxe restaurant",
      "Geen fitnessmerk",
      "Geen supermarktconcept",
    ],
    be: [
      "Huiselijk",
      "Praktisch",
      "Lokaal",
      "Betrouwbaar",
      "Direct bereikbaar",
    ],
    lookAndFeel: [
      "Duidelijke prijzen",
      "Duidelijke porties",
      "Weinig poespas",
      "Snel bestellen",
      "Vaste bezorg-/afhaalmomenten",
      "Eerlijk communiceren",
    ],
  },

  targetAudience: {
    primary: "Drukke werkenden en kleine gezinnen in Almere",
    secondary: "Mensen die graag voor meerdere dagen tegelijk bestellen",
    why: [
      "Ze kopen sneller op gemak",
      "Ze herhalen makkelijker",
      "Family trays en bundels werken goed",
      "Je hoeft minder op de goedkoopste prijs te concurreren",
    ],
    later: [
      "Meal prep",
      "Halal/home-style niche",
      "Ouderen/gemaksmaaltijden",
      "Kleine B2B-orders",
    ],
  },

  dayOneOffer: {
    assortment: {
      warm: "2 warme hoofdgerechten + 1 wisselend dagmenu",
      cool: "2 vaste maaltijden + 1 soep of bijgerecht",
      frozen: "2 bestsellers die goed houdbaar zijn",
      family: "1 tray-optie voor gezinnen of groepen",
    },
    menuExample: [
      "Kip rijst groente",
      "Pasta bolognese",
      "Lasagne",
      "Stoofmaaltijd",
      "Soep van de week",
      "Family tray lasagne of kip-rijstschotel",
    ],
    priceGuideline: {
      warm: "€9,50 – €10,50",
      cool: "€8,00 – €9,50",
      frozen: "€7,00 – €8,50",
      family: "€24,50 – €29,50",
      extra: "€4,00 – €5,50",
    },
  },

  revenueModel: [
    "Warme dagverkoop",
    "Koelverse vooruitbestellingen",
    "Diepvriesbundels",
    "Family trays",
  ],

  orderFlow: {
    steps: [
      "Klant ziet maaltijd op Instagram, Facebook of website",
      "Klant klikt naar WhatsApp",
      "Klant kiest gerecht, formaat en leveroptie",
      "Klant betaalt vooraf",
      "Jij bevestigt tijdslot",
      "Levering of afhalen",
    ],
    template: `Bestellen 🍽️

Naam:
Adres:
Gerecht:
Aantal porties:
Warm / koelvers / diepvries:
Bezorging of afhalen:
Gewenste tijd:
Betaald ja/nee:`,
  },

  sitePlan: {
    goal:
      "De eerste site moet vooral vertrouwen + duidelijkheid + WhatsApp-conversie geven.",
    pages: [
      "Home",
      "Menu",
      "Bestellen",
      "Bezorging & Afhalen",
      "FAQ / allergenen",
      "Contact",
    ],
    homepageBlocks: [
      "Hero met hoofdboodschap",
      "3 categorieën: warm / koelvers / diepvries",
      "Weekmenu",
      "Hoe het werkt",
      "Reviews",
      "WhatsApp CTA",
    ],
  },

  marketing: {
    instagram: [
      "Dagmenu",
      "Kookbeelden",
      "Inpakken",
      "Bestel voor vanavond",
      "Trays klaar voor levering",
      "Reviews",
      "Poll: wat wil je vrijdag eten?",
    ],
    facebook: [
      "Weekmenu",
      "Familiebakken",
      "Bezorgdagen",
      "Klantreviews",
      "Herhaalactie",
    ],
    whatsappStatus: [
      "Vandaag warm beschikbaar",
      "Laatste trays",
      "Diepvriesbundel van de week",
      "Besteldeadline",
    ],
    openingPromo: [
      "Openingspost",
      "Openingsstory",
      "Eerste 15 bestellingen gratis soep",
      "Bundelkorting op 3 diepvriesmaaltijden",
      "Family tray introductieprijs",
    ],
  },

  operations: {
    weeklyRhythm: {
      monday: "Weekmenu posten",
      tuesdayWednesday: "Bestellingen verzamelen",
      thursdayFriday: "Voorbereiden, inkopen, batch koken",
      fridaySaturday: "Warm leveren + koelvers uitgifte + trays",
      ongoing: "Diepvries van bestsellers bijhouden",
    },
    productionLogic: [
      "Warm: alleen op vaste dagen",
      "Koelvers: kleine batch",
      "Diepvries: alleen bewezen hardlopers",
      "Family trays: op pre-order",
    ],
  },

  finances: {
    startupBudget: {
      kvk: 85.15,
      thermometers: 25,
      labels: 20,
      packaging: 80,
      containers: 40,
      hygiene: 45,
      coolBag: 35,
      ingredients: 150,
      buffer: 100,
      total: 580.15,
    },
    targetCostRule:
      "Food + verpakking + directe energie = maximaal 40% tot 45% van verkoopprijs",
    targetMargin: "Brutomarge minimaal 55%",
    weeklyScenario: {
      warmMeals: "25 × €10",
      coolMeals: "12 × €8,50",
      frozenMeals: "10 × €7,50",
      familyTrays: "4 × €26",
      revenue: "€531",
      grossMargin: "€302,40",
    },
    breakEvenNote:
      "Bij ongeveer 46 maaltijden per maand met lage vaste kosten blijft het model bewust lean en haalbaar.",
  },

  first90Days: {
    month1: [
      "15 tot 25 betalende klanten",
      "8 tot 12 terugkerende klanten",
      "1 duidelijke bestseller",
      "1 vaste bezorgdag",
    ],
    month2: [
      "25 tot 40 betalende klanten",
      "15+ terugkerende klanten",
      "2 bestsellers",
      "3-maaltijdenbundel loopt",
    ],
    month3: [
      "Vaste weekomzet",
      "Beter inzicht in marges",
      "Pas dan beslissen over extra vriezer of advertenties",
    ],
  },

  launchRoadmap: {
    week1: [
      "Naam kiezen",
      "Doelgroep vastzetten",
      "5 startproducten kiezen",
      "Kostprijs per product berekenen",
      "Adrescheck bedrijf aan huis",
      "Beslissen: bezorgen, afhalen of beide",
    ],
    week2: [
      "Proefkoken",
      "5 tot 10 testers",
      "Feedback op smaak, portie, prijs, verpakking",
      "2 gerechten schrappen als ze niet sterk genoeg zijn",
    ],
    week3: [
      "KVK-afspraak",
      "NVWA-registratie",
      "Simpel HACCP/werkwijzeplan",
      "Etiketten/allergenenproces",
      "Bestelformat maken",
      "Openingsvoorwaarden bepalen",
    ],
    week4: [
      "WhatsApp Business inrichten",
      "Catalogus maken",
      "Labels maken",
      "Instagram en Facebook klaarzetten",
      "Mini-website of landingspagina live",
    ],
    week5: [
      "Eerste pre-orders aannemen",
      "Menu posten",
      "Betaalflow testen",
      "Leverroute testen",
      "Bezorgtijden testen",
    ],
    week6: [
      "Openingsweekmenu kiezen",
      "Openingsactie kiezen",
      "Voorraad per product bepalen",
      "Checklists printen",
      "Opening communiceren op alle kanalen",
    ],
  },

  dayOneRunbook: {
    beforeOpening: [
      "Voorraad controleren",
      "Etiketten klaar",
      "Allergeneninfo klaar",
      "Bestellingen bevestigd",
      "Route en tijden vast",
      "Stories en posts ingepland",
      "Noodbuffer in verpakking/ingrediënten aanwezig",
    ],
    openingDay: [
      "09:00 openingstory plaatsen",
      "09:00 menu opnieuw posten",
      "09:00 WhatsApp-status live",
      "10:00–12:00 productie voorbereiden",
      "12:00–15:00 warm aanbod pushen",
      "15:00–18:00 inpakken / bezorgen / afhalen",
      "18:00–20:00 follow-up naar klanten",
    ],
  },

  risks: [
    {
      title: "Te breed assortiment",
      solution: "Maximaal 5 tot 7 SKU’s bij opening",
    },
    {
      title: "Te veel inkopen",
      solution: "Vooral pre-orders en kleine batches",
    },
    {
      title: "Te lage prijzen",
      solution: "Eerst marge rekenen, dan pas posten",
    },
    {
      title: "Onduidelijk bestelproces",
      solution: "Alles naar WhatsApp leiden",
    },
    {
      title: "Thuisstart blijkt lastig",
      solution:
        "Eerst adres en omgevingsplan checken, anders pas opschalen",
    },
    {
      title: "Stress en instabiel ritme",
      solution: "Vaste kook- en leverdagen, niet elke dag open",
    },
  ],

  conclusion:
    "De sterkste eerste identiteit is een vertrouwd maaltijdmerk voor gezinnen in Almere: warm, koelvers of diepvries, eenvoudig besteld via WhatsApp.",
};