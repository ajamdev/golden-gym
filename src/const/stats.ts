import type { Stat } from "@/types/stast";

import Users from "@/assets/iconos/users.svg";
import Trophy from "@/assets/iconos/trophy.svg";
import Dumbell from "@/assets/iconos/dumbell.svg";
import Star from "@/assets/iconos/star.svg";

export const STATS: Stat[] = [
  {
    icon: Users,
    statsinfo: "500+",
    title: "Miembros Activos"
  },
  {
    icon: Trophy,
    statsinfo: "50+",
    title: "Transformaciones"
  },
  {
    icon: Dumbell,
    statsinfo: "200+",
    title: "Equipos Modernos"
  },
  {
    icon: Star,
    statsinfo: "4.9",
    title: "Calificación"
  }
]