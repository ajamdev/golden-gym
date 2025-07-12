type addPlansId =
  | 'users'
  | 'heart'
  | 'zap'
  | 'calendar'

type addPlansName =
  | 'Entrenamiento Personal'
  | 'Consulta Nutricional'
  | 'Masaje Deportivo'
  | 'Evaluación Física'

export interface addPlans {
  id: addPlansId
  name: addPlansName
  image: {
    logo: any
  }
  description: string
  price: string
  duration: string
}