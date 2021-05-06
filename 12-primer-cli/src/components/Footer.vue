<template>
  <footer >
    <h5 class="p-2">&copy; Esteban Acosta - {{ year }}</h5>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
h5 {
  background-color: rgb(68, 71, 80);
  text-align: center;
  color: snow;
}
</style>