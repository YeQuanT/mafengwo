<template>
  <div id="app">
    <div id="nav">
      <!-- Container容器 -->
      <el-container>
        <!-- 头 -->
        <el-header>
          <el-col :span="3" id="app-logo" :push="2">
            <img src="@/assets/images/Snipaste_2020-07-22_11-01-52.png" alt="" srcset="">
          </el-col>
          <el-col :span="14" :push="2">
            <MyNav></MyNav>
          </el-col>
          <el-col :span="3" class="br" :push="2">3</el-col>
        </el-header>
        <router-view>

        </router-view>
        <!-- 图片 -->

        <!-- 尾部 -->
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
import MyNav from 'components/nav/nav.vue'
export default {
  data() {
    return {

    }
  },
  components:{
    MyNav
  },
  created(){

  },
  methods:{

  }
}
</script>
<style>
.el-header, .el-footer {
  }
.el-main{
  text-align: center;
}
#main-img{
  height: 450px;
  background-color: bisque;
}
#main-col{
}
#main-nav{
  height: 60px;
  margin:0;
  padding-left:0;
  margin-bottom: 10px;
}
#main-left{
}
#main-rigth{
}
#app-logo{
  margin-top: 8px;
}
</style>
