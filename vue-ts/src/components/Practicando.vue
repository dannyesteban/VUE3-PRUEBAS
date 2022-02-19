<template>
  <dir>
    <h1>Nombre:{{ store }}</h1>
    <h1>Edad:{{ store.edad }}</h1>
    <button @click="store.crecer">Crecer</button>
  </dir>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import store from "../store/store";

/*
Opcion 1
export default defineComponent ({
    name:"Practicando TS"
})*/

// Opcion 2
const Practicando = defineComponent({
  setup() {
    /*
    const nombre = ref("Esteban");
    nombre.value = "Danny";
    
    const persona = ref<Persona>({
      nombre: "Danny",
      apellido: "Acosta",
      edad: 30,
      estudiente: true,
      crecer() {
        this.edad++;
      },
    });
    */
    return { store };
  },
});

export default Practicando;
</script>
