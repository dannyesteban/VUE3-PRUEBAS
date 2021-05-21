<template>
  <div class="footer">
    <footer class="text-center bg-dark text-white py-2 bg-gradient">
      <h6>&copy; {{year}}- Esteban Acosta - todos los derechos resvados.</h6>
    </footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    year: new Date().getFullYear(),
  }),
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>