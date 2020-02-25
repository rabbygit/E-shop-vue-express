<template>
  <div>
    <Navbar :navbarproduct="false"></Navbar>

    <div class="row container-fluid">
      <div class="col-md-3 float-md-left">
        <Catagory></Catagory>
      </div>
      <div class="col-md-9 float-md-right">
        <div class="container-fluid">
          <div class="row isotope_l_p_inner">
            <ProductCard :Products="products" />
          </div>
          <nav aria-label="Page navigation example" class="pagination_area">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">4</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">5</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">6</a>
              </li>
              <li class="page-item next">
                <a class="page-link" href="#">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Catagory from "@/components/Catagory.vue";
  import ButtonSlot from "@/components/ButtonSlot.vue";
  import Footer from "@/components/Footer.vue";
  import Navbar from "@/components/Navbar.vue";
  import ProductCard from "@/components/ProductCard.vue";

  import { mapGetters, mapActions } from "vuex";

  export default {
    components: {
      Catagory,
      Footer,
      Navbar,
      ButtonSlot,
      ProductCard
    },
    props: {
      productType: String
    },
    data() {
      return {
        products: []
      };
    },
    computed: {
      ...mapGetters(["productArray"])
    },
    created() {
      this.products = this.productArray.filter(product => {
        return product.catagories == this.productType;
      });
    }
  };
</script>

<style scoped>
  .l_product_item {
    border: 1px solid #cccccc;
    margin-bottom: 30px;
  }
  .l_product_item .l_p_img {
    position: relative;
  }
  .l_product_item .l_p_img img {
    max-width: 100%;
  }
  .l_product_item .l_p_text {
    text-align: center;
    height: 80px;
    border: 1px solid #cccccc;
    overflow: hidden;
  }
  .l_product_item .l_p_text ul {
    margin-top: -65px;
    margin-bottom: 5px;
    padding-top: 18px;
    transition: all 300ms ease-out;
  }
  .l_product_item .l_p_text ul li {
    display: inline-block;
    margin-right: 8px;
  }
  .l_product_item .l_p_text ul li.p_icon {
    vertical-align: top;
  }
  .l_product_item .l_p_text ul li.p_icon a {
    border: 1px solid #999999;
    font-size: 17px;
    color: #999999;
    display: inline-block;
    margin-top: 10px;
    padding: 0px 10px;
    line-height: 38px;
    position: relative;
    top: 1px;
    transition: all 400ms linear 0s;
  }
  .l_product_item .l_p_text ul li.p_icon a:hover {
    color: #000;
  }
  .l_product_item .l_p_text ul li:last-child {
    margin-right: 0px;
  }

  .l_product_item .l_p_text h4 {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: #000;
    padding-bottom: 5px;
    padding-top: 35px;
    -webkit-transition: all 400ms linear 0s;
    -o-transition: all 400ms linear 0s;
    transition: all 400ms linear 0s;
  }

  .l_product_item .l_p_text h5 {
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: #d91522;
    -webkit-transition: all 400ms linear 0s;
    -o-transition: all 400ms linear 0s;
    transition: all 400ms linear 0s;
  }

  .l_product_item .l_p_text h5 del {
    font-size: 16px;
    color: #666666;
  }

  .l_product_item:hover .l_p_text ul {
    margin-top: 0px;
  }

  .l_product_item:hover .l_p_text h4 {
    opacity: 0;
  }

  .l_product_item:hover .l_p_text h5 {
    opacity: 0;
  }

  .pagination_area {
    text-align: center;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .pagination_area .pagination {
    display: inline-block;
    border-radius: 0px;
  }

  .pagination_area .pagination li {
    display: inline-block;
  }

  .pagination_area .pagination li a {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: #333333;
    border-radius: 0px !important;
    padding: 10px 15px;
    border: 1px solid transparent;
    transition: all 400ms linear 0s;
  }

  .pagination_area .pagination li:first-child a {
    border: 1px solid #000002;
  }

  .pagination_area .pagination li.next a {
    background: #333333;
    color: #fff;
  }

  .pagination_area .pagination li:hover a {
    background: #333333;
    color: #fff;
  }
</style>
