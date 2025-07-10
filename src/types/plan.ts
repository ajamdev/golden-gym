type planId =
  | 'perdida-de-peso'
  | 'entrenamiento-funcional'
  | 'cardio-intensivo'

type planName =
  | 'Pérdida de peso'
  | 'Entrenamiento funcional'
  | 'Cardio intensivo'

export interface Plan {
  id: planId
  name: planName
  link: string
  description: string
  list: string[]
}