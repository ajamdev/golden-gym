type testimonialId =
  | 'maria-gonzalez'
  | 'carlos-rodriguez'
  | 'ana-martinez'

type testimonialName =
  | 'Maria González'
  | 'Carlos Rodríguez'
  | 'Ana Martínez'

export interface testimonial {
  id: testimonialId
  name: testimonialName
  rating: number
  text: string
}