<template>
  <div class="card horizontal" v-if="data.status">
    <div class="card-stacked">
      <div class="card-content">
        <span class="card-title">{{ data.title }}</span>
        <p>{{ data.description }}</p>
        <br />
        <h6>Tecnologias</h6>
        <li v-for="(item, index) in data.langs" :key="index">{{ item }}</li>
      </div>
      <div class="card-action">
        <div class="row">
          <router-link
            :to="`/editar-proyectos/${id}`"
            class="col s6 waves-effect waves-light btn #388e3c green darken-3"
            title="Editar"
            ><i class="material-icons"> mode_edit</i></router-link
          >
          <button
            @click="fnDeleteProject"
            class="col s6 waves-effect waves-light btn #d32f2f red darken-3"
            title="Eliminar"
          >
            <i class="material-icons"> delete </i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    id: String,
  },
  methods: {
    async fnDeleteProject() {
      const res = await fetch(
        `https://crud-vue-6cdcb-default-rtdb.firebaseio.com/projects/${this.id}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({ status: false }),
        }
      );
      const data = await res.json();
      this.data.status = data.status;
    },
  },
};
</script>
