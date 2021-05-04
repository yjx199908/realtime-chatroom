<template>
  <div class="bottom-nav">
      <div class="bottom-nav-item" 
        v-for="(item,index) in navList" 
        :key="item.text" 
        @click="switchTab(index)"
        :style="{'width':styleConfig.itemWidth,'background':styleConfig.bgStyle,'color':styleConfig.fontColor}">
          {{item.text}}
      </div>
      <div class="slide-bar" :style="{width:slideBarWidth,left:slideBarTranslateX}">
          <div class="slide-bar-display"></div>
      </div>
  </div>
</template>

<script>
import bottomNavConfig from 'config/bottom-nav-config.json'

export default {
    mounted(){
        this.slideBarShouldWidth = (100 / bottomNavConfig.main_list.length).toFixed(0)
        this.slideBarWidth = this.slideBarShouldWidth + '%'
        this.styleConfig = bottomNavConfig.styleConfig
    },
    data(){
        return {
            navList:bottomNavConfig.main_list,
            styleConfig:{
                itemWidth:''
            },
            slideBarWidth:'',
            slideBarShouldWidth:0,
            slideBarTranslateX:0,
            currentIndex:0,
            allowSwitch:true
        }
    },
    props:{
        
    },
    methods:{
        switchTab(index){
            if(index == this.currentIndex || !this.allowSwitch){
                return
            }
            let diff = index - this.currentIndex
            if(diff > 0){
                this.allowSwitch = false
                this.slideBarWidth = (diff+1) * this.slideBarShouldWidth + '%' 
                setTimeout(()=>{
                    this.slideBarWidth = this.slideBarShouldWidth + '%'
                    this.slideBarTranslateX = index * this.slideBarShouldWidth + '%'
                    this.allowSwitch = true
                    this.currentIndex = index
                },200)
            }
            else{
                this.allowSwitch = false
                this.slideBarWidth = (-diff+1) * this.slideBarShouldWidth + '%' 
                this.slideBarTranslateX = index * this.slideBarShouldWidth + '%'
                setTimeout(()=>{
                    this.allowSwitch = true
                    this.slideBarWidth = this.slideBarShouldWidth + '%'
                    this.currentIndex = index
                },200)
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .bottom-nav{
        width:100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        align-items: stretch;

        .bottom-nav-item{
            display: flex;
            flex-direction: row;
            align-items: center;
            cursor: pointer;
            justify-content: center;
        }
        .slide-bar{
            position: absolute;
            bottom: 0;
            left:0;
            width:25%;
            height: 3px;
            background: transparent;
            transition: 0.2s linear;
            .slide-bar-display{
                background: royalblue;
                width:60%;
                height:100%;
                margin:auto;
            }
        }
    }
    
</style>