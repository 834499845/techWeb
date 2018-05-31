// 工作台
<template>
  <div class="homeApp">
    <div class="swiper-pageFister">
              <li v-for="item in lists" :key="item">
          <!-- <div class="swiperBg" :style="{'background-image': 'url('+ item +')'}">
          </div> -->
          <img :src="item" alt="">
        </li>
      <!-- <el-carousel>
        <el-carousel-item v-for="item in lists" :key="item">
        
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel> -->
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      lists: [
        "/static/img/banne1r.png",
        "/static/img/banner05.png",
        "/static/img/banner_2_2.png"
      ]
    };
  },
  filters: {},
  mounted() {},
  created: function() {},
  methods: {
    ...mapActions([])
  }
};
</script>
<style scoped>
img {
  width: 100%;
}

.swiper-pageFister {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.homeApp {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>