import Vue from "vue";
import Vuex from "vuex";
import Auth from "./modules/Auth"
import Product from "./modules/Product"
import Cart from "./modules/Cart"

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules:{
    Auth,
    Product,
    Cart
  },
  strict: debug,
});