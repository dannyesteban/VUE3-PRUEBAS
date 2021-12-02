<template lang="pug">
footer 
  h3 &copy Esteban Acosta - {{ getYear }}
</template>

<script>
export default {
  computed: {
    /* getYear() {
      return new Date().getFullYear();
    },*/
    getYear: () => new Date().getFullYear(),
  },
};
</script>

<style scoped lang="scss">
footer {
  background-color: black;
  position: relative;
  h3 {
    color: snow;
  }
}
</style>