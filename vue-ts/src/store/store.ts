import {reactive} from "vue"
import {Store} from "@/interfaces/Store"

const store = reactive<Store>({
  nombre: "Esteban",
  apellido: "Acosta",
  edad: 35,
  estudiente: true,
  crecer: () => {
    store.edad++
  }
})

export default store
