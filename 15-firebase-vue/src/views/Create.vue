<template>
  <div class="container">
    <div class="row">
      <form @submit.prevent="fnRegistrar" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input
              id="first_name"
              type="text"
              class="validate"
              v-model="project.title"
            />
            <label for="first_name">Nombre del Proyecto</label>
          </div>
          <div class="input-field col s12">
            <input
              id="last_name"
              type="text"
              class="validate"
              v-model="project.description"
            />
            <label for="last_name">Descripcion del Proyecto</label>
          </div>
          <div class="row">
            <div class="col s6">
              <p>
                <label>
                  <input type="checkbox" v-model="project.langs" value="html" />
                  <span>html</span>
                </label>
              </p>
            </div>
            <div class="col s6">
              <p>
                <label>
                  <input type="checkbox" v-model="project.langs" value="php" />
                  <span>php</span>
                </label>
              </p>
            </div>
            <div class="col s6">
              <p>
                <label>
                  <input type="checkbox" v-model="project.langs" value="css" />
                  <span>css</span>
                </label>
              </p>
            </div>
            <div class="col s6">
              <p>
                <label>
                  <input
                    type="checkbox"
                    v-model="project.langs"
                    value="Javascript"
                  />
                  <span>Javascript</span>
                </label>
              </p>
            </div>
          </div>
          <div class="row">
            <button
              class="btn waves-effect waves-light col s6"
              type="submit"
              name="action"
            >
              Guardar
              <i class="material-icons right">send</i>
            </button>
            <router-link
              class="btn waves-effect #c62828 red darken-3 col s6"
              to="/proyectos"
            >
              cancelar
              <i class="material-icons right">close</i>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  data: () => ({
    project: {
      title: "",
      description: "",
      langs: [],
      status: true,
      localId: "",
    },
  }),
  methods: {
    async fnRegistrar() {
      const user = JSON.parse(localStorage.getItem("user"));
      this.project.localId = user.localId;

      await fetch(
        `https://crud-vue-6cdcb-default-rtdb.firebaseio.com/projects/${user.localId}.json?auth=${user.idToken}`,
        {
          method: "POST",
          body: JSON.stringify(this.project),
        }
      );
      router.push("/proyectos");
      // const data = await res.json();
      //console.log(data);
    },
  },
};
</script>

<style>
</style>