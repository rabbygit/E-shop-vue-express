import Vue from 'vue';

const state = {
  cartList: [],
};

const actions = {
  addProductToCart({ state, commit }, productToFind) {
    let found = state.cartList.find(
      product => product._id == productToFind._id,
    );

    if (!found) {
      commit('addToCart', productToFind);
    } else {
      commit('incrementQuntity', found);
    }
  },
  updateQuantity({ commit }, product) {
    let found = state.cartList.find(product => product._id == product._id);

    if (found) {
      commit('changequantity', product);
    }
  },
};

const mutations = {
  addToCart(state, product) {
    state.cartList.push(product);
    Vue.set(product, 'quantity', 1);
    Vue.set(product, 'totalPrice', product.price);
  },
  incrementQuntity(state, found) {
    found.quantity++;
    found.totalPrice = found.quantity * found.price;
  },
  decrementQuantity(state, found) {
    found.quantity--;
    found.totalPrice = found.quantity * found.price;
  },
  changequantity(state, { quantity, productId }) {
    const product = state.cartList.find(product => product._id == productId);
    parseInt(quantity);
    product.quantity = quantity;
    product.totalPrice = product.quantity * product.price;
  },
};

const getters = {
  cartProducts: (state, getters, rootState) => state.cartList,
  cartTotal: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.totalPrice;
    }, 0);
  },
  cartCount: state =>
    state.cartList.reduce(
      (total, product) => total + parseInt(product.quantity),
      0,
    ),
};

export default {
  state,
  actions,
  mutations,
  getters,
};
