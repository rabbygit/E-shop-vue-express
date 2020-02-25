<template>
  <div>
    <b-navbar variant="dark" type="dark" id="sidebar" :class="{ sidebarOpen : open }">
      <b-navbar-nav class="element">
        <b-nav-item href="#" class="item menu-title">
          <h6>Dashboard</h6>
        </b-nav-item>

        <!-- Navbar dropdowns -->

        <b-nav-item-dropdown class="menu-title" text="Product Management">
          <b-dropdown-item to="/dashboard/products">Products</b-dropdown-item>
          <b-dropdown-item to="/dashboard/addproduct">Add Product</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="User">
          <b-link to="/dashboard/account">Account</b-link>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    props: {
      open: {
        type: Boolean
      }
    }
  };
</script>

<style>
  /* global style for BootstrapVue */
  a,
  a:hover {
    color: white;
    text-decoration: none;
  }
  .navbar-expand .navbar-nav .dropdown-menu {
    position: relative;
    background-color: #343a40;
    border: none;
  }
  #sidebar .dropdown-item {
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #9496a1;
    text-align: inherit;
    white-space: nowrap;
    background-color: #343a40;
    border: 0;
  }
  .dropdown-menu {
    background-color: #272c33;
    text-align: center;
  }
  .navbar {
    align-items: flex-start;
    width: 300px;
    height: 100vh;
    min-height: 100%;
    position: fixed;
    background: #272c33;
    display: table-cell;
    vertical-align: top;
    transition: width 2s cubic-bezier(0.6, 0, 0, 1);
    transform: translate(-1000px, 0);
  }

  .sidebarOpen {
    transform: translate(0, 0);
  }
</style>


<style scoped>
  .menu-title {
    font-size: 14px;
    margin: 0%;
    border-bottom: 1px solid #4e4e52;
    color: #9496a1;
    clear: both;
    font-weight: 700px;
    line-height: 50px;
    padding: 15px 0px;
    text-transform: uppercase;
    width: 100%;
  }

  #sidebar .navbar-nav {
    display: block;
    padding: 40px;
    margin: 0px 0px 100px;
    padding: 0px;
  }
  #sidebar .element .item {
    margin: 0%;
  }
  .dropdown-menu .show {
    display: block;
  }
</style>

