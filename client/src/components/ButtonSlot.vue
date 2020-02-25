<template>
  <button @click="btnClickHandler" :class="customestyle">
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      customestyle: {
        type: String,
        required: true
      },
      btnClickHandler: {
        type: Function,
        default: () => 0
      }
    }
  };
</script>
    
<style scoped>
  .quick-view {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    visibility: hidden;
    z-index: 20;
    transform: translate(-50%, -50%);
    transition: all 400ms linear 0s;
    background-color: orangered;
    border: none;
  }
  .l_p_img:hover .quick-view {
    opacity: 1;
    visibility: visible;
  }
  .product.product-single:hover .quick-view {
    opacity: 1;
    visibility: visible;
  }
  .primary-btn {
    display: inline-block;
    padding: 10px 15px;
    text-transform: uppercase;
    font-weight: 700;
    border: none;
    transition: 0.3s all;
    color: #fff;
    background-color: #f8694a;
  }
  .primary-btn:hover,
  .primary-btn:focus {
    color: #fff;
    background-color: #30323a;
  }
</style>