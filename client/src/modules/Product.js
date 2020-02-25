import Vue from 'vue';
import axios from 'axios';
import router from '../router';
import { stat } from 'fs';

let url = 'http://localhost:3000/';
const APIURL = 'https://e-shop-134.herokuapp.com/';


const state = {
  productArray: [],
};

const actions = {
  //Load all products
  async getProducts({ commit }) {
    console.log('Request recived');
    await axios.get(APIURL + 'api/product/getProducts').then(response => {
      commit('setProduct', response.data);
    });
  },

  //Add a new product
  async addProduct({ commit }, product) {
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    console.log('before request: ' + product);
    let response = await axios.post(APIURL + 'api/product/addProduct', product, config);
    commit('create_success', product);
    return response;
  },

  //Delete a product
  async deleteProduct({ commit }, _id, data) {
    console.log(_id);
    let response = await axios
      .get(APIURL + `api/product/deleteProduct/${_id}`)
      .then(response => {
        if (response.data.success) {
          commit('deleteProduct', data);
        }
      });
  },

  //Update a product which has updated image
  //  boundary=${product._boundary}`,
  async updateProductandImage({ commit }, product) {
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    // let obj = JSON.stringify(Object.fromEntries(product));
    console.log('before request: ' + product);
    let response = await axios.put(
      APIURL + 'api/product/updateProductandImage',
      product,
      config,
    );

    if (response.data.success) {
      commit('successUpdate', response.data.updatedProduct);
    }
    return response;
  },

  //Update a product which has not updated image
  async updateProduct({ commit }, product) {
    console.log('before request: ' + product);
    let response = await axios.put(APIURL + 'api/product/updateProduct', product);

    if (response.data.success) {
      commit('successUpdate', response.data.updatedProduct);
    }

    return response;
  },
};

const mutations = {
  setProduct(state, products) {
    state.productArray = products;
  },
  create_success(state, product) {
    state.productArray.push(product);
  },
  deleteProduct(state, data) {
    state.productArray.splice(state.productArray.indexOf(data), 1);
    // var index = state.productArray.findIndex(item => item._id === data._id)
    // Vue.delete(state.productArray, index)
  },
  successUpdate(state, updatedProduct) {
    console.log('from vuex update');
    //update the product with _id or product
    var index = state.productArray.findIndex(
      item => item._id === updatedProduct._id,
    );
    Vue.set(state.productArray, index, updatedProduct);

    //It will also work with splice method
    // state.contentBlocks.splice(index, 1, contentBlock)
  },
};

const getters = {
  productArray: state => state.productArray,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
