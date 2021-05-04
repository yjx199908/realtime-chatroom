<template>
  <div id="main-page">
      <router-view />
      <div class="bottom-nav-con">
        <bottom-nav></bottom-nav>
      </div>
  </div>
</template>

<script>
import BottomNav from 'compts/bottom-nav.vue'
export default {
    data(){
        return {}
    },
    components:{
        BottomNav
    }
}
</script>

<style lang="less" scoped>
    #main-page{
        width:100vw;
        height: 100vh;
        position: absolute;
        left:0;
        top:0;
        .bottom-nav-con{
            height: 8vh;
            position: fixed;
            bottom: 5vh;
            left:50%;
            transform: translateX(-50%);
        }
    }
</style>