export type MenuCategory =
  | "voorgerecht"
  | "hoofdgerecht"
  | "nagerecht"
  | "drank"
  | "bijgerecht"
  | "overig";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  allergens?: string[];
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  available?: boolean;
};