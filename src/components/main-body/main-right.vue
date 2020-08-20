<template>
  <div>
    <el-menu
      :active-text-color="activeColor"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">热门游记</el-menu-item>
      <el-menu-item index="2">最新发表</el-menu-item>
      <el-col :span="4" :push="12" class="wrire-yj">写游记</el-col>
    </el-menu>

    <el-row id="main-right-item" v-for="item in list">
      <el-col :span="8" class=""><img id="main_right-img" :src="item.img" alt="" srcset="" /></el-col>
      <el-col :span="15" class="main-right-col" :push="1">
          <div class="main-right-title">{{item.title}}</div>
          <div class="main-right-text">{{item.content}}</div>
          <div class="main-right-time">
            <ElCol :span="13" class="main-right-item-time"><i class="el-icon-map-location"></i>&nbsp;{{item.region}}
              <img id="main-right-item-icon" :src="item.icon" alt="" srcset="">
              <span class="name pd05">大浪汪洋</span>
              <i class="el-icon-view pd05"></i>
              <span class="view pd05">{{item.browse}}/{{item.click}}</span>
            </ElCol>
            <ElCol :span="1" :push=7 class="main-right-time-d"><span class="main-right-d">顶</span></ElCol>
          </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {main_right} from 'network/home-net.js'
export default {
  data() {
    return {
      activeIndex: "1",
      activeColor: "#ffb500",
      list:{}
    };
  },
  created() {
      main_right().then(res=>{
          console.log("right",res.data)
          this.list = res.data.data
          console.log(res.data.data.img);
      })
  },
  methods: {
    handleSelect(index) {
      console.log(index);
    },
  },
};
</script>
<style>
@import url("~assets/CSS/main-right.css");
</style>