<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }

  #app{
    position: absolute;
    left: 0;
    top:0;
    width: 100vw;
    height: 100vh;
  }
</style>
