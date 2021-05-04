<template>
  <div id="for-login">
      <div class="input-item">
          <label>Username:&nbsp;</label>
          <el-input type="text" v-model="username"/>
      </div>
      <div class="input-item">
          <label>Password:&nbsp;</label>
          <el-input type="password" v-model="password"/>
      </div>
      <div class="input-item">
          <el-switch
            v-model="shouldSave"
            active-color="#13ce66"
            inactive-color="#ccc">
            </el-switch>
          <label>No login for ten days</label>
          <label></label>
          <label></label>
      </div>
      <div class="btn-item">
          <el-button @click="goLogin" type="primary">START-LOGIN</el-button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            password:'',
            shouldSave:false
        }
    },
    methods:{
        goLogin(){
            if(!this.username){
                return
            }
            if(!this.password){
                return
            }
            
        }
    }
}
</script>

<style lang="less" scoped>
    *{
        margin:0;
        padding:0;
    }

    #for-login{
        width:100%;
        .el-divider{
            margin: 1.5em 0;
        }
        .input-item{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 1em;
            box-sizing: border-box;
            label{
                min-width:25%;
            }
            .el-input{
                flex:1;
            }
        }
        .btn-item{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            padding: 2em 1em 0;
            box-sizing: border-box;
            .el-button{
                width:30%;
                height: 2.5em;
            }
        }
    }
</style>