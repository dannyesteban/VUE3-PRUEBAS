<template>
  <form @submit.prevent="ejecutarPeticion">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Categoría</label>
      <input
        v-model="busqueda"
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
    <button type="submit" class="btn btn-primary">Search</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    busqueda: "",
  }),
  methods: {
    ejecutarPeticion() {
 
      this.$emit("buscar", this.busqueda);
    },
  },
};
</script>
