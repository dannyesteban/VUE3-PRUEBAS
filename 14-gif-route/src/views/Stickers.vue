<template>
  <div class="container mt-3 border">
    <h1 class="text-center">Stickers</h1>
    <search @buscar="getStickers" />
    <hr />

    <Loanding v-if="activeLoanding" />

    <div class="row">
      <div class="col-12 col-lg-3" v-for="row in stickers" :key="row.id">
        <stickerCarf :data="row" class="m-3 w-75" />
      </div>
    </div>
  </div>
</template>

<script>
import stickerCarf from "../components/StickerCard";
import Search from "../components/Search.vue";
import Loanding from "../components/Loading";

export default {
  components: { stickerCarf, Search, Loanding },
  data: () => ({
    stickers: {},
    apiKey: "kVsEmf62mN1UrPcgsRk1ioDiddSXqOxM",
    activeLoanding: false,
  }),
  created() {
    this.getStickers();
  },
  methods: {
    async getStickers(busqueda = "goku") {
      this.activeLoanding = true;
      const { data } = await this.axios.get(
        "https://api.giphy.com/v1/stickers/search?api_key=" +
          this.apiKey +
          "&q=" +
          busqueda
      );
      this.stickers = data.data;
      this.activeLoanding = false;
      console.log(this.stickers);
    },
  },
};
</script>

