<template>
    <div>
        <el-menu :active-text-color="text_color" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <!-- <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">目的地</el-menu-item>
          <el-menu-item index="3">旅游攻略</el-menu-item>
          <el-submenu index="4">
            <el-menu-item index="4-1">11111</el-menu-item>
          </el-submenu> -->

<el-menu-item index="1">首页</el-menu-item>
<el-menu-item index="2">目的地</el-menu-item>
<el-menu-item index="3">旅游攻略</el-menu-item>
  <el-submenu index="4">
    <template slot="title">我的工作台</template>
    <el-menu-item index="4-1">选项1</el-menu-item>
    <el-menu-item index="4-2">选项2</el-menu-item>
    <el-menu-item index="4-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="5">机票火车票</el-menu-item>
  <el-menu-item index="6">酒店</el-menu-item>
  <el-submenu index="7">
    <template slot="title">社区</template>
    <el-menu-item index="7-1">选项1</el-menu-item>
    <el-menu-item index="7-2">选项2</el-menu-item>
    <el-menu-item index="7-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="8">APP</el-menu-item>
  <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->

        </el-menu>
    </div>
</template>
<script>
export default {
    data () {
        return {
            activeIndex:"1",
            text_color:"#ff9d00"
        }
    },
    methods: {
         handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
}
</script>