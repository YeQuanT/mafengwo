<template>
  <div id="app">
    <div id="nav">
      <el-container>
        <el-header>
          <el-col :span="4" class="br" push="2">1</el-col>
          <el-col :span="11" class="br" push="2">2</el-col>
          <el-col :span="5" class="br" push="2">3</el-col>
        </el-header>
            <el-row id="main-img" class="br">
                <el-col :span="24">

                </el-col>
            </el-row>

        <el-main>
          <el-row>
            <el-col id="main-col" :span="18" pull="3" push="3" class="br">
              <el-row>
                <el-col id="main-nav" :span="24" class="br"></el-col>
              </el-row>
              <el-col id="main-left" :span="8" class="br"></el-col>
              <el-col id="main-rigth" :span="15" push="1" class="br"></el-col>
            </el-col>
          </el-row>
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
  height: 100px;
}
#main-left{
  height: 1000px;
}
#main-rigth{
  height: 900px;
}
</style>
