<template>
  <div>
    <div class="l_product_item" v-for="product in Products" :key="product._id">
      <div class="l_p_img product-thumb">
        <router-link :to="{ name: 'productdetails', params: {product: product } }">
          <ButtonSlot customestyle="quick-view">
            <font-awesome-icon size="1x" icon="search-plus"></font-awesome-icon>Quick view
          </ButtonSlot>
        </router-link>
        <b-img fluid :src="getDataBasePhoto(product.image)"></b-img>
      </div>
      <div class="l_p_text">
        <ul>
          <li>
            <ButtonSlot :btnClickHandler="()=>ProductToCart(product)" customestyle="primary-btn">
              <font-awesome-icon size="1x" icon="shopping-cart"></font-awesome-icon>
              <span>Add to Cart</span>
            </ButtonSlot>
          </li>
        </ul>
        <h4>{{product.productname}}</h4>
        <h5>
          <del>${{product.price+product.price*(20/100)}}</del>
          ${{product.price}}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonSlot from "@/components/ButtonSlot.vue";
  import { mapActions } from "vuex";

  import imageProvider from "../mixins/imageProvider";

  export default {
    name: "ProductCard",
    mixins: [imageProvider],
    props: ["Products"],
    components: {
      ButtonSlot
    },
    methods: {
      ...mapActions(["addProductToCart"]),
      ProductToCart(product) {
        this.singleproduct = product;
        this.addProductToCart(this.singleproduct);
      },
      demo() {
        console.log("djh");
      }
    }
  };
</script>

<style scoped>
  .l_product_item {
    border: 1px solid black;
    margin: 0px 28px 15px 0px;
    transition: 0.3s all;
    display: inline-block;
    position: relative;
  }
  .product-thumb {
    width: 256px;
  }
  .l_p_img {
    position: relative;
  }
  .l_p_img img {
    width: 100%;
    height: 350px;
    max-height: 270px;
  }

  .l_p_text {
    text-align: center;
    border: 1px solid #cccccc;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 256px;
    height: 100px;
  }
  .l_p_text ul {
    margin-bottom: -14px;
    margin-top: -65px;
    padding-top: 18px;
    transition: all 300ms ease-out;
  }
  .l_product_item:hover .l_p_text ul {
    margin-top: 0px;
  }
  .l_product_item .l_p_text ul li {
    display: inline-block;
    margin-right: 8px;
  }
  .l_product_item .l_p_text ul li.p_icon {
    vertical-align: top;
  }
  .l_product_item .l_p_text ul li.p_icon a {
    border: 1px solid #999999;
    font-size: 17px;
    color: #999999;
    display: inline-block;
    margin-top: 10px;
    padding: 0px 10px;
    line-height: 38px;
    position: relative;
    top: 1px;
    transition: all 400ms linear 0s;
  }
  .l_product_item .l_p_text ul li.p_icon a:hover {
    color: #000;
  }
  .l_product_item .l_p_text ul li:last-child {
    margin-right: 0px;
  }
  .l_product_item .l_p_text h4 {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: #000;
    padding-bottom: 5px;
    padding-top: 35px;
    -webkit-transition: all 400ms linear 0s;
    -o-transition: all 400ms linear 0s;
    transition: all 400ms linear 0s;
  }
  .l_product_item:hover .l_p_text h4 {
    opacity: 0;
  }
  .l_product_item .l_p_text h5 {
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: #d91522;
    -webkit-transition: all 400ms linear 0s;
    -o-transition: all 400ms linear 0s;
    transition: all 400ms linear 0s;
  }
  .l_product_item:hover .l_p_text h5 {
    opacity: 0;
  }
  .l_product_item .l_p_text h5 del {
    font-size: 16px;
    color: #666666;
  }
  .product-thumb:after {
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
  .l_product_item:hover .product-thumb:after {
    opacity: 0.7;
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
  .primary-btn {
    display: inline-block;
    padding: 10px 15px;
    text-transform: uppercase;
    font-weight: 700;
    border: none;
    transition: 0.3s all;
    color: #fff;
    background-color: #f8694a;
  }
  .primary-btn:hover,
  .primary-btn:focus {
    color: #fff;
    background-color: #30323a;
  }
</style>