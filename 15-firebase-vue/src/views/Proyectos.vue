<template>
  <div class="container">
    <h1>Vista Proyectos</h1>
    <hr />
    <div class="row">
      <router-link
        to="/crear-proyectos"
        class="col s12 l7 waves-effect waves-light btn #0097a7 cyan darken-2"
        title="Crear"
        >Crear Proyecto<i class="material-icons">add</i>
      </router-link>
    </div>

    <contenedor />
  </div>
</template>

<script>
import Contenedor from "../components/Contenedor.vue";
export default {
  components: { Contenedor },
};
</script>

