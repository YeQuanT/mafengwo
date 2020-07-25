<template>
    <div>
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
    </div>
</template>
<script>
import mainLeft from 'components/main-body/main-left.vue'
import mainRight from 'components/main-body/main-right.vue'
import mainNav from 'components/nav/main-nav.vue'
export default {
  data () {
    return {
      
    }
  },
  components:{
    mainLeft,
    mainRight,
    mainNav
  }
}
</script>