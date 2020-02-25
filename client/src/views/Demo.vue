<template>
  <div>
    <b-img fluid src="url"></b-img>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        url: ""
      };
    },
    methods: {
      getDataBasePhoto() {
        this.url = axios.get(
          `https://e-shop-product-image.s3.us-east-2.amazonaws.com/file-1581267452632.jpg`
        );
      }
    }
  };
</script>

<style>
</style>