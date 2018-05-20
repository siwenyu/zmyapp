<template>
    <div>
        <top :title="title"></top>
        <am-container :class="['fl-list-con',{'fl-list-con-move': isMove}]">
            <am-row class="fl-list" v-for="(item, index) in flImgList " :key="index + 'flImg'">
                <am-col class="fl-list-icon" :span="4">
                    <div  class="block light" >
                        {{ item.numData[0].num }}
                        <div class="fl-list-icon-item fl-list-icon-msg">
                            <img width="100%" height="100%" src="../assets/image/msg.svg">
                        </div>
                    </div>
                    <div  class="block light" >
                        {{ item.numData[1].num }}
                        <div class="fl-list-icon-item fl-list-icon-fire">
                            <img width="100%" height="100%" src="../assets/image/fireActive.svg">
                        </div>
                    </div>
                </am-col>
                <am-col :span="8" class="fl-list-img">
                    <img  @click="classifyClick" width="100%" :src="item.src"/>
                    <p class="fl-list-img-text">
                        <span class="fl-list-img-text1">{{ item.title }}</span>
                        <span class="fl-list-img-text2">{{ item.sub }}</span>
                    </p>
                </am-col>
            </am-row>
        </am-container>
        <bottomFooter>
        </bottomFooter>
        
    </div>
</template>

<script>
import bottomFooter from '@/components/bottomFooter'
import top from '@/components/top'
import search from '@/components/search'
import tool from  '@/assets/js/tool.js'
import imgData from  '@/assets/js/imgData.js'

export default {
    name: 'classify',
    components: {
        bottomFooter, search, top
    },
    data () {
        return {
            defaultTrue: true,
            flImgList:[],
            title: '分类',
            isMove: false
        }
    },
    methods:{
        classifyClick(){
            this.$router.push({path:  '/allworks'});
        }
    },
    mounted(){
        let self = this;
        this.flImgList = imgData.classifyImg;
        setTimeout(()=>{
            self.isMove = true;
        },0);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fl-list-con {
    padding-top: 110px;
}
.fl-list-con-move {
    transform:translateY(-30px);
    -webkit-transform:translateY(-30px);
    transition: all  .4s  ease-in-out;
    -moz-transition: all  .4s  ease-in-out;
    -webkit-transition: all  .4s  ease-in-out;
}
.fl-list {
    margin-bottom: 0px;
}
.fl-list-icon {
    text-align: right;
    padding-right: 15px;
    margin-top: 1%;
}
.fl-list-icon-msg {
    margin-bottom: 30px;
    margin-top: 3px;
}
.fl-list-icon-item {
    margin-left: 4px;
    display: inline-block;
    height: 40px;
    width: 40px;
}
.fl-list-img {
     padding-right: 20px;
 }
.fl-list-img img{
    border-radius: 5px;
}
.fl-list-img-text {
    margin-top: 8px;
}
.fl-list-img-text1 {
    font-size: 20px;
    color: #131314;
}
.fl-list-img-text2 {
    font-size: 16px;
    color: #797980;
}
</style>
