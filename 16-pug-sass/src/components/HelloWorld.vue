<template lang="pug">
div
  h1 {{ hola }}
  img.imagen.nieve(
    src="https://www.promoambientaldistrito.com/web/wp-content/themes/promoambiental/img/logo-promoambiental.png"
  )
  ul
    li
      a(href="") valor 1
    li
      a(href="") valor 2
    li
      a(href="") valor 3
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    hola: "Hola a Todos ",
  }),
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// scss
ul {
  list-style: none;
  li {
    background-color: aqua;
    margin: 5px 0;
    padding: auto;
    a {
      color: rgb(228, 21, 21);
    }
    &:hover {
      background-color: pink;
    }
    &::before{
      background-color: black;
    }
  }
}

/*
css nativo
ul li {
  background-color: aqua;
  margin: 5px 0;
}

ul li a {
  color: rgb(124, 4, 4);
}
*/
.imagen.nieve {
  width: 500px;
}
</style>
