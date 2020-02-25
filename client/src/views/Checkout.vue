<template>
  <div class="container-fluid">
    <Navbar :navbarproduct="true" />
    <div class="section">
      <div class="container-fluid">
        <div class="row">
          <form id="checkout-form" class="clearfix">
            <div class="row container-fluid">
              <div class="col-md-6">
                <div class="billing-details">
                  <div class="section-title">
                    <h3 class="title">Billing Details</h3>
                  </div>
                  <div class="form-group">
                    <input class="input" type="text" v-model="name" placeholder="First name" />
                  </div>
                  <div class="form-group">
                    <input class="input" type="text" placeholder="Last name" />
                  </div>
                  <div class="form-group">
                    <input class="input" type="email" v-model="email" placeholder="Email" />
                  </div>
                  <div class="form-group">
                    <input class="input" type="text" v-model="address" placeholder="Address" />
                  </div>
                  <div class="form-group">
                    <input class="input" type="text" v-model="city" placeholder="City" />
                  </div>
                  <div class="form-group">
                    <input class="input" type="text" v-model="zipCode" placeholder="Zip code" />
                  </div>
                  <div class="form-group">
                    <input class="input" type="tel" v-model="telephone" placeholder="Telephone" />
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="shiping-methods">
                  <div class="section-title">
                    <h4 class="title">Shiping Methods</h4>
                  </div>
                  <div class="input-checkbox">
                    <input
                      type="radio"
                      v-model="shippingCost"
                      value="0"
                      name="shipping"
                      id="shipping-1"
                      checked
                    />
                    <label for="shipping-1">Free Shiping - $0.00</label>
                    <div class="caption">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                  <div class="input-checkbox">
                    <input
                      type="radio"
                      v-model="shippingCost"
                      value="10"
                      name="shipping"
                      id="shipping-2"
                      checked
                    />
                    <label for="shipping-2">Standard - $10.00</label>
                    <div class="caption">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="payments-methods">
                  <div class="section-title">
                    <h4 class="title">Payments Methods</h4>
                  </div>
                  <div class="input-checkbox">
                    <input type="radio" name="payments" id="payments-3" checked />
                    <label for="payments-3">Pay via credit card</label>
                    <div class="caption">
                      <div id="card-element">
                        <!-- A Stripe Element will be inserted here. -->
                      </div>
                      <div id="card-errors" role="alert"></div>
                    </div>
                  </div>
                  <div class="input-checkbox">
                    <input type="radio" name="payments" id="payments-1" />
                    <label for="payments-1">Hand Cash</label>
                    <div class="caption">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        `` quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="order-summary clearfix">
                  <div class="section-title">
                    <h3 class="title">Order Review</h3>
                  </div>
                  <table class="shopping-cart-table table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th></th>
                        <th class="text-center">Price</th>
                        <th class="text-center">Quantity</th>
                        <th class="text-center">Total</th>
                        <th class="text-right"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in products" :key="product._id">
                        <td class="thumb">
                          <b-img fluid :src="getDataBasePhoto(product.image)"></b-img>
                        </td>
                        <td class="details">
                          <a href>{{ product.productname }}</a>
                          <ul>
                            <li>
                              <span>Size: XL</span>
                            </li>
                            <li>
                              <span>Color: Camelot</span>
                            </li>
                          </ul>
                        </td>
                        <td class="price text-center">
                          <strong>{{ product.price }}</strong>
                          <br />
                          <del class="font-weak">
                            <small>${{product.price+product.price*(20/100)}}</small>
                          </del>
                        </td>
                        <!-- style="padding-left: 30px;" -->
                        <td
                          class="qty d-flex justify-content-center align-items-center"
                          style="height: 120.67px;"
                        >
                          <b-form-input
                            class="input text-center"
                            @input="changequantity($event , product._id)"
                            :value="product.quantity"
                          ></b-form-input>
                        </td>
                        <td class="total text-center">
                          <strong class="primary-color">{{ product.totalPrice }}</strong>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th class="empty" colspan="3"></th>
                        <th>SUBTOTAL</th>
                        <th colspan="2" class="sub-total">{{ total }}$</th>
                      </tr>
                      <tr>
                        <th class="empty" colspan="3"></th>
                        <th>SHIPPING COST</th>
                        <td colspan="2">{{shippingCost}}$</td>
                      </tr>
                      <tr>
                        <th class="empty" colspan="3"></th>
                        <th>TOTAL</th>
                        <th colspan="2" class="total">{{ total + shippingCost}}$</th>
                      </tr>
                    </tfoot>
                  </table>
                  <button v-on:click.prevent="purchase" class="primary-btn checkout-btn">
                    <span>Place hOrder</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
  import axios from "axios";

  import Footer from "@/components/Footer.vue";
  import Navbar from "@/components/Navbar.vue";
  import ButtonSlot from "@/components/ButtonSlot.vue";

  import imageProvider from "@/mixins/imageProvider";

  import { mapGetters, mapActions, mapMutations } from "vuex";

  export default {
    name: "Checkout",
    mixins: [imageProvider],
    components: {
      Footer,
      Navbar,
      ButtonSlot
    },
    data() {
      return {
        name: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
        telephone: "",
        shippingCost: ""
      };
    },
    computed: {
      ...mapGetters({
        products: "cartProducts",
        total: "cartTotal"
      })
    },
    methods: {
      ...mapMutations([
        "changequantity",
        "incrementQuntity",
        "decrementQuantity"
      ]),
      ...mapActions(["updateQuantity"]),
      changequantity(e, productId) {
        this.$store.commit("changequantity", { quantity: e, productId });
      },
      incrementquantity(found) {
        this.$store.commit("incrementQuntity", found);
      },
      decrementquantity(found) {
        this.$store.commit("decrementQuantity", found);
      },
      purchase() {
        stripe.createToken(card).then(function(result) {
          if (result.error) {
            // Inform the user if there was an error.
            var errorElement = document.getElementById("card-errors");
            errorElement.textContent = result.error.message;
          } else {
            // Send the token to  server.

            var request = {
              name: this.name,
              email: this.email,
              address: this.address,
              city: this.city,
              telephone: thi.telephone,
              token_from_stripe: result.token.id
            };
            console.log(request);
            axios
              .post("http://localhost:3000/payment/charged", request)
              .then(res => {
                var error = res.data.error;
                var charge = res.data.charge;
                if (error) {
                  console.log(error);
                } else {
                  alert("Charged successfully");
                }
              });
          }
        });
      }
    },
    mounted: function() {
      var style = {
        base: {
          color: "#32325D",
          fontWeight: 1000,
          fontFamily: "Montserrat, Consolas, Menlo, monospace",
          fontSize: "16px",
          fontSmoothing: "antialiased",
          background: "yellow",
          border: "3px solid blue",
          "::placeholder": {
            color: "#CFD7DF"
          },
          ":-webkit-autofill": {
            color: "#e39f48"
          }
        },
        invalid: {
          color: "#E25950",

          "::placeholder": {
            color: "#FFCCA5"
          }
        }
      };

      var stripe = Stripe(`pk_test_Bn9JU61k9ku1olw4OeoxnNSw00rCLLbDdj`);
      var elements = stripe.elements({
        fonts: [
          {
            cssSrc:
              "https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          }
        ],
        locale: window.__exampleLocale
      });
      var card = undefined;

      card = elements.create("card", { style: style });
      card.mount("#card-element");

      card.addEventListener("change", function(event) {
        var displayError = document.getElementById("card-errors");
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = "";
        }
      });
    }
  };
