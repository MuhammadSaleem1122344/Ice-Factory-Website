import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "20kg",
    name: "20 KG Ice Block",
    weight: "20 KG",
    category: "standard",
    description: "Compact, easy-to-handle blocks ideal for small shops, street vendors and daily retail cooling.",
    image: "/images/ice_block_1.png",
  },
  {
    id: "30kg",
    name: "30 KG Ice Block",
    weight: "30 KG",
    category: "standard",
    description: "A balanced size for restaurants, caterers and events that need steady, long-lasting cooling.",
    image: "/images/ice_block_2.png",
  },
  {
    id: "50kg",
    name: "50 KG Ice Block",
    weight: "50 KG",
    category: "standard",
    description: "Our standard industrial block for fish, meat and wholesale supply, slow-melting and dense.",
    image: "/images/ice_block_1.png",
  },
  {
    id: "custom",
    name: "Custom Ice Blocks",
    weight: "Custom size",
    category: "custom",
    description: "Special sizes and shapes made to order for your business, event or transport requirements.",
    image: "/images/tank.png",
  },
];

export const productFilters = [
  { value: "all", label: "All Products" },
  { value: "standard", label: "Standard Blocks" },
  { value: "custom", label: "Custom" },
] as const;
