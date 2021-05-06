<template>
  <div id="container" class="container">
    <h2>Proyectos</h2>
    <img
      :src="avatar"
      alt="Avatar de EA"
      width="100"
      loading="lazy"
      class="image"
    />

    <hr />
    <loading v-if="load" />
    <div class="cards" v-for="item in projects" :key="item.id">
      <Card
        :name="item.name"
        :description="item.description"
        :author="item.owner.login"
        :url="item.html_url"
        :homepage="item.homepage"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import Loading from "./loading.vue";

export default {
  data() {
    return {
      projects: null,
      avatar: null,
      load: false,
    };
  },
  components: {
    Card,
    Loading,
  },
  methods: {
    async getProjects() {
      this.load = true;
      const res = await fetch(
        "https://api.github.com/users/dannyesteban/repos"
      );
      const data = await res.json();

      this.projects = data;
      this.avatar = this.projects[0].owner.avatar_url;
      console.log(this.projects[0]);
      this.load = false;
    },
  },
  mounted() {
    this.getProjects();
  },
};
</script>

<style scoped>
.container {
  border: solid 1px #eee;
  box-shadow: 1px 1px 4px #333;
  text-align: center;
  overflow: hidden;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.image {
  border-radius: 50%;
}
</style>