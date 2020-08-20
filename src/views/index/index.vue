<template>
  <div>
    <el-row id="main-img">
      <el-col :span="24">
        <SwiperMain></SwiperMain>
      </el-col>
    </el-row>
    <!-- main -->
    <el-main>
      <el-row>
        <el-col id="main-col" :span="20" :pull=2 :push=2>
          <el-row>
            <el-col id="main-nav" :span="24">
              <mainNav></mainNav>
            </el-col>
          </el-row>
          <el-col id="main-left" :span="8">
            <mainLeft></mainLeft>
          </el-col>
          <el-col id="main-rigth" :span="15" :push=1>
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
import SwiperMain from "components/Swiper/swiperImg.vue"
export default {
  data() {
    return {

    };
  },
  computed: {

  },
  components: {
    mainLeft,
    mainRight,
    mainNav,
    SwiperMain
  },
};
</script>
<style>
#main-img-swiper {
  height: 450px;
}
</style>