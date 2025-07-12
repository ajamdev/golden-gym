import type { Plans } from "@/types/plans";

import Dumbell from '@/assets/iconos/dumbell.svg'
import Heart from '@/assets/iconos/heart.svg'
import Crown from '@/assets/iconos/crown.svg'

export const PLANS: Plans[] = [
  {
    id: 'basico',
    name: 'Plan Básico',
    subtitle: 'Perfecto para comenzar',
    image: {
      icon: Dumbell
    },
    color: 'from-gray-600 to-gray-800',
    borderColor: 'border-gray-600',
    popular: false,
    price: 29,
    features: [
      { name: "Acceso al área de pesas", included: true },
      { name: "Área cardiovascular", included: true },
      { name: "Vestuarios y duchas", included: true },
      { name: "Horario: 6:00 - 22:00", included: true },
      { name: "Clases grupales", included: false },
      { name: "Entrenador personal", included: false },
      { name: "Acceso 24/7", included: false },
      { name: "Invitados gratis", included: false },
      { name: "Nutricionista", included: false },
      { name: "Zona VIP", included: false },
    ],
    benefits: [
      "Evaluación física inicial", "Plan de entrenamiento básico", "Soporte técnico"
    ]
  },
  {
    id: "premium",
    name: "Plan Premium",
    subtitle: "La opción más popular",
    image: { icon: Heart },
    color: "from-[#FFD700] to-[#FFD580]",
    borderColor: "border-[#FFD700]",
    popular: true,
    price: 49,
    features: [
      { name: "Acceso al área de pesas", included: true },
      { name: "Área cardiovascular", included: true },
      { name: "Vestuarios y duchas", included: true },
      { name: "Horario: 5:00 - 23:00", included: true },
      { name: "Clases grupales ilimitadas", included: true },
      { name: "2 sesiones entrenador personal", included: true },
      { name: "Acceso 24/7", included: false },
      { name: "2 invitados gratis/mes", included: true },
      { name: "Consulta nutricionista", included: true },
      { name: "Zona VIP", included: false },
    ],
    benefits: [
      "Evaluación física completa",
      "Plan personalizado de entrenamiento",
      "Plan nutricional básico",
      "Seguimiento mensual",
      "App móvil premium",
    ],
  },
  {
    id: "elite",
    name: "Plan Elite",
    subtitle: "Experiencia completa",
    image: { icon: Crown },
    color: "from-purple-600 to-purple-800",
    borderColor: "border-purple-600",
    popular: false,
    price: 79,
    features: [
      { name: "Acceso al área de pesas", included: true },
      { name: "Área cardiovascular", included: true },
      { name: "Vestuarios y duchas", included: true },
      { name: "Acceso 24/7", included: true },
      { name: "Clases grupales ilimitadas", included: true },
      { name: "Entrenador personal ilimitado", included: true },
      { name: "Invitados ilimitados", included: true },
      { name: "Nutricionista dedicado", included: true },
      { name: "Zona VIP exclusiva", included: true },
      { name: "Masajes deportivos", included: true },
    ],
    benefits: [
      "Evaluación médico-deportiva",
      "Plan de entrenamiento personalizado",
      "Plan nutricional completo",
      "Seguimiento semanal",
      "Acceso a todas las instalaciones",
      "Concierge fitness personal",
      "Suplementos incluidos",
    ],
  },
]