<template>
  <div>
    <h1>{{ title }}</h1>
    <hr />
    <h2>Post</h2>
    <ol>
      <li v-for="(row, index) in posts" :key="index">{{ row.title }}</li>
    </ol>
    <hr />
    <h2>Users</h2>
    <ol>
      <li v-for="(row, index) in users" :key="index">{{ row.name }}</li>
    </ol>
    <!--
    <Contador />
    <Contador />
    <Contador2 />

    <boton :btnText="'Aumentar'" @accion="fnAumentar" />
    <boton :btnText="'Disminuir'" @accion="fnDisminuir" />

    <hr />-->
  </div>
</template>

<script>
//import Boton from "./Boton.vue";
//import { ref, computed, provide } from "vue";
//import Contador from "./ContadorUno.vue";
//import Contador2 from "./Contador2.vue";
//import { fnUseContador } from "../hooks/useContador";
import { onMounted, ref } from "vue";

export default {
  // components: { Boton, Contador, Contador2 },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(props) {
    /*
    const title = props.msg;
    const contador = ref(0);

    const fnAumentar = () => contador.value++;
    const fnDisminuir = () => contador.value--;

    const color = computed(() => (contador.value < 0 ? "red" : "green"));

    provide("valorContador", contador);
    provide("color", color);
    return { title, contador, color, fnAumentar, fnDisminuir };
    */

    /// Api Rest
    const title = "Hooks del ciclo de vida";
    const posts = ref([]);
    const users = ref([]);

    onMounted(async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      posts.value = await resp.json();
    });

    onMounted(async () => {
      const resp2 = await fetch("https://jsonplaceholder.typicode.com/users");
      users.value = await resp2.json();
      console.log(users.value);
    });

    return { title, posts, users };
  },
};
</script>
