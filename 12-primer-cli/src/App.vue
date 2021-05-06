<template>
<div id="app">
  <Header title="Portafolio EA" />
  <Container/>
  <Footer/>
</div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container"

export default {
  components: {
    Header,
    Footer,
    Container,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
</style>