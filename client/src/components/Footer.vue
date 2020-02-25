<template>
  <div class="section section-grey">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-xs-6">
          <div class="footer">
            <div class="footer-logo">
              <a class="logo" href>
                <img src="../assets/images/logo.png" alt />
              </a>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            <ul class="footer-social">
              <li>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'facebook']" />
                </a>
              </li>
              <li>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </a>
              </li>
              <li>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'pinterest']" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-6">
          <div class="footer">
            <h3 class="footer-header">My Account</h3>
            <ul class="list-links">
              <li>
                <router-link class="nav-link" to="/login">My Account</router-link>
              </li>
              <li>
                <router-link to="/login">My Wishlist</router-link>
              </li>
              <li>
                <router-link to="/login">Compare</router-link>
              </li>
              <li>
                <router-link to="/checkout">Checkout</router-link>
              </li>
              <li>
                <router-link to="/login">Log in</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="clearfix visible-sm visible-xs"></div>
        <div class="col-md-3 col-sm-6 col-xs-6">
          <div class="footer">
            <h3 class="footer-header">Customer Service</h3>
            <ul class="list-links">
              <li>
                <router-link class="nav-link" to="/about">About us</router-link>
              </li>
              <li>
                <a href="#">Shiping & Return</a>
              </li>
              <li>
                <a href="#">Shiping Guide</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- footer subscribe -->
        <div class="col-md-3 col-sm-6 col-xs-6">
          <div class="footer">
            <h3 class="footer-header">Stay Connected</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            <form>
              <div class="form-group">
                <input
                  class="input"
                  type="email"
                  v-model.trim="$v.email.$model"
                  placeholder="Enter Email Address"
                />
              </div>
              <button
                class="btn primary-btn"
                :disabled="email == '' ? true : false "
                v-on:click.prevent="makeToast"
              >Join Newslatter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import newslatter from "../mixins/newslatter";

  export default {
    name: "Footer",
    mixins: [newslatter],
    data() {
      return {};
    }
  };
</script>

<style scoped>
  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .section-grey {
    background: #f6f7f8;
  }
  .footer {
    margin: 15px 0px;
  }
  .footer > p {
    color: black;
  }
  .footer-logo {
    margin-bottom: 30px;
  }
  .footer-logo .logo {
    display: inline-block;
  }
  .footer-logo .logo > img {
    width: 100%;
    max-height: 70px;
  }
  .footer-social > li {
    display: inline-block;
    margin-right: 15px;
    margin-bottom: 6px;
  }

  .footer-social > li:last-child {
    margin-right: 0px;
  }
  .footer .footer-header {
    margin-bottom: 30px;
    font-size: 18px;
    text-transform: uppercase;
  }

  .list-links li > a {
    color: black;
    position: relative;
    display: inline-block;
    text-transform: uppercase;
    padding: 2px 0px;
    transition: 0.3s all;
    text-decoration: none;
    padding-left: 5px;
  }

  .list-links li > a::before {
    content: "\f105";
    position: absolute;
    left: 0px;
    font-family: FontAwesome;
    transform: translateX(-10px);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s all;
  }

  .list-links li > a:hover,
  .list-links li > a:focus,
  .list-links li.active > a {
    color: #f8694a;
    transform: translateX(10px);
  }

  .list-links li > a:hover::before,
  .list-links li > a:focus::before,
  .list-links li.active > a::before {
    opacity: 1;
    visibility: visible;
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
  .primary-btn {
    color: #fff;
    background-color: #f8694a;
  }

  .primary-btn:hover,
  .primary-btn:focus {
    color: #fff;
    background-color: #30323a;
  }
</style>
