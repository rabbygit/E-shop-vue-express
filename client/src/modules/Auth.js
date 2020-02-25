import axios from 'axios';
import router from '../router';

let url = 'http://localhost:3000/';
const APIURL = 'https://e-shop-134.herokuapp.com/';

const state = {
  token: localStorage.getItem('token') || '',
  status: '',
  error: null,
};

const actions = {
  //Register a new user
  async register({ commit }, user) {
    commit('register_request');
    let response = await axios.post(APIURL + 'api/register', user);
    if (response.data.success != undefined) {
      commit('register_success');
      return response;
    } else {
      return response;
    }
  },

  //User login

  async login({ commit }, logUser) {
    commit('login_request');
    let response = await axios.post(APIURL + 'api/login', logUser);
    if (response.data.success) {
      const token = response.data.token;
      //set the token in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      //set the default token in axioxs headers
      axios.defaults.headers.common['Authorization'] = token;
      // console.log(response.data.user);
      commit('login_success', token);
      return response;
    } else {
      return response;
    }
  },
};

const mutations = {
  register_request(state) {
    state.status = 'Loading';
    state.error = null;
  },
  register_success(state) {
    state.status = 'Succes';
    state.error = null;
  },
  register_error(state, err) {
    state.status = 'Error occured';
    state.error = err.response.data.message;
  },
  login_request(state) {
    (state.status = 'loading'), (state.error = null);
  },
  login_success(state, token) {
    (state.status = 'success'), (state.error = null), (state.token = token);
  },
  login_error(state, err) {
    state.status = 'Error occured';
    state.error = err.response.data.message;
  },
};

const getters = {
  isLoggedIn: function (state) {
    if (state.token != '') {
      return true;
    } else {
      return false;
    }
  },
  user: state => state.user,
};

export default {
  state,
  actions,
  mutations,
  getters,
};
