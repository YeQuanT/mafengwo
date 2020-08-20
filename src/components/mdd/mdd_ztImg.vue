<template>
  <div id="mdd-rec">
    <el-col class="br" :span="24">
      <a v-for="item in ImgList" :key="item" class="mdd_rec_a" href="#">
        <el-image :src="item.img"></el-image>
        <span class="mdd_rec_title">{{item.title}}</span>
      </a>
    </el-col>
  </div>
</template>

<script>
  export default{
    data () {
      return {

      }
    },
    props: {
      ImgList:{}
    }
  }
</script>
<style>
  #mdd-rec .el-image{
    width: 255px;
    height: 230px;
    padding: 10px 12px;
  }
  .mdd_rec_a{
    position: relative;
  }
  .mdd_rec_title{
    font-size: 25px;
    font-weight: 700;
    color: #ffffff;
    position: absolute;
    left: 45px;
    bottom: 40px;
  }
</style>