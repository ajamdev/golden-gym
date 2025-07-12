type PlansId = 'basico' | 'premium' | 'elite'
type PlansName = 'Plan Básico' | 'Plan Premium' | 'Plan Elite'

export interface Plans {
  id: PlansId
  name: PlansName
  subtitle: string
  image: {
    icon: any
  }
  color: string
  borderColor: string
  popular: boolean
  price: number
  features: Array<{
    name: string,
    included: boolean
  }> | [{
    name: string,
    included: boolean
  }]
  benefits: string[]
}