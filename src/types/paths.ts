type PathId =

  | 'planes'
  | 'contacto'

type PathName =

  | 'Planes'
  | 'Contacto'

export interface Path {
  url: PathId
  name: PathName
}