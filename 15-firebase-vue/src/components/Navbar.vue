<template>
  <div>
    <nav>
      <div class="nav-wrapper #00796b teal darken-2">
        <router-link class="brand-logo" to="/">Gestor de Proyectos</router-link>

        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >

        <ul class="right hide-on-med-and-down">
          <li v-if="!sesion">
            <router-link to="/">Register</router-link>
          </li>
          <li v-if="!sesion">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="sesion">
            <router-link
              class="waves-effect waves-light btn #0288d1 light-blue darken-2"
              to="/proyectos"
              >Proyectos</router-link
            >
          </li>
          <li v-if="sesion">
            <router-link
              class="waves-effect waves-light btn #0288d1 light-blue darken-2"
              to="/"
              @click="fnCerrarSesion"
              >Cerrar Sesion</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li v-if="!sesion">
        <router-link to="/">Register</router-link>
      </li>
      <li v-if="!sesion">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="sesion">
        <router-link to="/proyectos">Proyectos</router-link>
      </li>
      <li v-if="sesion">
        <router-link
          class="waves-effect waves-light btn #0288d1 light-blue darken-2"
          to="/"
          @click="fnCerrarSesion"
          >Cerrar Sesion</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: false,
  }),
  computed: {
    sesion() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user != null) {
        return true;
      }
      return false;
    },
  },
  methods: {
    fnCerrarSesion() {
      localStorage.removeItem("user");
    },
  },
  mounted() {
    M.AutoInit();
  },
};
</script>

