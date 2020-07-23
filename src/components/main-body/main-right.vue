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
      <el-col :span="4" push=12 class="wrire-yj">写游记</el-col>
    </el-menu>

    <el-row>
      <el-col :span="8" class="br"><img src="#" alt="" srcset=""></el-col>
      <el-col :span="15" class="br main-right-col" push=1>
          <div class="main-right-title br">title</div>
          <div class="main-right-text br">文章</div>
          <div class="main-right-time br">
            <ElCol :span="1"><i class="el-icon-map-location"></i></ElCol>
            <ElCol :span="1"><i class="el-icon-view"></i></ElCol>
            <ElCol :span="1" push=20 class="main-right-time-d"><span class="main-right-d">顶</span></ElCol>
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
    };
  },
  created() {
      main_right().then(res=>{
          console.log(res)
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