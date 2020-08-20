<template>
  <div id="mdd-rec">
    <el-col class="br" :span="24">
      <a class="mdd_rec_a" href="#">
        <el-image :src="ImgList[0].img"></el-image>
        <span class="mdd_rec_title">广东</span>
      </a>
      <a class="mdd_rec_a" href="#">
        <el-image :src="ImgList[0].img"></el-image>
        <span class="mdd_rec_title">茂名</span>
      </a>
      <a class="mdd_rec_a" href="#">
        <el-image :src="ImgList[0].img"></el-image>
        <span class="mdd_rec_title">广东</span>
      </a>
      <a class="mdd_rec_a" href="#">
        <el-image :src="ImgList[0].img"></el-image>
        <span class="mdd_rec_title">茂名</span>
      </a>
      <a class="mdd_rec_a" href="#">
        <el-image :src="ImgList[0].img"></el-image>
        <span class="mdd_rec_title">广东</span>
      </a>
      <a class="mdd_rec_a" href="#">
        <el-image :src="ImgList[0].img"></el-image>
        <span class="mdd_rec_title">茂名</span>
      </a>
      <a class="mdd_rec_a" href="#">
        <el-image :src="ImgList[0].img"></el-image>
        <span class="mdd_rec_title">广东</span>
      </a>
      <a class="mdd_rec_a" href="#">
        <el-image :src="ImgList[0].img"></el-image>
        <span class="mdd_rec_title">茂名</span>
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