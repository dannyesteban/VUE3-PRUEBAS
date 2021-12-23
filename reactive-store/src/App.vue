<template>
<div>
  <Header/>
  <saldos/>
</div>
</template>
<script>
import Header from './components/Header.vue'
import Saldos from './components/Saldos.vue'

export default {
  name: 'App',
  components: {
    Saldos,
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
