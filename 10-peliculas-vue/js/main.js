const app = Vue.createApp({
  data() {
    return {
      title: "Peliculas ",
      movieData: {},
      ApiKey: "72711e08",
      busqueda: "iron MAN"
    };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    async getMovie() {
      const search = this.busqueda.toLowerCase().replace(/ /g, "+");
      console.log(search);
      const data = await fetch(
        "https://www.omdbapi.com/?apikey=" + this.ApiKey + "&t=" + search
      );
      const jsonData = await data.json();
      this.movieData = jsonData;
      console.log(jsonData);
    }
  }
});
