const app = Vue.createApp({
  data() {
    return {
      title: "Peticiones con parametros en Vue",
      datos: []
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    async getPost() {
      
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/12"
      );

      const { userId } = data;
      console.log(userId);

      const { data:datauser } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + userId
      );
      console.log(datauser);
    }
  }
});
