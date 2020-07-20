<template>
  <div id="app">
    <div id="nav">
      <el-container>
        <el-header>
头
        </el-header>
        <el-main>
主体
        </el-main>

        <el-footer>
尾部
        </el-footer>

      </el-container>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <!-- <router-view/> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>
<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-main{
  background-color: rgb(0, 255, 115);
  text-align: center;
  height: 1000px;
}
</style>
