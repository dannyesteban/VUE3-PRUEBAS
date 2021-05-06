app.component("lista-paises", {
  template: `
    <ol>
        <li v-for="(item, index) in paises" :key="index">{{item}}</li>
    </ol>
    `,
  props: {
    paises: Array
  }
});
