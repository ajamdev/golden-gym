import type { Stat } from "@/types/stast";

import Users from "@/assets/iconos/users.svg";
import Trophy from "@/assets/iconos/trophy.svg";
import Dumbell from "@/assets/iconos/dumbell.svg";
import Star from "@/assets/iconos/star.svg";

export const STATS: Stat[] = [
  {
    id: 'users',
    name: 'Users',
    image: {
      logo: Users
    },
    statsinfo: '500+',
    title: 'Miembros Activos'
  },
  {
    id: 'trophy',
    name: 'Trophy',
    image: {
      logo: Trophy
    },
    statsinfo: '50+',
    title: 'Transformaciones'
  },
  {
    id: 'dumbell',
    name: 'Dumbell',
    image: {
      logo: Dumbell
    },
    statsinfo: '200+',
    title: 'Equipos Modernos'
  },
  {
    id: 'star',
    name: 'Star',
    image: {
      logo: Star
    },
    statsinfo: '4.9',
    title: 'Calificación'
  }
] as const