type PlanesId =
  | 'basico'
  | 'premium'
  | 'elite'

type PlanesName =
  | 'Plan Básico'
  | 'Plan Premium'
  | 'Plan Elite'

export interface Planes {
  id: PlanesId
  name: PlanesName
  prices: Array<{
    monthly: number,
    annual: number
  }>
  features: string[]
}