
<template>
  <div>
    <b-container fluid>
      <b-alert
        v-if="showsuccess"
        :show="dismissCountDown"
        dismissible
        fade
        variant="success"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >{{ message }}</b-alert>
      <b-form @submit="onSubmit" enctype="multipart/form-data" v-if="show">
        <b-form-row>
          <b-col cols="6">
            <b-form-group id="input-group-1" label="Product Name:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="productname"
                type="text"
                required
                placeholder="Enter Product Name"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group id="input-group-2" label="Catagories:" label-for="input-3">
              <b-form-select id="input-2" v-model="catagory" :options="catagories" required></b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group id="input-group-4" label="Product Details:" label-for="input-2">
              <b-form-textarea
                id="textarea"
                v-model="details"
                placeholder="Enter something..."
                rows="8"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <div v-if="!url" class="dropbox">
              <b-form-file
                v-model="image"
                @change="onFileChange"
                accept=".jpg, .png, .gif"
                class="input-form"
                plain
              ></b-form-file>
              <p>
                Drag your file(s) here to begin
                <br />or click to browse
              </p>
            </div>
            <div v-else id="preview-image">
              <b-img fluid :src="url" alt="Circle image"></b-img>
              <b-button variant="dark" @click="removeImage">Remove image</b-button>
            </div>
          </b-col>
          <b-col cols="6">
            <b-form-group id="input-group-3" label="Product Id:" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="productId"
                type="text"
                required
                placeholder="Enter Product Id"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group id="input-group-5" label="Availability status:" label-for="input-4">
              <b-form-input
                id="input-5"
                v-model="availability"
                type="text"
                required
                placeholder="Enter availability status"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group id="input-group-6" label="Brand Name:" label-for="input-6">
              <b-form-input
                id="input-6"
                v-model="brand"
                type="text"
                required
                placeholder="Enter Brand name"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group id="input-group-7" label="Price:" label-for="input-7">
              <b-form-input
                id="input-7"
                v-model="price"
                type="number"
                required
                placeholder="Enter product price"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-button type="submit" variant="primary" class="submit-btn">Add Product</b-button>
          </b-col>
        </b-form-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: "AddProduct",
    data() {
      return {
        productname: "",
        details: "",
        catagory: null,
        productId: 0,
        availability: "",
        brand: "",
        price: 0,
        catagories: [
          { text: "Select One", value: null },
          "MEN",
          "WOMEN",
          "BABY",
          "GLASS",
          "ACCESSORIES",
          "WATCH",
          "SHOE",
          "BAGS"
        ],
        show: true,
        url: null,
        mainProps: { width: 100, height: 100, class: "m1" },
        image: null,

        dismissSecs: 3,
        dismissCountDown: 0,
        message: "A product is added",
        showsuccess: false
      };
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown;
      },
      onFileChange(e) {
        this.image = e.target.files[0];
        this.url = URL.createObjectURL(this.image);
      },
      removeImage() {
        this.url = "";
      },
      ...mapActions(["addProduct"]),
      onSubmit(event) {
        event.preventDefault();
        let product = new FormData();
        product.append("productname", this.productname);
        product.append("productId", this.productId);
        product.append("catagory", this.catagory);
        product.append("details", this.details);
        product.append("file", this.image);
        product.append("availability", this.availability);
        product.append("brand", this.brand);
        product.append("price", this.price);

        this.addProduct(product).then(response => {
          if (response.data.success) {
            this.showsuccess = true;
            this.dismissCountDown = this.dismissSecs;
            this.onReset();
          }
        });
      },
      onReset(evt) {
        // Reset our form values
        this.productname = "";
        this.details = "";
        (this.catagory = null),
          (this.image = null),
          (this.availability = ""),
          (this.brand = ""),
          (this.price = 0),
          (this.url = null),
          // Trick to reset/clear native browser form validation state
          (this.show = false);
        this.$nextTick(() => {
          this.show = true;
        });
      }
    }
  };
</script>
<style>
  .img-fluid {
    max-width: 70%;
    width: 207px;
    height: 207px;
  }
</style>

<style scoped>
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 208px; /* minimum height */
    height: 0px;
    margin-top: 30px;
    position: relative;
    cursor: pointer;
  }
  .input-form {
    opacity: 0;
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }
  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 65px 73px;
    color: black;
  }
  #preview-image {
    margin-top: 30px;
  }
  button.btn.submit-btn.btn-primary {
    margin-top: 33px;
    margin-left: 36px;
    width: 86%;
  }
</style>