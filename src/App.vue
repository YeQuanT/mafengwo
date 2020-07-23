<template>
  <div id="app">
    <div id="nav">
      <!-- Container容器 -->
      <el-container>
        <!-- 头 -->
        <el-header>
          <el-col :span="3" class="br" push="2">
            <img src="@/assets/images/Snipaste_2020-07-22_11-01-52.png" alt="" srcset="">
          </el-col>
          <el-col :span="14" class="br" push="2">
            <MyNav></MyNav>
          </el-col>
          <el-col :span="3" class="br" push="2">3</el-col>
        </el-header>
        <!-- 图片 -->
            <el-row id="main-img" class="br">
                <el-col :span="24">

                </el-col>
            </el-row>
        <!-- main -->
        <el-main>
          <el-row>
            <el-col id="main-col" :span=20 pull=2 push=2 class="br">
              <el-row>
                <el-col id="main-nav" :span=24>
                  <mainNav></mainNav>
                </el-col>
              </el-row>
              <el-col id="main-left" :span=8 class="br">
                <mainLeft></mainLeft>
              </el-col>
              <el-col id="main-rigth" :span=15 push=1 class="br">
                <mainRight></mainRight>
              </el-col>
            </el-col>
          </el-row>
        </el-main>
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
import mainLeft from 'components/main-body/main-left.vue'
import mainRight from 'components/main-body/main-right.vue'
import mainNav from 'components/nav/main-nav.vue'
export default {
  data() {
    return {
      
    }
  },
  components:{
    MyNav,
    mainLeft,
    mainRight,
    mainNav
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
  height: 1200px;
}
#main-img{
  height: 450px;
  background-color: bisque;
}
#main-col{
  height: 1100px;
}
#main-nav{
  height: 60px;
  margin:0;
  padding-left:0;
  margin-bottom: 10px;
}
#main-left{
  height: 1000px;
}
#main-rigth{
  height: 900px;
}
</style>
