<template>
  <div class="home container-fluid">
    <Navbar :navbarproduct="false"></Navbar>
    <section class="home_sidebar_area">
      <div class="container-fluid">
        <div class="row row_disable">
          <div class="col-lg-3 float-md-left">
            <Catagory></Catagory>
          </div>
          <div class="col-lg-9 float-md-right">
            <Search />
            <ProductCardDeal :Products="updatedResultArray" />
            <b-alert :show="alert" variant="danger">
              <h4 class="alert-heading">No Such Items!</h4>
              <p class="text-danger">Please,check the spelling.</p>
            </b-alert>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  import Search from "@/components/Search.vue";
  import Catagory from "@/components/Catagory.vue";
  import ProductCardDeal from "@/components/ProductCardDeal.vue";

  export default {
    name: "SearchResult",
    data() {
      return {
        updatedResultArray: [],
        alert: false
      };
    },
    components: {
      Navbar,
      Footer,
      Search,
      Catagory,
      ProductCardDeal
    },
    created() {
      this.updatedResultArray = this.$route.query.ResultArray;
      if (this.updatedResultArray.length == 0) {
        this.alert = true;
      }
    }
  };
</script>
