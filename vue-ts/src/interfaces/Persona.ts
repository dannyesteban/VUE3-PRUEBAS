export interface Persona {
  nombre: string
  apellido: string
  edad: number
  estudiente: boolean
  crecer?: () => void
}
