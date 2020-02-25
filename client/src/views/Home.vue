<template>
  <div class="home container-fluid">
    <Navbar :navbarproduct="false"></Navbar>
    <section class="home_sidebar_area">
      <div class="container-fluid">
        <div class="row row_disable">
          <div class="col-lg-9 float-md-right">
            <div class="sidebar_main_content_area">
              <Search />
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="../assets/images/banner01.jpg"
                      alt="First slide"
                    />
                    <div class="banner-caption text-center">
                      <h1>Bags sale</h1>
                      <h3 class="white-color font-weak">Up to 50% Discount</h3>
                      <router-link
                        class="nav-link"
                        :to="{ name: 'products', params: {productType: 'BAGS' } }"
                      >
                        <ButtonSlot customestyle="primary-btn">
                          <span>Shop Now</span>
                        </ButtonSlot>
                      </router-link>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="../assets/images/banner02.jpg"
                      alt="Second slide"
                    />
                    <div class="banner-caption">
                      <h1 class="primary-color">
                        HOT DEAL
                        <br />
                        <span class="white-color font-weak">Up to 50% OFF</span>
                      </h1>
                      <router-link
                        class="nav-link"
                        :to="{ name: 'products', params: {productType: 'MEN' } }"
                      >
                        <ButtonSlot customestyle="primary-btn">
                          <span>Shop Now</span>
                        </ButtonSlot>
                      </router-link>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="../assets/images/banner03.jpg"
                      alt="Thirdk slide"
                    />
                    <div class="banner-caption">
                      <h1 class="white-color">
                        New Product
                        <span>Collection</span>
                      </h1>
                      <router-link
                        class="nav-link"
                        :to="{ name: 'products', params: {productType: 'BAGS' } }"
                      >
                        <ButtonSlot customestyle="primary-btn">
                          <span>Shop Now</span>
                        </ButtonSlot>
                      </router-link>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 float-md-left">
            <Catagory></Catagory>
          </div>
        </div>
      </div>
    </section>

    <!-- New collection section -->
    <div class="section new-collection-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <router-link
              :to="{ name: 'products', params: {productType: 'BAGS' } }"
              class="banner banner-1"
            >
              <img src="../assets/images/banner10.jpg" alt />
              <div class="banner-caption text-center">
                <h2 class="white-color">NEW COLLECTION</h2>
              </div>
            </router-link>
          </div>
          <div class="col-md-4 col-sm-6">
            <router-link
              :to="{ name: 'products', params: {productType: 'SHOE' } }"
              class="banner banner-1"
            >
              <img src="../assets/images/banner11.jpg" alt />
              <div class="banner-caption text-center">
                <h2 class="white-color">NEW COLLECTION</h2>
              </div>
            </router-link>
          </div>
          <div class="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
            <router-link
              :to="{ name: 'products', params: {productType: 'WATCH' } }"
              class="banner banner-1"
            >
              <img src="../assets/images/banner12.jpg" alt />
              <div class="banner-caption text-center">
                <h2 class="white-color">NEW COLLECTION</h2>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Deals of the day -->
    <div class="section deals-of-the-day-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2 class="title">Deals Of The Day</h2>
              <div class="controls pull-right hidden-xs">
                <a href="carousel-example" data-slide="next">
                  <i class="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-xs-6">
            <div class="banner banner-2">
              <img src="../assets/images/banner14.jpg" alt />
              <div class="banner-caption">
                <h2 class="white-color">
                  NEW
                  <br />COLLECTION
                </h2>
                <router-link
                  class="nav-link"
                  :to="{ name: 'products', params: {productType: 'WOMEN' } }"
                >
                  <ButtonSlot customestyle="primary-btn">
                    <span>Shop Now</span>
                  </ButtonSlot>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <ProductCardDeal :Products="products" />
        </div>
      </div>
    </div>

    <!-- Latest product section -->
    <div class="section latest-product-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2 class="title">Our Latest Product</h2>
            </div>
          </div>
        </div>
        <!-- product -->
        <div class="col-md-12 col-sm-6 col-xs-6">
          <div class="row">
            <ProductCard :Products="products" />
          </div>
        </div>

        <!-- <div class="col-md-12">
          <div class="row lastest_product">
            <ProductCard :Products = "products"/>
          </div>
        </div>-->
      </div>
    </div>

    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue";
  import Footer from "@/components/Footer.vue";
  import Catagory from "@/components/Catagory.vue";
  import ProductCard from "@/components/ProductCard.vue";
  import ProductCardDeal from "@/components/ProductCardDeal.vue";
  import ButtonSlot from "@/components/ButtonSlot.vue";
  import Search from "@/components/Search.vue";

  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "home",
    components: {
      Navbar,
      Footer,
      Catagory,
      ProductCard,
      ProductCardDeal,
      ButtonSlot,
      Search
    },
    computed: {
      ...mapGetters({
        products: "productArray"
      })
    }
  };
