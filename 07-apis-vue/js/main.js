const app = Vue.createApp({
  data() {
    return {
      title: "Peticiones Fetch en Vue"
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

      console.log(data);
    }
  }
});
