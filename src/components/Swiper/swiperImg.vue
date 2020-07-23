<template>
    <div class="swiper-container" :class="swipeid">
      <div class="swiper-wrapper">
          <!-- 存放具体的轮播内容 -->
          <slot name ="swiper-con"></slot>
      </div>
      <!-- 分页器 -->
      <div :class="{'swiper-pagination':pagination}"></div>
  </div>
</template>