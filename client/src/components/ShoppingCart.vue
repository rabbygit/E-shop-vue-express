<template>
  <div class="cart">
    <p>
      <b-button v-b-modal.modal-1 class="cartbutton btn-sm">Cart({{length}})</b-button>

      <b-modal id="modal-1" hide-footer title="Your shopping cart">
        <div>
          <b-table striped hover :items="products" :fields="fields">
            <template v-slot:cell(quantity)="data">
              <b-form>
                <b-form-group>
                  <b-input-group>
                    <b-input-group-append>
                      <b-button @click="incrementquantity(data.item)" class="cartIcon">
                        <font-awesome-icon size="1x" icon="plus"></font-awesome-icon>
                      </b-button>
                    </b-input-group-append>
                    <b-form-input
                      class="cartInput"
                      @input="changequantity($event , data.item._id)"
                      :value="data.item.quantity"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-button
                        @click="decrementquantity(data.item)"
                        class="cartIcon btn btn-secondary"
                      >
                        <font-awesome-icon size="1x" icon="minus"></font-awesome-icon>
                      </b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </b-form>
            </template>
          </b-table>
        </div>

        <p class="text-xl-left font-weight-bold text-monospace ml-3">Total: {{ total }}</p>

        <router-link v-show="length" to="/checkout">
          <b-button class="float-right mt-1" size="sm" variant="outline-danger">CHECKOUT</b-button>
        </router-link>
      </b-modal>
    </p>
  </div>
</template>

<<script>
import { mapGetters, mapActions , mapMutations  } from "vuex";

export default {
  data() {
    return {
      fields: ['productname', 'quantity', 'totalPrice'],
     
    }
  },
  computed: {
    ...mapGetters({
      products: "cartProducts",
      total: "cartTotal",
      length: "cartCount"
    }),
  },
  methods: {
    ...mapMutations(['changequantity' , 'incrementQuntity' , 'decrementQuantity']),
    ...mapActions(['updateQuantity']),
    changequantity(e , productId){
      this.$store.commit('changequantity' , {quantity : e ,  productId})
    },
    incrementquantity(found){
      this.$store.commit('incrementQuntity' , found)
    },
    decrementquantity(found){
      this.$store.commit('decrementQuantity' , found)
    }
  },
}
</script>

<style scoped>
  .cart {
    margin: 0%;
    padding: 0%;
  }
  .cartbutton,
  .cartbutton:focus,
  .cartbutton:active,
  .cartbutton:not(:disabled):not(.disabled):active {
    background-color: transparent;
    border: none;
    box-shadow: none;
    padding: 0;
    display: flex;
  }
  .cartbutton:hover {
    color: red;
  }
  p {
    color: black;
  }
  .cartInput {
    width: 30px !important;
  }
  .cartIcon,
  .cartIcon:hover,
  .cartIcon:active,
  .cartIcon:focus {
    color: black !important;
    background-color: transparent !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
</style>