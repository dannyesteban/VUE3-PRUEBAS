<template>
  <div class="row">
    <div class="col s12 m7">
      <card-project
        v-for="(item, index) in projects"
        :key="index"
        :data="item.data"
        :id="item.id"
        @reload="fnGetProjects"
      />
    </div>
  </div>
</template>

<script>
import cardProject from "./CardProject.vue";
export default {
  data: () => ({
    projects: [],
  }),
  components: {
    cardProject,
  },
  methods: {
    async fnGetProjects() {
      const user = JSON.parse(localStorage.getItem("user"));
      const res = await fetch(
        `https://crud-vue-6cdcb-default-rtdb.firebaseio.com/projects/${user.localId}.json?auth=${user.idToken}`
      );
      const data = await res.json();
      for (let i in data) {
        this.projects.push({
          id: i,
          data: data[i],
        });
      }
    },
  },
  mounted() {
    this.fnGetProjects();
  },
};
</script>

