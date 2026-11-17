import { Truck, Boxes, Building2, UtensilsCrossed, Fish, Wrench } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  { title: "Wholesale Ice Supply", icon: Truck, description: "Reliable wholesale supply for dealers and distributors, with consistent quality in every block." },
  { title: "Bulk Ice Orders", icon: Boxes, description: "Large-volume orders prepared and dispatched on schedule for markets, events and projects." },
  { title: "Commercial Ice Supply", icon: Building2, description: "Regular supply plans for shops, cold-storage units and commercial businesses." },
  { title: "Hotel & Restaurant Supply", icon: UtensilsCrossed, description: "Clean, hygienic ice for hospitality kitchens, banquets and catering services." },
  { title: "Fish & Meat Industry Supply", icon: Fish, description: "Dense, slow-melting blocks that keep seafood and meat fresh from catch to market." },
  { title: "Custom Orders", icon: Wrench, description: "Tell us your size, quantity and delivery needs and we will prepare a tailored order." },
];
