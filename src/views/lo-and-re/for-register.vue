<template>
  <div id="for-register">
      <div class="input-item">
          <label>Email:&nbsp;</label>
          <el-input type="text" v-model="email"/>
      </div>
      <div class="input-item">
          <label>Password:&nbsp;</label>
          <el-input type="password" v-model="password"/>
      </div>
      <div class="input-item">
          <label>Veri-Pass:&nbsp;</label>
          <el-input type="password" v-model="veri_password"/>
      </div>
      <div class="btn-item">
          <el-button type="primary">START-REGIS</el-button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            email:'',
            password:'',
            veri_password:''
        }
    }
}
</script>

<style lang="less" scoped>
    *{
        margin:0;
        padding:0;
    }

    #for-register{
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