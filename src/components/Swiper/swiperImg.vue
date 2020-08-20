<template>
    <div>
      <div class="block">
    <el-carousel height="500px">
      <el-carousel-item>
        <img id="main-img-swiper" src="~assets/images/CoUBUl8e4k2AHvhbABg-iMCUPH8743.png" />
      </el-carousel-item>
      <el-carousel-item>
        <img id="main-img-swiper" src="~assets/images/CoUBUl8a9vSAVnW-ADJ1L1ml2eY199.png" />
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperList:[
        {id:"01",imgURL:'~assets/images/CoUBUl8a9vSAVnW-ADJ1L1ml2eY199.png'},
        {id:"02",imgURL:'~assets/images/CoUBUl8cKNaAPP2rACuWtSfuIBA778.png'}
      ]
    }
  },
  methods: {
    
  },
}
</script>