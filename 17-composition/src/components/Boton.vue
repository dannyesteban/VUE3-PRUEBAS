<template>
  <div>
    <button @click="fnAccion">{{ btnText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    btnText: String,
  },
  setup({ btnText }, context) {

    const fnAccion = () => {
      context.emit("accion");
    };

    return {btnText, fnAccion};
  },
};
</script>
