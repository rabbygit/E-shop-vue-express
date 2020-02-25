
<template>
  <div>
    <b-table
      striped
      hover
      sticky-header
      :items="products"
      :fields="fields"
      responsive
      head-variant="light"
    >
      <!-- :busy="isBusy" -->

      <template v-slot:cell(index)="data">{{ data.index+1 }}</template>
      <template v-slot:cell(edit)="data">
        <b-button variant="info outline-light" @click="onEdit(data)">
          <font-awesome-icon size="1x" icon="edit"></font-awesome-icon>
        </b-button>
      </template>
      <template v-slot:cell(delete)="data">
        <b-button @click="onDelete(data)" variant="danger outline-light">
          <font-awesome-icon size="1x" icon="trash-alt"></font-awesome-icon>
        </b-button>
      </template>
      <template v-slot:table-busy>
        <div class="text-center text-danger my-5">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
    <div>
      <b-modal
        @ok="handleOk"
        :static="true"
        id="modal-edit"
        title="Edit the Product"
        size="lg"
        ref="modal"
      >
        <b-container fluid>
          <template v-slot:modal-title>
            <h3 class="d-block text-center">Edit Product</h3>
          </template>
          <form enctype="multipart/form-data" @submit.stop.prevent="handleSubmit">
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
                <div v-if="!url" id="preview-image">
                  <b-img fluid :src="databaseImage"></b-img>
                </div>
                <div v-else id="preview-image">
                  <b-img fluid :src="url" alt="Circle image"></b-img>
                </div>
                <br />
                <input
                  style="display:none"
                  type="file"
                  @change="onFileChange"
                  ref="fileInput"
                  accept=".jpg, .png, .gif"
                  plain
                />
                <b-button variant="dark" @click="$refs.fileInput.click()">Change Image</b-button>
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
            </b-form-row>
          </form>
        </b-container>
      </b-modal>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from "vuex";
  // import "../../modules/Product";

  import imageProvider from "@/mixins/imageProvider";

  export default {
    name: "Products",
    mixins: [imageProvider],
    data() {
      return {
        isBusy: true,
        length: 0,
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
          "JEWELERY",
          "ACCESSORIES",
          "BAGS"
        ],
        _id: "",
        url: null,
        image: null,
        databaseImage: null,
        imageName: "",

        fields: [
          { key: "index", stickyColumn: true },
          { key: "productname", label: "Product Name", stickyColumn: true },
          { key: "brand", stickyColumn: true },
          { key: "price", sortable: true, stickyColumn: true },
          { key: "edit", label: "Edit", stickyColumn: true },
          { key: "delete", label: "Delete", stickyColumn: true }
        ]
      };
    },
    computed: {
      ...mapGetters({
        products: "productArray"
      })
    },
    created() {
      // this.$store.watch(
      //   state => {
      //     return this.products;
      //   },
      //   (newValue, oldValue) => {
      //     if (newValue.length > 0) {
      //       this.isBusy = false;
      //     }
      //   },
      //   {
      //     deep: true
      //   }
      // );
    },
    methods: {
      ...mapActions([
        "getProducts",
        "deleteProduct",
        "updateProduct",
        "updateProductandImage"
      ]),

      onDelete(data) {
        this.deleteProduct(data.item._id, data);
      },

      onEdit(data) {
        (this.productname = data.item.productname),
          (this.details = data.item.details),
          (this.productId = data.item.productId),
          (this.availability = data.item.availability),
          (this.brand = data.item.brand),
          (this.price = data.item.price),
          (this._id = data.item._id),
          (this.imageName = data.item.image),
          (this.databaseImage = this.getDataBasePhoto(data.item.image)),
          (this.image = this.databaseImage);
        console.log("from onEdit image: " + this.image);
        this.$bvModal.show("modal-edit");
      },
      handleOk(bvModalEvt) {
        bvModalEvt.preventDefault();
        this.handleSubmit();
      },
      removeImage() {
        this.url = "";
      },

      onFileChange(e) {
        this.image = e.target.files[0];
        this.url = URL.createObjectURL(this.image);
        this.imageName = "";
        console.log("url : " + this.url);
      },

      handleSubmit(event) {
        if (this.imageName) {
          let product = {
            productname: this.productname,
            productId: this.productId,
            catagory: this.catagory,
            details: this.details,
            availability: this.availability,
            brand: this.brand,
            price: this.price,
            _id: this._id
          };
          this.updateProduct(product).then(response => {
            if (response.data.success) {
              console.log(response.data.updatedProduct);
            } else {
              console.log(response.data.message);
            }
          });
        } else {
          let product = new FormData();
          product.append("productname", this.productname);
          product.append("productId", this.productId);
          product.append("catagory", this.catagory);
          product.append("details", this.details);
          product.append("file", this.image);
          product.append("availability", this.availability);
          product.append("brand", this.brand);
          product.append("price", this.price);
          product.append("_id", this._id);

          for (var pair of product.entries()) {
            console.log(pair[0] + ", " + pair[1]);
          }
          this.updateProductandImage(product).then(response => {
            if (response.data.success) {
              console.log(response.data);
            } else {
              console.log(response.data.message);
            }
          });
        }

        this.$nextTick(() => {
          this.$refs.modal.hide();
        });
      }
    }
  };
</script>

 <!-- Global style -->
<style >
  table.b-table[aria-busy="true"] {
    opacity: 0.6;
  }
  .btn-secondary,
  .btn-secondary:hover,
  .btn-secondary:focus {
    padding: none;
  }
  .img-fluid {
    max-width: 70%;
    width: 207px;
    height: 207px;
  }
</style>

<style scoped>
  #preview-image {
    margin-top: 30px;
  }
</style>