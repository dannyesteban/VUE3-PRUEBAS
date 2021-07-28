<template>
  <div>
    <nav>
      <div class="nav-wrapper #00796b teal darken-2">
        <router-link class="brand-logo" to="/">Gestor de Proyectos</router-link>

        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >

        <ul class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="about">About</router-link>
          </li>
          <li>
            <router-link
              class="waves-effect waves-light btn #0288d1 light-blue darken-2"
              to="/proyectos"
              >Proyectos</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="about">About</router-link>
      </li>
      <li>
        <router-link to="/proyectos">Proyectos</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    M.AutoInit();
  },
};
</script>

