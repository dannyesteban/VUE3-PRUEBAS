<template lang="pug">
div
  h1 {{hola}}
  img.imagen.nieve(
    src="https://www.promoambientaldistrito.com/web/wp-content/themes/promoambiental/img/logo-promoambiental.png"
  )
  ul
    li(v-for="(row, i) in personas" :key="i") {{row}}


</template>

<script>
export default {
  name: "HelloWorld",
  data :()=>({
    hola:"Hola a Todos ",
    personas:[1,2,3,4,5]
  }),
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
span {
  color: blue;
}

.imagen.nieve {
  width: 500px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
