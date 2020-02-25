<template>
  <div>
    <div class="advanced_search_area">
      <div class="input-group">
        <input
          class="form-control text-monospace"
          type="text"
          placeholder="Search a product"
          aria-label="Search"
          v-model="search"
          v-on:keyup="getfilteredData"
          @keyup.enter="onClick"
        />
      </div>
      <span class="input-group-btn">
        <button @click="onClick" class="search-btn">
          <font-awesome-icon size="3x" icon="search"></font-awesome-icon>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "Search",
    data() {
      return {
        search: "",
        searchResultArray: []
      };
    },
    computed: {
      ...mapGetters({
        products: "productArray"
      })
    },
    methods: {
      onClick() {
        this.$router.push({
          name: "SearchResult",
          query: { ResultArray: this.searchResultArray }
        });
      },
      getfilteredData() {
        this.searchResultArray = this.products.filter(product => {
          return product.productname
            .toLowerCase()
            .includes(this.search.toLowerCase());
        });
      }
    }
  };
</script>

<style scoped>
  .advanced_search_area {
    border: 1px solid #e5e5e5;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
  }
  .advanced_search_area .input-group {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .advanced_search_area .input-group input {
    border: none;
    padding: 0px 0px 0px 40px;
    outline: none;
    box-shadow: none;
    height: 58px;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    color: #666666;
    letter-spacing: 0.35px;
  }

  .advanced_search_area .input-group input.placeholder {
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    color: #666666;
    letter-spacing: 0.35px;
  }
  .advanced_search_area .input-group .input-group-btn .btn-secondary {
    background: #d91522;
    border-radius: 0px;
    outline: none !important;
    box-shadow: none !important;
    border: none;
    font-size: 15px;
    color: #fff;
    padding: 0px;
    width: 66px;
    margin: 0px;
    cursor: pointer;
  }
  .search-btn,
  .search-btn:active,
  .search-btn:focus {
    background-color: transparent;
    outline: none;
    border: none;
    margin: 5px 0px 0px 150px;
  }
</style>