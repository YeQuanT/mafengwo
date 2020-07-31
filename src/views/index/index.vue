<template>
  <div>
    <el-row id="main-img" class="br">
      <el-col :span="24">
        <swiper ref="mySwiper" :options="swiperOptions">
          <!-- <swiper-slide class="swiper-slide" v-for="item in swiperList" :key="item.id">
            <img :src="item.imgURL" />
          </swiper-slide> -->
          <swiper-slide class="swiper-slide">
            <img id="main-img-swiper" src="~assets/images/CoUBUl8e4k2AHvhbABg-iMCUPH8743.png" />
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img id="main-img-swiper" src="~assets/images/CoUBUl8a9vSAVnW-ADJ1L1ml2eY199.png" />
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <img id="main-img-swiper" src="~assets/images/CoUBUl8cKNaAPP2rACuWtSfuIBA778.png" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </el-col>
    </el-row>
    <!-- main -->
    <el-main>
      <el-row>
        <el-col id="main-col" :span="20" pull=2 push=2 class="br">
          <el-row>
            <el-col id="main-nav" :span="24">
              <mainNav></mainNav>
            </el-col>
          </el-row>
          <el-col id="main-left" :span="8" class="br">
            <mainLeft></mainLeft>
          </el-col>
          <el-col id="main-rigth" :span="15" push=1 class="br">
            <mainRight></mainRight>
          </el-col>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>
<script>
import mainLeft from "components/main-body/main-left.vue";
import mainRight from "components/main-body/main-right.vue";
import mainNav from "components/nav/main-nav.vue";
export default {
  data() {
    return {
      swiperOptions: {
        notNextTick: true,
        loop: true,
        initialSlide: 0,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }
      },
      swiperList:[
        {id:"01",imgURL:'~assets/images/CoUBUl8a9vSAVnW-ADJ1L1ml2eY199.png'},
        {id:"02",imgURL:'~assets/images/CoUBUl8cKNaAPP2rACuWtSfuIBA778.png'}
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    mounted() {
      console.log("Current Swiper instance object", this.swiper);
      this.swiper.slideTo(3, 1000, true);
    },
  },
  components: {
    mainLeft,
    mainRight,
    mainNav,
  },
};
</script>
<style>
#main-img-swiper {
  height: 450px;
}
</style>