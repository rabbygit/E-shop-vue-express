<template>
  <header class="shop_header_area container-fluid">
    <div class="header_top_area">
      <div class="container">
        <div class="row m0">
          <div class="col-lg-6">
            <p>
              <font-awesome-icon size="1x" icon="phone-alt"></font-awesome-icon>
              <span>+8801 75704 7579</span>
            </p>
            <p class="ml-2">
              <font-awesome-icon size="1x" icon="envelope"></font-awesome-icon>
              <span>support@rshop.com</span>
            </p>
          </div>
          <div class="col-lg-6">
            <ul class="account_list float-md-right mb-0">
              <li>
                <router-link to="/userprofile">My Account</router-link>
              </li>
              <li>
                <ShoppingCart />
              </li>
              <li>
                <router-link to="/checkout">Checkout</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel_menu_inner">
      <div class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/images/logo.png" />
        </router-link>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
          <li class="nav-item float-right">
            <a class="nav-link" href="#">Blog</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- </div> -->
  </header>
</template>

<script>
  import ShoppingCart from "@/components/ShoppingCart.vue";

  export default {
    name: "Navbar",
    components: {
      ShoppingCart
    },
    props: {
      navbarproduct: {
        type: Boolean
      }
    },
    data() {
      return {
        toggle: false
      };
    },
    methods: {
      Click: function() {
        this.toggle = !this.toggle;
      }
    }
  };
</script>

<style>
  .carousel_menu_inner {
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
  .header_top_area {
    background-color: #333333;
  }
  .row .m0 {
    margin: 0px;
  }
  .account_list li {
    padding-top: 8px;
    display: inline-block;
    margin-right: 20px;
  }
  .account_list li:last-child {
    margin-right: 5px;
  }
  .account_list li a {
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 0.325px;
    transition: all 400ms linear 0s;
    outline: none;
    text-decoration: none;
  }
  .account_list li:hover a {
    color: red;
  }
  p {
    display: inline-block;
    color: white;
    padding-top: 8px;
    font-size: 15px;
    font-weight: 600;
  }
  p i {
    margin-left: 0px;
    padding-right: 20px;
  }
  p span {
    padding-left: 5px;
  }
  .shop_header_area {
    margin: 0px;
    padding: 0px;
  }
  .shop_header_area .navbar .navbar-nav li {
    margin-right: 40px;
  }
  .shop_header_area .navbar .navbar-nav li a {
    padding: 0px;
    line-height: 70px;
    font-size: 14px;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: #000;
    transition: all 400ms linear 0s;
  }
  .shop_header_area .navbar .navbar-nav li a:after {
    display: none;
  }
  .shop_header_area .navbar .navbar-nav li a i {
    padding-left: 6px;
  }
  .shop_header_area .navbar .navbar-nav li:first-child {
    margin-left: 115px;
  }

  @media screen and (max-width: 1000px) {
    .shop_header_area .navbar .navbar-nav li:first-child {
      margin-left: 0px;
    }
  }
  @media screen and (max-width: 600px) {
    .shop_header_area .navbar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      margin-left: 0px;
    }
  }
  .shop_header_area .navbar .navbar-nav li:last-child {
    margin-right: 0px;
  }
  .shop_header_area .navbar .navbar-nav li:hover a,
  .shop_header_area .navbar .navbar-nav li.active a {
    color: #d91522;
  }

  .category-nav {
    float: left;
    width: 270px;
    margin-left: 70px;
  }

  .category-nav .category-header {
    padding: 10px;
    display: block;
    text-transform: uppercase;
    background: gray;
    color: #fff;
    font-weight: 700;
    cursor: pointer;

    /* line-height: 70px; */
    font-size: 14px;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    /* font-weight: bold; */
  }

  .category-nav .category-header > i {
    float: right;
    line-height: 20px;
  }

  .category-nav .category-list {
    position: absolute;
    width: 270px;
    background-color: #fff;
    border-left: 1px solid #dadada;
    border-right: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    z-index: 50;
    transition: 0.3s all;
  }

  .close {
    opacity: 0;
    visibility: hidden;
    transform: translate(0px, 15px);
  }

  /* .category-nav.show-on-click .category-list {
              opacity: 0;
              visibility: hidden;
              -webkit-transform: translate(0px, 15px);
              -ms-transform: translate(0px, 15px);
              transform: translate(0px, 15px);
            } */

  .open {
    opacity: 1;
    visibility: visible !important;
    transform: translate(0px, 0px);
    display: block;
  }
  /* .category-nav .show-on-click .category-list.open {
              opacity: 1;
              visibility: visible !important;
              transform: translate(0px, 0px);
            } */

  .category-nav .category-list > li + li {
    border-top: 1px solid #dadada;
  }

  .category-nav .category-list > li > a {
    display: block;
    padding: 15px;
    text-transform: uppercase;
  }

  .category-nav .category-list > li > a:hover,
  .category-nav .category-list > li > a:focus,
  .category-nav .category-list > li.dropdown.open > a {
    color: #f8694a;
    text-decoration: none;
  }
</style>
