<template>
    <div>
        <el-row>
          <el-col :span="24">
            <img class="main-left-img" src="~assets/images/index-link.png">
        </el-col>
        </el-row>

        <el-row class="main-left-1 br">
            <ElCol class="main-left-title" :span="12"><a href="#">旅行家专栏</a></ElCol>
            <ElCol class="main-left-lxsy" :span="12"><a href="#">专栏首页</a></ElCol>
            <el-carousel height="150px">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
        </el-row>

        <el-row class="main-left-1 br" v-for="item in col" :key="item">
            <ElCol class="main-left-title" :span="12"><a href="#">{{item.ctitle}}</a></ElCol>
            <ElCol class="main-left-lxsy" :span="12"><a href="#">专栏首页</a></ElCol>
        </el-row>
        <div class="main-left-1 br"></div>
    </div>
</template>
<script>
    import {main_left,main_left_col} from 'network/home-net.js'
    export default{
        created () {
          main_left().then(res=>{
              console.log("left",res.data);
              this.list = res.data
          })
          main_left_col().then(res=>{
                this.col = res.data
          })
        },
        data () {
            return {
                list:{},
                col:{}
            }
        }
    }
</script>
<style>
    @import url("~assets/CSS/main-left.css");
</style>