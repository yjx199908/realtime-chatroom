<template>
  <div id="entry-page">
    <div class="entry-modules"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
  #entry-page{
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background: black;

    .entry-modules{
      position: absolute;
      top:10vh;
      left:10vw;
      bottom:15vh;
      right:10vw;
      background: turquoise;
    }
  }
</style>