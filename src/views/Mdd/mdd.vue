<template>
  <div>
    <el-col :span="24">
      <SwiperMdd></SwiperMdd>
    </el-col>
    <el-col class="crend-title">
      <h1>热门目的地</h1>
    </el-col>
    <el-col :span="16" :push="4">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick" stretch>
        <el-tab-pane label="国内" name="gn">
          <mddSite></mddSite>
        </el-tab-pane>
        <el-tab-pane label="港澳台" name="gat">
          <mddSite></mddSite>
        </el-tab-pane>
        <el-tab-pane label="日本" name="rb">
          <mddSite></mddSite>
        </el-tab-pane>
        <el-tab-pane label="东南亚" name="dny">
          <mddSite></mddSite>
        </el-tab-pane>
        <el-tab-pane label="南亚 西亚" name="ny_xy">
          <mddSite></mddSite>
        </el-tab-pane>
        <el-tab-pane label="欧洲 美洲" name="oz_mz">
          <mddSite></mddSite>
        </el-tab-pane>
        <el-tab-pane label="澳洲 非洲" name="oz_fz">
          <mddSite></mddSite>
        </el-tab-pane>
      </el-tabs>
    </el-col>

    <el-col class="crend-title">
      <h1>当季推荐</h1>
    </el-col>

    <el-col :span="20" :push="2">
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick2" stretch>
        <el-tab-pane label="1月" name="1">
          <mdd_rec :ImgList="listImg"></mdd_rec>
        </el-tab-pane>
        <el-tab-pane label="2月" name="2">
          <mdd_rec :ImgList="listImg"></mdd_rec>
        </el-tab-pane>
        <el-tab-pane label="3月" name="3">
           <mdd_rec :ImgList="listImg"></mdd_rec>
        </el-tab-pane>
        <el-tab-pane label="4月" name="4">
           <mdd_rec :ImgList="listImg"></mdd_rec>
        </el-tab-pane>
        <el-tab-pane label="5月" name="5">
           <mdd_rec :ImgList="listImg"></mdd_rec>
        </el-tab-pane>
        <el-tab-pane label="6月" name="6">
           <mdd_rec :ImgList="listImg"></mdd_rec>
        </el-tab-pane>
        <el-tab-pane label="7月" name="7">
           <mdd_rec :ImgList="listImg"></mdd_rec>
        </el-tab-pane>
        <el-tab-pane label="8月" name="8">
           <mdd_rec :ImgList="listImg"></mdd_rec>
        </el-tab-pane>
        <el-tab-pane label="9月" name="9">
           <mdd_rec :ImgList="listImg"></mdd_rec>
        </el-tab-pane>
        <el-tab-pane label="10月" name="10">
           <mdd_rec :ImgList="listImg"></mdd_rec>
        </el-tab-pane>
        <el-tab-pane label="11月" name="11">
           <mdd_rec :ImgList="listImg"></mdd_rec>
        </el-tab-pane>
        <el-tab-pane label="12月" name="12">
          <mdd_rec :ImgList="listImg"></mdd_rec>
        </el-tab-pane>
      </el-tabs>
    </el-col>

    <el-col class="crend-title">
      <h1>主题精选</h1>
    </el-col>
    <el-col :span="20" :push="2">
      <el-tabs v-model="activeName3" type="card" @tab-click="handleClick3" stretch>
        <el-tab-pane label="全年适宜" name="allyear">
          <mdd_ztImgs :ImgList="ztImgList"></mdd_ztImgs>
        </el-tab-pane>
        <el-tab-pane label="季节" name="season">
          <mdd_ztImgs :ImgList="ztImgList"></mdd_ztImgs>
        </el-tab-pane>
        <el-tab-pane label="出行方式" name="goout">
          <mdd_ztImgs :ImgList="ztImgList"></mdd_ztImgs>
        </el-tab-pane>
        <el-tab-pane label="节假日" name="recess">
          <mdd_ztImgs :ImgList="ztImgList"></mdd_ztImgs>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </div>
</template>
<script>
  import SwiperMdd from "components/Swiper/swiperImg.vue";
  import mddSite from "components/mdd/mdd_site.vue";
  import mddView from "components/mdd/mdd_view.vue";
  import { mdd_month,mdd_ztImg } from "network/home-net.js";
  import mdd_rec from "components/mdd/mdd_recommend.vue";
  import mdd_ztImgs from "components/mdd/mdd_ztImg.vue"
  export default {
    data() {
      return {
        activeName: 'gn',
        activeName2: '1',
        activeName3: 'allyear',
        listImg: {},
        ztImgList:{}
      };
    },
    created() {
      mdd_month(1).then(res => {
        this.listImg = res.data
      }),
      mdd_ztImg(2).then(res=>{
        console.log("主题图片",res.data);
        this.ztImgList = res.data
      })
    },
    components: {
      SwiperMdd,
      mddSite,
      mddView,
      mdd_rec,
      mdd_ztImgs
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleClick2(tab, event) {
        console.log(tab.name, event);
        mdd_month(tab.name).then(res => {
          console.log(res.data);
          this.listImg = res.data
        })
      },
      handleClick3(tab, event) {
        console.log(tab, event);
      },
    },
  };
</script>
<style>
  .crend-title {
    text-align: center;
  }
</style>