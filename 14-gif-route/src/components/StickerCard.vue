<template>
  <div class="card" style="width: 100%">
    <img :src="data.images.downsized.url" class="card-img-top" alt="sticker" />
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

