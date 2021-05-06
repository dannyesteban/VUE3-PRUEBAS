const app = Vue.createApp({
  data() {
    return {
      title: "Peticiones Fetch en Vue",
      imagen:"",
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    async getPost() {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos/10");
      console.log("getPost");
      const data = await res.json();
      this.imagen=data.url
      console.log(data);
      console.log(imagen);
    }
  }
});
