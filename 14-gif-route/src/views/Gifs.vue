<template>
  <div class="container mt-3 border">
    <h1 class="text-center">Gifs</h1>
    <search @buscar="getGifs" />
    <hr />

    <Loanding v-if="activeLoanding" />

    <div class="row">
      <div class="col-12 col-lg-3" v-for="row in gifs" :key="row.id">
        <gif-card :data="row" class="m-3 w-75" />
      </div>
    </div>
  </div>
</template>

<script>
import GifCard from "../components/GifCard.vue";
import Search from "../components/Search.vue";
import Loanding from "../components/Loading";

export default {
  components: { GifCard, Search, Loanding },
  data: () => ({
    gifs: {},
    apiKey: "kVsEmf62mN1UrPcgsRk1ioDiddSXqOxM",
    activeLoanding: false,
  }),
  created() {
    this.getGifs();
  },
  methods: {
    async getGifs(busqueda = "goku") {
      this.activeLoanding = true;
      const { data } = await this.axios.get(
        "https://api.giphy.com/v1/gifs/search?api_key=" +
          this.apiKey +
          "&q=" +
          busqueda
      );
      this.gifs = data.data;
      this.activeLoanding = false;
      console.log(this.gifs);
    },
  },
};
</script>

