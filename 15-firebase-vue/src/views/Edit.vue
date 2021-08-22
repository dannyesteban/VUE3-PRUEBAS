<template>
  <div class="container">
    <div class="row">
      <form @submit.prevent="fnPutProject" class="col s12">
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
              Actualizar
              <i class="material-icons right">sync</i>
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
    project: {},
    id: "",
  }),
  methods: {
    async fnGetProject() {
      this.id = this.$route.params.id;
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await fetch(
        `https://crud-vue-6cdcb-default-rtdb.firebaseio.com/projects/${user.localId}/${this.id}.json?auth=${user.idToken}`
      );
      const data = await res.json();
      this.project = data;
    },

    async fnPutProject() {
      const user = JSON.parse(localStorage.getItem("user"));
      this.project.localId = user.localId;
      await fetch(
        `https://crud-vue-6cdcb-default-rtdb.firebaseio.com/projects/${user.localId}/${this.id}.json?auth=${user.idToken}`,
        {
          method: "PATCH",
          body: JSON.stringify(this.project),
        }
      );
      router.push("/proyectos");
    },
  },
  mounted() {
    this.fnGetProject();
  },
};
</script>

<style>
</style>