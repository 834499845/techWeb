<template>
  <div class="homeApp">
    <header class="header">
      <div class="header-left">

      </div>
      <div class="header-right">

      </div>
    </header>
    <div class="clear">

    </div>
    <main>
      <div id="swiper1" class="swiper-container">
        <div class="swiper-wrapper swiper-wrapper1">
          <div class="swiper-slide swiper-slide1">
            <img src="/static/img/banne1r.png" alt="">
          </div>
          <div class="swiper-slide swiper-slide1">
            <img src="/static/img/banner05.png" alt="">
          </div>
          <div class="swiper-slide swiper-slide1">
            <img src="/static/img/banner_2_2.png" alt="">
          </div>
        </div>
      </div>
      <div id="swiper2" class="swiper-container">
        <div class="swiper-wrapper swiper-wrapper2">
          <div class="swiper-slide swiper-slide2 swiper-slide21">
            伯通项目
          </div>
          <div class="swiper-slide swiper-slide2 swiper-slide22">
            伯图项目
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
  import { mapActions } from "vuex";
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css";
  export default {
    data() {
      return {};
    },
    filters: {},
    mounted() {
      var swiper1 = new Swiper("#swiper1", {
        autoplay: true,
        loop: false,

      });
      var swiper2 = new Swiper("#swiper2", {
        loop: false,
        fadeEffect: {
          crossFade: true
        },
        mousewheel: false
      });
    },
    created: function () { },
    methods: {
      ...mapActions([])
    }
  };
</script>
<style scoped>
  .clear {
    clear: both;
  }

  .swiper-slide2 {
    height: 500px;
    width: 100%;
    line-height: 500px;
    text-align: center;
    font-size: 25px;
  }

  .swiper-slide21 {
    background-color: aquamarine;
  }

  .swiper-slide22 {
    background-color: burlywood;
  }

  #swiper2 {
    width: 100%;
    height: 500px;
  }

  main {
    min-height: 1240px;
  }

  .header-left {
    width: 30%;
    margin-left: 10%;
    height: 60px;
    line-height: 20px;
    border: 1px solid red;
    float: left;
  }

  .header-right {
    color: #333;
    float: right;
    width: 40%;
    min-width: 528px;
    margin-right: 10%;
    height: 60px;
    line-height: 60px;
    text-align: right;
    border: 1px solid red;
  }

  header {
    position: fixed;
    width: 100%;
    height: 60px;
    background: rgba(255, 255, 255, 0.8);
    color: #333;
    z-index: 10000;
    display: flex;
  }

  .swiper-slide1 {
    color: #000;
    width: 100%;
  }

  .swiper-slide1 img {
    width: 100%;
  }

  .swiper-container {
    width: 100%;
  }

  #swiper1 {
    width: 100%;
    height: auto;
  }

  .homeApp {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>