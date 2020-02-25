<template>
  <div id="header">
    <header id="header" class="header">
      <b-row class="header-row" no-gutters>
        <b-col cols="8">
          <b-button @click="togglesidebar" variant="outline-light">
            <font-awesome-icon size="2x" style="{color : 'black' }" icon="bars"></font-awesome-icon>
          </b-button>

          <div class="header-left">
            <b-button class="search-trigger" @click="toggleHeader" variant="outline-light">
              <font-awesome-icon size="2x" icon="search"></font-awesome-icon>
            </b-button>
            <div
              class="form-inline"
              :class=" { close: !headerOpen , open : headerOpen , narrow : sidebarOpen} "
            >
              <b-form class="search-form" v-on:submit.prevent>
                <b-form-input placeholder="Search....."></b-form-input>
                <b-button
                  variant="outline-light"
                  @click="toggleHeaderClose"
                  :class="sidebarOpen? 'narrowbtn' : 'widebtn' "
                >
                  <font-awesome-icon size="2x" icon="times"></font-awesome-icon>
                </b-button>
              </b-form>
            </div>

            <div>
              <b-dropdown variant="outline-light" toggle-class="text-decoration-none" no-caret>
                <template slot="button-content">
                  <font-awesome-icon size="2x" icon="bell"></font-awesome-icon>
                  <span class="count bg-danger">5</span>
                </template>
                <b-dropdown-text>You have 4 notifications.</b-dropdown-text>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>

            <div>
              <b-dropdown variant="outline-light" toggle-class="text-decoration-none" no-caret>
                <template slot="button-content">
                  <font-awesome-icon size="2x" icon="envelope"></font-awesome-icon>
                  <span class="count bg-primary">5</span>
                </template>
                <b-dropdown-text>You have 4 notifications.</b-dropdown-text>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </b-col>

        <b-col cols="4">
          <div :class="{ rightdd1 : sidebarOpen , rightdd : !sidebarOpen }">
            <b-dropdown
              offset="-70"
              text="Offset Dropdown"
              size="lg"
              variant="outline-light"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template slot="button-content">
                <div>
                  <b-img
                    rounded="circle"
                    v-bind="mainProps"
                    src="../../assets/images/admin.jpg"
                    alt="Circle image"
                  ></b-img>
                </div>
              </template>
              <b-dropdown-item href="#">Action</b-dropdown-item>
              <b-dropdown-item href="#">Another action</b-dropdown-item>
              <b-dropdown-item href="#">Something else here...</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-col>
      </b-row>
    </header>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sidebarOpen: true,
        headerOpen: false,
        mainProps: { width: 45, height: 45, class: "m1" }
      };
    },
    methods: {
      togglesidebar() {
        this.sidebarOpen = !this.sidebarOpen;
        this.$emit("sidebarOpen", this.sidebarOpen);
      },
      toggleHeader() {
        this.headerOpen = !this.headerOpen;
      },
      toggleHeaderClose() {
        this.headerOpen = false;
        console.log("clicked");
      }
    }
  };
</script>

<style>
  .col {
    display: contents;
  }
  .marginclass {
    margin-left: 300px;
  }
  .container-fluid {
    padding-left: 15px;
  }
  .btn-secondary,
  .btn-secondary:hover,
  .btn-secondary:focus {
    color: black;
    background-color: white;
    border: 0px solid white;

    border-radius: 0%;
    padding: 0%;
  }
  .btn,
  .btn:active,
  .btn:focus,
  .btn-hover {
    border: 0px solid white;
    border-radius: 0%;
    padding-left: 15px;
    outline: none;
  }
  .btn-outline-light,
  .btn-outline-light:hover,
  .btn-outline-light:focus,
  .btn-outline-light:active,
  .btn-outline-light:not(:disabled):not(.disabled):active,
  .btn-outline-light:not(:disabled):not(.disabled):active:focus,
  .show > .btn-outline-light.dropdown-toggle {
    color: black;
    background-color: white;
    outline: none;
    box-shadow: none;
  }
  .header .dropdown-menu {
    background: slategrey;
    text-align: left;
  }
</style>

<style scoped>
  #dashboard .header {
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    padding: 15px 20px 13px;
    display: inline-block;
    width: 100%;
    clear: both;
  }

  .header .form-control,
  .header .form-control:focus {
    background-color: #263238;
    box-shadow: none;
    webkit-box-shadow: none;
    border: none;
    color: white;
    padding-left: 100px;
    padding-top: 37px;
    padding-bottom: 20px;
    width: 80%;
  }
  .form-inline {
    background: #263238;
    height: 79px;
    margin: 0%;
    left: -3%;
    width: 156%;
    top: -9%;
    z-index: 9999;
    position: absolute;
  }
  .open {
    display: block;
  }
  .close {
    display: none;
  }
  .narrow {
    width: 157%;
  }
  .form-inline button,
  .form-inline button:focus {
    color: whitesmoke;
    background: transparent;
    position: absolute;
    top: 40%;
    margin-top: -14px !important;
  }
  .form-inline .narrowbtn {
    left: 887px;
  }
  .widebtn {
    left: 1160px;
  }
  .header .header-left {
    display: inline-flex;
    vertical-align: middle;
  }
  .header .header-left .dropdown-menu .btn-group {
    outline: none;
  }
  .header-left .dropdown .dropdown-toggle .count {
    border-radius: 50%;
    position: absolute;
    top: 0%;
    right: 0%;
    width: 15px;
    height: 15px;
    line-height: 15px;
    font-size: 11px;
    color: #fff;
  }
  .rightdd {
    padding-left: 300px;
  }
  .rightdd1 {
    padding-left: 203px;
  }
</style>