</script>

<style scoped>
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
  .section-title::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 3px;
    width: 80px;
    background-color: #f8694a;
  }
  .input {
    width: 100%;
    height: 40px;
    padding: 0px 15px;
    border: none;
    background-color: transparent;
    box-shadow: 0px 0px 0px 1px #dadada inset, 0px 0px 0px 5px transparent;
    transition: 0.3s all;
  }
  .input:focus {
    box-shadow: 0px 0px 0px 1px #f8694a inset, 0px 0px 0px 0px #f8694a;
  }
  .input-checkbox .caption {
    max-height: 0;
    overflow: hidden;
    transition: 0.3s max-height;
  }
  .input-checkbox > label {
    color: #30323a;
  }
  .input-checkbox input[type="checkbox"]:checked + label + .caption,
  .input-checkbox input[type="radio"]:checked + label + .caption {
    max-height: 800px;
  }
  p {
    color: #30323a;
  }

  .shopping-cart-table > tbody > tr > td,
  .shopping-cart-table > tbody > tr > th,
  .shopping-cart-table > tfoot > tr > td,
  .shopping-cart-table > tfoot > tr > th,
  .shopping-cart-table > thead > tr > td,
  .shopping-cart-table > thead > tr > th {
    padding: 15px 0px;
    vertical-align: middle;
    border-top: 1px solid #dadada;
  }

  .shopping-cart-table > thead > tr > th {
    color: #30323a;
    text-transform: uppercase;
    border-bottom: 1px solid #dadada;
  }
  .shopping-cart-table > tbody > tr:last-child > td {
    border-bottom: 1px solid rgb(196, 14, 14);
  }
  .shopping-cart-table > tfoot > tr > td,
  .shopping-cart-table > tfoot > tr > th {
    color: #30323a;
    border-top: 0px;
  }
  .shopping-cart-table > tfoot > tr > td:not(.empty),
  .shopping-cart-table > tfoot > tr > th:not(.empty) {
    padding: 15px;
    background-color: #f6f7f8;
    border: 1px solid #dadada;
  }
  .shopping-cart-table > tbody > tr > .details > a {
    font-size: 18px;
    font-weight: 700;
  }
  .shopping-cart-table > tbody > tr > .thumb > img {
    width: 60px;
  }
  .shopping-cart-table > tbody > tr > .qty .input {
    width: 150px;
  }

  .shopping-cart-table > tbody > tr > .price {
    font-size: 18px;
  }

  .shopping-cart-table > tbody > tr > .total {
    font-size: 18px;
  }

  .shopping-cart-table > tfoot > tr > .sub-total {
    font-size: 18px;
  }
  .shopping-cart-table > tfoot > tr > .total {
    font-size: 24px;
    color: #f8694a;
  }
  .checkout-btn {
    width: 100%;
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
  .StripeElement {
    box-sizing: border-box;

    height: 40px;

    padding: 10px 12px;

    border: 1px solid transparent;
    border-radius: 4px;
    background-color: white;

    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
  }

  .StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }

  .StripeElement--invalid {
    border-color: #fa755a;
  }

  .StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
  }
</style>
