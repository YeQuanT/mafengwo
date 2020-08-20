<template>
  <div>
    <ElRow class="mdd-site-row">
      <el-col class="mdd-col" :span="12" >
        <ElCol class="mdd-site-title mar10" :span="6" :push="1">西藏 贵州</ElCol>
        <ElCol class="add_site-list mar10" :span="16" :push="1">
          <el-link href="#" target="_blank">拉萨</el-link>
          <el-link href="#" target="_blank">林芝</el-link>
          <el-link href="#" target="_blank">阿里</el-link>
          <el-link href="#" target="_blank">黔东南</el-link>
        </ElCol>
      </el-col>

      <el-col class="mdd-col" :span="12" >
        <ElCol class="mdd-site-title mar10" :span="6" :push="1">西藏 贵州</ElCol>
        <ElCol class="add_site-list mar10" :span="16" :push="1">
          <el-link href="#" target="_blank">拉萨</el-link>
          <el-link href="#" target="_blank">林芝</el-link>
          <el-link href="#" target="_blank">阿里</el-link>
          <el-link href="#" target="_blank">黔东南</el-link>
        </ElCol>
      </el-col>

      <el-col class="mdd-col" :span="12" >
        <ElCol class="mdd-site-title mar10" :span="6" :push="1">西藏 贵州</ElCol>
        <ElCol class="add_site-list mar10" :span="16" :push="1">
          <el-link href="#" target="_blank">拉萨</el-link>
          <el-link href="#" target="_blank">林芝</el-link>
          <el-link href="#" target="_blank">阿里</el-link>
          <el-link href="#" target="_blank">黔东南</el-link>
        </ElCol>
      </el-col>
    </ElRow>
  </div>
</template>
<script>
  export default{
    data () {
      return {
      }
    }
  }
</script>
<style>
.el-link{
    padding: 5px;
  }
  .mdd-site-title{
    font-size: 20px;
  }
  .mdd-site-row{margin: 10px 0;}
  /* .mdd-site-row .el-col{
    padding: 20px 0;
  } */
  .mar10{
    margin: 10px 0;
  }
  .mdd-col{
    height: 80px;
    border-bottom: 1px dotted #eeeeee;
  }
</style>