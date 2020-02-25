<template>
  <div>
    <Navbar :navbarproduct="true"></Navbar>
    <div class="section">
      <div class="container-fluid">
        <div class="row product">
          <div class="col-md-6">
            <div id="product-main-view" style="width:400px ; height: 100%;">
              <zoomOnHover :img-normal="databaseImage" :scale="1.5"></zoomOnHover>
              <!-- <ProductZoomer :base-images="images" :base-zoomer-options="zoomerOptions" /> -->
            </div>
          </div>
          <div class="col-md-6">
            <div class="product-body">
              <div class="product-label">
                <span>New</span>
                <span class="sale">-20%</span>
              </div>
              <h2 class="product-name">{{product.productname}}</h2>
              <h3 class="product-price">
                ${{product.price}}
                <del
                  class="product-old-price"
                >${{product.price+product.price*(20/100)}}</del>
              </h3>

              <p>
                <strong>Availability:</strong>
                {{ product.availability }}
              </p>
              <p>
                <strong>Brand:</strong>
                {{ product.brand }}
              </p>
              <p>{{ product.details }}</p>

              <div class="p_color">
                <h4 class="p_d_title">
                  Size
                  <span>*</span>
                </h4>
                <select class="selectpicker">
                  <option>Select your size</option>
                  <option>Select your size M</option>
                  <option>Select your size XL</option>
                  <option>Select your size L</option>
                </select>
              </div>
              <div class="quantity">
                <div class="custom">
                  <input
                    type="number"
                    name="qty"
                    id="sst"
                    maxlength="12"
                    v-model="quantity"
                    title="Quantity:"
                    class="input-text qty"
                  />

                  <ButtonSlot
                    :btnClickHandler="()=>ProductToCart(product)"
                    customestyle="primary-btn"
                  >
                    <font-awesome-icon size="1x" icon="shopping-cart"></font-awesome-icon>
                    <span>Add to Cart</span>
                  </ButtonSlot>
                  <!-- <a class="add_cart_btn" href="#">add to cart</a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "@/components/Footer.vue";
  import Navbar from "@/components/Navbar.vue";
  import ButtonSlot from "@/components/ButtonSlot.vue";
  import zoomOnHover from "@/components/zoomOnHover.vue";

  import { mapActions, mapMutations } from "vuex";

  export default {
    components: {
      Footer,
      Navbar,
      zoomOnHover,
      ButtonSlot
    },
    props: {
      product: Object
    },
    data() {
      return {
        quantity: 1,
        databaseImage: null
      };
    },
    methods: {
      ...mapActions(["addProductToCart", "updateQuantity"]),
      ...mapMutations([
        "changequantity",
        "incrementQuntity",
        "decrementQuantity"
      ]),
      changequantity(e, productId) {
        this.$store.commit("changequantity", { quantity: e, productId });
      },
      incrementquantity(found) {
        this.$store.commit("incrementQuntity", found);
      },
      decrementquantity(found) {
        this.$store.commit("decrementQuantity", found);
      },
      ProductToCart(product) {
        this.product.quantity =
          this.product.quantity + parseInt(this.quantity) - 1;
        this.addProductToCart(this.product);
        this.quantity = 1;
      },
      getDataBasePhoto(imageName) {
        return `https://e-shop-product-image.s3.us-east-2.amazonaws.com/${imageName}`;
      }
    },
    created() {
      this.databaseImage = this.getDataBasePhoto(this.product.image);
    }
  };
</script>

<style >
  @import "https://fonts.googleapis.com/css?family=Poppins&display=swap";
  .imageparent {
    position: relative;
    height: 300px;
    width: 300px;
  }
  .inline-container-base-container {
    height: 400px;
    width: 400px;
  }
</style>

<style scoped>
  strong {
    color: #30323a;
  }
  p {
    color: black;
  }
  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .product-body {
    display: flex;
    flex-direction: column;
  }
  .product-name {
    padding-top: 20px;
  }
  .product .product-old-price {
    color: #f8694a;
    font-size: 70%;
  }
  .product .product-label > span {
    display: inline-block;
    position: relative;
    padding: 5px 15px;
    font-weight: 700;
    color: #fff;
    background-color: #30323a;
    z-index: 22;
  }
  .product .product-label > span.sale {
    background-color: #f8694a;
  }
  .p_color {
    margin-top: 22px;
    max-width: 460px;
  }

  .p_d_title {
    font-size: 16px;
    color: #000;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    padding-bottom: 15px;
  }

  .p_d_title span {
    color: #ff0400;
  }
  .p_color .selectpicker {
    width: 100% !important;
    cursor: pointer;
  }

  .p_color .selectpicker {
    padding: 0px 20px;
    border: 1px solid #cccccc;
    border-radius: 0px;
    height: 40px;
    outline: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    cursor: pointer;
  }

  .p_color .selectpicker span {
    font-size: 14px;
    color: #666666;
    font-family: "Poppins", sans-serif;
  }

  .p_color .selectpicker:after {
    border-top: 0.3em solid #666;
    position: relative;
    right: 10px;
  }

  .p_color .selectpicker option {
    display: block;
  }

  .p_color .selectpicker option {
    padding: 0px 10px;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    color: #666666;
    line-height: 30px;
    transition: all 400ms linear 0s;
  }

  .p_color .selectpicker option:hover {
    color: #000;
  }
  .quantity {
    margin-top: 30px;
    margin-bottom: 18px;
  }

  .quantity .custom {
    display: inline-block;
    position: relative;
  }
  .quantity .custom .reduced,
  .quantity .custom .increase {
    padding: 0px;
    border: none;
    background: transparent;
    outline: none !important;
    box-shadow: none !important;
    font-size: 18px;
    color: #000;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .quantity .custom .reduced {
    left: 10px;
  }
  .quantity .custom .increase {
    right: 10px;
  }
  .quantity .custom input {
    height: 50px;
    width: 150px;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 500;
    color: #000;
    letter-spacing: 0.4px;
    border: 1px solid #cccccc;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .quantity .custom input.placeholder {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: #000;
    letter-spacing: 0.4px;
  }
  .quantity .add_cart_btn {
    height: 50px;
    vertical-align: top;
    line-height: 49px;
    border: 1px solid #cccccc;
    padding: 0px 30px;
    margin-left: 7px;
  }
  .add_cart_btn {
    background: #262121;
    color: #fff;
    line-height: 38px;
    border: 1px solid #262121;
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    padding: 0px 15px;
    transition: all 400ms linear 0s;
    font-family: "Poppins", sans-serif;
  }
  .add_cart_btn:hover {
    color: #fff;
    background: transparent;
    color: #262121;
    text-decoration: none;
  }

  #product-main-view .slick-arrow {
    position: relative;
    opacity: 0;
  }

  #product-main-view:hover .slick-arrow {
    opacity: 1;
  }
  #product-view {
    margin-top: 10px;
    margin-bottom: 15px;
  }

  #product-view .product-view.slick-slide {
    opacity: 0.2;
  }

  #product-view .product-view.slick-slide.slick-current {
    opacity: 1;
    -webkit-box-shadow: 0px 0px 0px 2px #f8694a inset;
    box-shadow: 0px 0px 0px 2px #f8694a inset;
  }

  #product-view .product-view {
    padding: 7.5px;
  }

  .product-view > img {
    width: 100%;
  }
</style>
