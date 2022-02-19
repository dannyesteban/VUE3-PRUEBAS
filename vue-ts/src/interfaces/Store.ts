export interface Store {
  nombre: string
  apellido: string
  edad: number
  estudiente: boolean
  crecer?: () => void
}
