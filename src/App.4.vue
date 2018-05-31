<template>
  <div class="homeApp">
    <header>
      <div class="header-left">

      </div>
      <div class="header-right">

      </div>
    </header>
    <main>

    </main>
  </div>
</template>
<script>
  import { mapActions } from "vuex";
  export default {
    data() {
      return {};
    },
    filters: {},
    mounted() { },
    created: function () { },
    methods: {
      ...mapActions([])
    }
  };
</script>
<style scoped>
  .container {
    width: 100%;
    margin: 0 auto;
    height: 60px;
    background-color: red;
  }

  /*媒体查询：注意and后面空格的添加*/

  /*iphone: w < 768px*/

  @media screen and (max-width: 768px) {
    .container {
      width: 100%;
      background-color: green;
    }
  }

  /*pad: w >= 768  && w< 992*/

  @media screen and (max-width: 992px) and (min-width: 768px) {
    .container {
      width: 100%;
      background-color: blue;
    }
  }

  /*中等屏幕   w >= 992  && w<1200*/

  @media screen and (max-width: 1200px) and (min-width: 992px) {
    .container {
      width: 100%;
      background-color: pink;
    }
  }

  .header-left {
    border: 1px solid red;
    width: 30%;
    height: 60px;
  }

  .header-right {
    border: 1px solid red;
    width: 70%;
    height: 60px;
  }

  header {
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    background: rgba(255, 255, 255, 0.8);
    color: #333;
    z-index: 10000;
    border: 1px solid red;
  }

  .homeApp {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>