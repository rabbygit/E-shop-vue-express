<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
    <!-- This is because Vue Router does not notice any change if the same component is being addressed. 
    With the key, any change to the path will trigger a reload of the component with the new data.
    It is used for showing products on catagory changes in products views.-->
  </div>
</template>



<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    methods: {
      ...mapActions(["getProducts"])
    },
    mounted() {
      this.getProducts();
    }
  };
</script>

