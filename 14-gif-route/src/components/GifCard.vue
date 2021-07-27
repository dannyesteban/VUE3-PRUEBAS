<template>
  <div class="card" style="width: 18rem">
 <img :src="data.images.downsized.url" class="card-img-top" alt="Gif" /> 
    <div class="card-body">
      <h5 class="card-title">{{ data.username }}</h5>
      <p class="card-text">
        {{ data.title }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

