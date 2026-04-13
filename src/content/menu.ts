export type MenuCategoryId = "warm" | "cool" | "frozen" | "family" | "extra";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategoryId;
  badge?: string;
  featured?: boolean;
  serves?: string;
};

export const menuCategories = [
  {
    id: "warm",
    label: "Dagvers warm",
    description: "Voor wie vandaag makkelijk en lekker wil eten.",
  },
  {
    id: "cool",
    label: "Koelvers",
    description: "Handig voor morgen of later in de week.",
  },
  {
    id: "frozen",
    label: "Diepvries",
    description: "Voor drukke dagen waarop je snel iets klaar wilt hebben.",
  },
  {
    id: "family",
    label: "Family trays",
    description: "Voor gezinnen die in één keer goed willen bestellen.",
  },
  {
    id: "extra",
    label: "Extra’s",
    description: "Kleine aanvullingen voor erbij.",
  },
] as const;

export const menuItems: MenuItem[] = [
  {
    id: "kip-rijst-groente",
    name: "Kip rijst groente",
    description:
      "Een complete huiselijke maaltijd met gekruide kip, rijst en groenten.",
    price: 9.5,
    category: "warm",
    badge: "Warm",
    featured: true,
  },
  {
    id: "pasta-bolognese",
    name: "Pasta bolognese",
    description:
      "Een warme klassieker met rijke saus en een goedgevulde portie.",
    price: 9,
    category: "warm",
    badge: "Warm",
    featured: true,
  },
  {
    id: "meal-prep-kip-rijst",
    name: "Meal prep kip rijst groente",
    description: "Vers bereid, gekoeld verpakt en makkelijk op te warmen.",
    price: 8.5,
    category: "cool",
    badge: "Koelvers",
    featured: true,
  },
  {
    id: "soep-van-de-week",
    name: "Soep van de week",
    description:
      "Een wisselende soep, ideaal als lichte maaltijd of extra erbij.",
    price: 4.5,
    category: "extra",
    badge: "Extra",
    featured: true,
  },
  {
    id: "lasagne-1-persoons",
    name: "Lasagne 1-persoons",
    description:
      "Een stevige diepvriesmaaltijd die makkelijk thuis op te warmen is.",
    price: 7.5,
    category: "frozen",
    badge: "Diepvries",
    featured: true,
  },
  {
    id: "stoofmaaltijd",
    name: "Stoofmaaltijd",
    description: "Vol van smaak en handig om op voorraad te hebben.",
    price: 8,
    category: "frozen",
    badge: "Diepvries",
  },
  {
    id: "bundel-3-diepvries",
    name: "Bundel 3 diepvriesmaaltijden",
    description: "Drie maaltijden samen voor extra gemak in huis.",
    price: 21,
    category: "frozen",
    badge: "Bundel",
    featured: true,
  },
  {
    id: "family-tray-lasagne",
    name: "Family tray lasagne",
    description:
      "Een royale ovenschaal voor het hele gezin of meerdere porties.",
    price: 24.5,
    category: "family",
    badge: "Family tray",
    serves: "3–5 personen",
    featured: true,
  },
  {
    id: "family-tray-kip-rijst",
    name: "Family tray kip-rijstschotel",
    description: "Een complete gezinsschotel, handig voor drukke avonden.",
    price: 26.5,
    category: "family",
    badge: "Family tray",
    serves: "3–5 personen",
    featured: true,
  },
];

export const homePreviewMenu = menuItems.filter((item) => item.featured).slice(0, 6);

export const menuPageContent = {
  intro:
    "Bij Familietafel Almere houden we het menu overzichtelijk. Zo weet je precies wat je bestelt en blijft kiezen eenvoudig.",
  introExtra:
    "Ons aanbod is gericht op gezinnen en huishoudens die gemak zoeken zonder in te leveren op smaak en vertrouwd eten.",
  orderingNotes: [
    "Warm is bedoeld voor vandaag.",
    "Koelvers is handig voor morgen of later in de week.",
    "Diepvries is slim voor voorraad thuis.",
    "Family trays bestel je het liefst vooraf.",
  ],
};