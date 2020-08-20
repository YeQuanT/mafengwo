<template>
  <div>
    <el-menu
      :active-text-color="text_color"
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="mdd">目的地</el-menu-item>
      <el-menu-item index="gonglve">旅游攻略</el-menu-item>
      <el-submenu index="4">
        <template slot="title">去旅行</template>
        <el-menu-item index="/sales">自由行</el-menu-item>
        <el-menu-item index="4-2">跟团游</el-menu-item>
        <el-menu-item index="4-3">当地游</el-menu-item>
      </el-submenu>
      <el-menu-item index="flight">机票火车票</el-menu-item>
      <el-menu-item index="hotel">订酒店</el-menu-item>
      <el-submenu index="7">
        <template slot="title">社区</template>
        <el-menu-item index="wenda">问答</el-menu-item>
        <el-menu-item index="7-2">选项2</el-menu-item>
        <el-menu-item index="7-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="8">APP</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "/",
      text_color: "#ff9d00",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key);
      console.log(keyPath);
    },
  },
};
</script>