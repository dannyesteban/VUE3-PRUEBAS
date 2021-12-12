<template>
  <div>
    <h4>{{ contador }}-{{ color }}</h4>
  </div>
</template>

<script>
import { inject } from "@vue/runtime-core";
export default {
  setup() {
    const contador = inject("valorContador");
    const color = inject("color");

    return { contador, color };
  },
};
</script>
