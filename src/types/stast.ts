type statsId =
  | 'users'
  | 'trophy'
  | 'dumbell'
  | 'star'

type statsName =
  | 'Users'
  | 'Trophy'
  | 'Dumbell'
  | 'Star'

export interface Stat {
  id: statsId
  name: statsName
  image: {
    logo: any
  }
  statsinfo: string
  title: string
}