// 工作台
<template>
  <div class="homeApp">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div> -->
      <!-- <div class="swiper-button-next"></div> -->

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
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
      new Swiper(".swiper-container", {
        loop: false,
        direction: "vertical",
        forceToAxis: true,
        mousewheel: true,
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // }
      });
    },
    created: function () { },
    methods: {
      ...mapActions([])
    }
  };
</script>
<style scoped>
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100% !important;
    color: #000;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
    /* margin: 20px auto; */
  }

  .homeApp {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>