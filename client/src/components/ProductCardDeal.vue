<template>
  <div>
    <div class="product product-single" v-for="product in Products" :key="product._id">
      <div class="product-thumb">
        <div class="product-label">
          <span>New</span>
          <span class="sale">-20%</span>
        </div>
        <router-link :to="{ name: 'productdetails', params: {product: product } }">
          <button class="quick-view">
            <font-awesome-icon size="1x" icon="search-plus"></font-awesome-icon>Quick view
          </button>
        </router-link>
        <b-img fluid :src="getDataBasePhoto(product.image)"></b-img>
      </div>
      <!-- product body -->
      <div class="product-body">
        <h3 class="product-price">
          ${{product.price}}
          <del class="product-old-price">${{product.price+product.price*(20/100)}}</del>
        </h3>
        <div class="product-rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-o empty"></i>
        </div>
        <h2 class="product-name">
          <a href="#">{{product.productname}}</a>
        </h2>
        <div class="product-btns">
          <v-button :btnClickHandler="()=>ProductToCart(product)" customestyle="primary-btn">
            <font-awesome-icon size="1x" icon="shopping-cart"></font-awesome-icon>
            <span>Add to Cart</span>
          </v-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonSlot from "@/components/ButtonSlot.vue";
  import Product from "../modules/Product";
  import { mapActions } from "vuex";

  import imageProvider from "../mixins/imageProvider";

  export default {
    name: "ProductCardDeal",
    mixins: [imageProvider],
    props: ["Products"],
    components: {
      "v-button": ButtonSlot
    },
    data() {
      return {
        singleproduct: Object
      };
    },
    methods: {
      ...mapActions(["addProductToCart"]),
      ProductToCart(product) {
        this.singleproduct = product;
        this.addProductToCart(this.singleproduct);
      }
    }
  };
</script>

<style scoped>
  a:hover {
    outline: none;
    text-decoration: none;
  }
  .product.product-single {
    margin: 15px;
    transition: 0.3s all;
    display: inline-block;
    position: relative;
    border: 1px solid black;
  }
  .product.product-single:hover {
    box-shadow: 0px 8px 10px -10px rgba(0, 0, 0, 0.175);
    transform: translateY(-4px);
  }
  .product.product-single .product-thumb {
    position: relative;
    margin-bottom: 15px;
    height: 273px;
    width: 256px;
  }
  .product.product-single .product-thumb::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    z-index: 0;
    transition: 0.3s all;
  }
  .product.product-single:hover .product-thumb::after {
    opacity: 0.7;
    visibility: visible;
  }
  .product.product-single .product-label {
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .product.product-single .product-label > span {
    display: block;
  }
  .product .product-label > span {
    position: relative;
    display: inline-block;
    padding: 5px 15px;
    font-weight: 700;
    color: #fff;
    background-color: #30323a;
    z-index: 22;
  }
  .product .product-label > span.sale {
    background-color: #f8694a;
  }
  .product.product-single .product-thumb > img {
    width: 100%;
  }
  .img-fluid {
    max-height: 270px;
    max-width: 100%;
    height: 100%;
  }
  .product.product-single .product-body {
    padding: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 256px;
    height: 200px;
  }
  .product.product-single .product-price {
    display: inline-block;
  }
  .product .product-old-price {
    color: #f8694a;
    font-size: 70%;
  }
  .product.product-single .product-rating {
    float: right;
    margin-top: 5px;
  }
  .product .product-rating {
    display: inline-block;
  }
  .product .product-rating > i {
    color: #ffb656;
  }
  .product .product-rating > i.empty {
    color: #dadada;
  }
  .product.product-single .product-name {
    font-size: 20px;
    border: none;
  }
  .product.product-single .product-btns {
    margin-top: 20px;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s all;
  }
  .product.product-single:hover .product-btns {
    opacity: 1;
    visibility: visible;
  }

  .quick-view {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    visibility: hidden;
    z-index: 20;
    transform: translate(-50%, -50%);
    transition: all 400ms linear 0s;
    background-color: orangered;
    border: none;
  }
  .l_p_img:hover .quick-view {
    opacity: 1;
    visibility: visible;
  }
  .product.product-single:hover .quick-view {
    opacity: 1;
    visibility: visible;
  }
</style>