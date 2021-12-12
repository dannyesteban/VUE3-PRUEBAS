<template>
  <div>
    <h2 :style="{ color }">Contador: {{ contador }}</h2>
  </div>
</template>

<script>
import { inject } from '@vue/runtime-core';
export default {
  setup(){

    const contador = inject("valorContador")
    const color = inject("color")

    return{contador,color}
  }
};
</script>

