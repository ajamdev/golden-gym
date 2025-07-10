import type { Plan } from "@/types/plan";

export const PLAN: Plan[] = [
  {
    id: 'perdida-de-peso',
    name: 'Pérdida de peso',
    link: '/#',
    description: 'Programas personalizados de entrenamiento y nutrición diseñados para ayudarte a alcanzar tu peso ideal de forma saludable y sostenible.',
    list: [
      'Plan nutricional personalizado',
      'Entrenamiento cardiovascular',
      'Seguimiento semanal'
    ]
  },
  {
    id: 'entrenamiento-funcional',
    name: 'Entrenamiento funcional',
    link: '/#',
    description: 'Desarrolla fuerza, resistencia y flexibilidad con ejercicios que mejoran tu rendimiento en actividades diarias y deportivas.',
    list: [
      'Ejercicios multiarticulares',
      'Mejora de coordinación',
      'Prevención de lesiones'
    ]
  },
  {
    id: 'cardio-intensivo',
    name: 'Cardio intensivo',
    link: '/#',
    description: 'Sesiones de alta intensidad para mejorar tu capacidad cardiovascular, quemar calorías y aumentar tu resistencia física.',
    list: [
      'HIIT y circuitos',
      'Monitoreo cardíaco',
      'Resultados rápidos'
    ]
  }
]