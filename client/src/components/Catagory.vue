<template>
  <div>
    <div class="left_sidebar_area">
      <aside class="l_widget l_categories_widget">
        <div class="l_title">
          <h3>categories</h3>
        </div>
        <ul>
          <li>
            <router-link
              class="nav-link"
              :to="{ name: 'products', params: {productType: 'MEN' } }"
            >Men</router-link>
          </li>
          <li>
            <router-link
              class="nav-link"
              :to="{ name: 'products', params: {productType: 'WOMEN' } }"
            >women</router-link>
          </li>
          <li>
            <router-link
              class="nav-link"
              :to="{ name: 'products', params: {productType: 'BABY' } }"
            >baby</router-link>
          </li>
          <li>
            <router-link
              class="nav-link"
              :to="{ name: 'products', params: {productType: 'ACCESSORIES' } }"
            >accessories</router-link>
          </li>
          <li>
            <router-link
              class="nav-link"
              :to="{ name: 'products', params: {productType: 'SHOE' } }"
            >shoe</router-link>
          </li>
          <li>
            <router-link
              class="nav-link"
              :to="{ name: 'products', params: {productType: 'WATCH' } }"
            >watch</router-link>
          </li>
          <li>
            <router-link
              class="nav-link"
              :to="{ name: 'products', params: {productType: 'GLASS' } }"
            >glass</router-link>
          </li>
          <li>
            <router-link
              class="nav-link"
              :to="{ name: 'products', params: {productType: 'BAGS' } }"
            >bag</router-link>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Catagory"
  };
</script>

<style scoped>
  .left_sidebar_area {
    cursor: pointer;
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
  .l_widget {
    margin-bottom: 20px;
  }
  .l_widget:last-child {
    margin-bottom: 0px;
  }
  .l_categories_widget ul {
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
  }
  .l_categories_widget ul li a {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: normal;
    color: #000000;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    border-bottom: 1px solid #cccccc;
    display: block;
    padding: 20px 0px 20px 25px;
    transition: all 400ms linear 0s;
  }
  .l_categories_widget ul li:hover a {
    color: #d91522;
  }
  .l_title {
    background-color: #d91522;
    padding: 20px 0px 20px 30px;
  }
  .l_title h3 {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 0.4px;
  }
</style>
