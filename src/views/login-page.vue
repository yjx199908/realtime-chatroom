<template>
  <div id="login-page">
    <div class="login-box">
      <div class="btns-con">
        <div :class="{'btn-item':true,'btn-item-active':'/login-page/for-login' == this.$router.history.current.path}" @click="goto_path('/login-page/for-login')">LOGIN</div>
        <div :class="{'btn-item':true,'btn-item-active':'/login-page/for-register' == this.$router.history.current.path}" @click="goto_path('/login-page/for-register')">REGIS</div>
      </div>
      <div class="boxes-con">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goto_path(path){
      if(path == this.$router.history.current.path){
        return
      }
      this.$router.push(path)
    }
  },
  computed:{
    currentPath(){
      console.log('变动')
      return this.$router.history.current.path
    }
  }
}
</script>

<style lang="less" scoped>
  *{
    margin:0;
    padding: 0;
  }

  #login-page{
    position: absolute;
    left:0;
    top:0;
    width:100vw;
    height: 100vh;
    background: rgb(228,237,246);

    .login-box{
      overflow: hidden;
      background: rgb(228,237,246);
      width:26vw;
      min-height: 33vh;
      position: absolute;
      left:37vw;
      top:30vh;
      border-radius: 15px;
      box-shadow: -8px -8px 20px rgba(255, 255, 255, 1),
              -8px -8px 12px rgba(255, 255, 255, 0.5),
              inset 8px 8px 4px rgba(255, 255, 255, 0.1),
              8px 8px 8px rgba(0, 0, 0, 0.15);
      .btns-con{
        display: flex;
        flex-direction: row;

        .btn-item{
          flex:1;
          text-align: center;
          line-height: 4em;
          background: mediumaquamarine;
          cursor: pointer;
          transition: 0.2s;
          &:nth-child(1){
            border-right: 1px solid white;
          }
          &:hover{
            background: mediumpurple;
            color: white;
            text-shadow: 1px 1px black;
          }
        }

        .btn-item-active{
          background: mediumpurple;
          color: white;
          text-shadow: 1px 1px black;
        }
      }

      .boxes-con{
        margin: 2em 0;
      }
    }
  }
</style>