</script>

<style scoped>
  .home_sidebar_area {
    margin: 0px;
    padding: 0px;
  }
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
  a {
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: none;
    outline: none;
  }
  .row_disable {
    display: block;
    overflow: hidden;
  }
  .advanced_search_area {
    border: 1px solid #e5e5e5;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
  }
  .advanced_search_area .bootstrap-select {
    flex: 0 0 25%;
    max-width: 25%;
    width: 100% !important;
    text-align: center;
  }
  .advanced_search_area .bootstrap-select option {
    padding: 0px;
    line-height: 58px;
    text-align: center;
    margin: 0px;
    border: none;
    box-shadow: none !important;
    outline: none !important;
    position: relative;
    border-radius: 0%;
  }
  .advanced_search_area .bootstrap-select .option span {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: #000;
    text-transform: uppercase;
    text-align: center !important;
  }
  .advanced_search_area .bootstrap-select .option:after {
    content: "\33";
    font-family: "ElegantIcons";
    font-size: 14px;
    color: #000;
    margin: 0px;
    width: auto;
    height: auto;
    position: absolute;
    right: 22px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    border: none;
  }
  .advanced_search_area .bootstrap-select .dropdown-menu {
    padding: 0px;
    border-radius: 0px;
  }

  .advanced_search_area .bootstrap-select .dropdown-menu .dropdown-menu.inner {
    display: inline-block;
  }

  .advanced_search_area
    .bootstrap-select
    .dropdown-menu
    .dropdown-menu.inner
    li
    a {
    padding: 0px 10px;
    font-size: 14px;
    color: #666666;
    line-height: 35px;
  }
  .advanced_search_area .input-group {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .advanced_search_area .input-group input {
    border: none;
    padding: 0px 0px 0px 40px;
    outline: none;
    box-shadow: none;
    height: 58px;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    color: #666666;
    letter-spacing: 0.35px;
  }

  .advanced_search_area .input-group input.placeholder {
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    color: #666666;
    letter-spacing: 0.35px;
  }
  .advanced_search_area .input-group .input-group-btn .btn-secondary {
    background: #d91522;
    border-radius: 0px;
    outline: none !important;
    box-shadow: none !important;
    border: none;
    font-size: 15px;
    color: #fff;
    padding: 0px;
    width: 66px;
    margin: 0px;
    cursor: pointer;
  }
  .search-btn,
  .search-btn:active,
  .search-btn:focus {
    align-content: center;
    background-color: transparent;
    outline: none;
    border: none;
    margin: 5px -20px 0px 0px;
  }
  .banner-caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .banner.banner-2 .banner-caption {
    position: absolute;
    left: 50%;
    top: 75%;
    right: -20%;
  }
  .banner {
    display: block;
    position: relative;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .banner > img {
    width: 100%;
  }
  .banner h1 {
    font-size: 46px;
    text-transform: uppercase;
  }
  .white-color {
    color: #fff;
  }
  .font-weak {
    font-weight: 400;
  }
  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .section-title {
    position: relative;
    margin-top: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid rgb(141, 139, 139);
  }
  .section-title .title {
    display: inline-block;
    text-transform: uppercase;
  }
  .section-title:after {
    content: "";
    position: absolute;
    left: 0%;
    bottom: -1.5px;
    height: 3px;
    width: 100px;
    background-color: #f8694a;
  }
  /* .lastest_product {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .home_sidebar_area {
        position: absolute;
        top: 45%;
      }
      .new-collection-section {
        top: 220%;
      }
      .deals-of-the-day-section {
        top: 315%;
        width: 98%;
      } */
</style>
