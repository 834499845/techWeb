<template>
  <div class="homeApp">
    <header class="header">
      <div class="header-left">

      </div>
      <div class="header-right">
        <ul>
          <li @click="liCLick(1)">
            1
          </li>
          <li @click="liCLick(2)">
            2
          </li>
          <li @click="liCLick(3)">
            3
          </li>
          <li @click="liCLick(4)">
            4
          </li>
          <li @click="liCLick(5)">
            5
          </li>
          <li @click="liCLick(6)">
            6
          </li>
        </ul>
      </div>
    </header>
    <main>
      <div id="swiper1" class="mainLi swiper-container">
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
      <div id="swiper2" class="mainLi swiper-container">
        <div class="swiper-wrapper swiper-wrapper2">
          <div class="swiper-slide swiper-slide2 swiper-slide21">
            伯通项目
          </div>
          <div class="swiper-slide swiper-slide2 swiper-slide22">
            伯图项目
          </div>
        </div>
      </div>
      <div id="swiper3" class="mainLi">

      </div>
      <div id="swiper4" class="mainLi">

      </div>
      <div id="swiper5" class="mainLi">

      </div>
      <div id="swiper6" class="mainLi">

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
      loop: false
    });
    var swiper2 = new Swiper("#swiper2", {
      loop: false,
      fadeEffect: {
        crossFade: true
      },
      mousewheel: false
    });
  },
  created: function() {},
  methods: {
    liCLick(index) {
      $(window).off("scroll");
      var top =
        $(".mainLi")
          .eq(index - 1)
          .offset().top - 60;
      $("body,html").animate({ scrollTop: top }, 500);
    }
  }
};
</script>
<style scoped>
#swiper6 {
  height: 970px;
  width: 100%;
  background-color: #ccc;
}
#swiper5 {
  height: 970px;
  width: 100%;
  background-color: yellowgreen;
}
#swiper4 {
  height: 970px;
  width: 100%;
  background-color: goldenrod;
}
#swiper3 {
  height: 570px;
  width: 100%;
  background-color: #333;
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
  height: 60px;
  line-height: 20px;
  border: 1px solid red;
}

.header-right li {
  width: 50px;
  height: 30px;
  border: 1px solid red;
  line-height: 30px;
  margin-left: 15px;
  margin-top: 8px;
  overflow: hidden;
  text-align: right;
  color: #333;
  font-size: 16px;
}
@media screen and (max-width: 768px) {
  .header-right {
    display: none;
  }
}
.header-right ul {
  display: flex;
}
.header-right {
  width: 70%;
  min-width: 528px;
  height: 60px;

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