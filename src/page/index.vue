<template>
    <div class="zmy-container">
        <search></search>
        <wc-swiper class="top-img">
            <wc-slide v-for="(item,index) in topImgList" :key="index + 'topimg'">
                <img width="100%" :src="item.src" />
            </wc-slide>
        </wc-swiper>
        <div class="m-con">
            <am-container>
                <am-row>
                    <am-col :span="12">
                        <div class="index-btn-block">
                            <am-button 
                            v-for="(item, index) in btnList" 
                            :key="index + 'btn'" @click="clickBtn(index)" 
                            :class="['index-btn', {'index-btn-active': item.active}]"> {{ item.text }} </am-button>
                        </div>
                    </am-col>
                </am-row>
                <!-- <water-full>sdasdas</water-full> -->
                <am-row>
                    <am-col :span="6" 
                    v-for="(itemCol, colIndex) in waterList" 
                    :key="colIndex + 'col'">
                        <am-row class="index-img-block"  v-for="(ListItem, ListIndex) in itemCol" :key="ListIndex + 'img'">
                            <am-col :span="12" >
                                <img 
                                 width="100%" 
                                height="100%"  @click="imgClick(ListItem)" 
                                :src="ListItem.src"/>
                            </am-col>
                            <am-col class="index-img-block-text" :span="12">
                                <am-row >
                                    <am-col 
                                    :span="12" class="index-img-block-title">
                                    {{ ListItem.title }}
                                        
                                    </am-col>
                                </am-row>
                                <am-row >
                                    <am-col 
                                    :span="12" class="index-img-block-author">
                                    {{ ListItem.author }}
                                    </am-col>
                                </am-row>
                                
                                <am-row >
                                    <am-col 
                                    v-for="(numItem, numIndex) in ListItem.numData" 
                                    :span="4"
                                    :key="numIndex + 'icon'"
                                    >
                                    <img :class="['index-img-icon' ,{pulse: numItem.activeMove}]" @click="fireClick(numItem.type, colIndex, ListIndex)" :src="numItem.src">
                                    <div @click="fireClick(numItem.type, colIndex, ListIndex)" :class="['index-img-icontext']">
                                        {{numItem.num}}
                                    </div>
                                    </am-col>
                                </am-row>

                            </am-col>
                            
                        </am-row>
                    </am-col> 
                </am-row>
            </am-container>
        </div>

        <bottomFooter>
        </bottomFooter>
        
    </div>
</template>

<script>
import bottomFooter from '@/components/bottomFooter'
import waterFull from '@/components/waterFull'
import search from '@/components/search'
import tool from  '@/assets/js/tool.js'
import imgData from  '@/assets/js/imgData.js'




export default {
    name: 'index',
    components: {
        bottomFooter, waterFull, search
    },
    data () {
        return {
            imgHeight: 214,
            activeFire: require('../assets/image/fireActive.svg'),
            fire: require('../assets/image/fire.svg'),
            btnList: [{
                text: '首页推荐',
                active: true,
            },{
                text: '时间更新',
                active: false,
            }
            ],
            srcBimg: imgData.srcBimg,
            srcSImg: imgData.srcSImg,
            topImgList: imgData.topImgList,
            waterList:[],
            imgList:[
                {
                    src: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
                    title: '这是图画',
                    author: '这是作者',
                    numData: [
                        {
                            num: 33,
                            type: 'scan',
                            src: require('../assets/image/eye.svg')
                        },{
                            num: 33,
                            type: 'msg',
                            src: require('../assets/image/msg.svg')
                        },{
                            num: 33,
                            type: 'fire',
                            src: require('../assets/image/fire.svg'),
                            activeMove: false
                        }
                    ],
                    status: 1
                }
            ]
        }
    },
    methods:{
        imgClick(item){
            this.$router.push({path:  '/detail', query:{'type': item.type, 'index': item.srcIndex}});
        },
        clickBtn(n) {
            let self = this;
            self.btnList.forEach(function(item, index){
                index == n ? self.btnList[index].active = true : self.btnList[index].active = false;
            });
            self.btnList = tool.deepCopy(self.btnList);
            self.changeImg();
            
        },
        fireClick(type, index, index2) {
            let self = this;

            if(type == 'fire' || type == 'fireActive') {
                if(type == 'fire') {
                    self.waterList[index][index2].numData[2].activeMove = true;
                    setTimeout(function(){
                        self.waterList[index][index2].numData[2].activeMove = false;
                    }, 500);
                    self.waterList[index][index2].numData[2].type = 'fireActive';
                    self.waterList[index][index2].numData[2].src = self.activeFire;
                    self.waterList[index][index2].numData[2].num += 1;
                }else {
                    self.waterList[index][index2].numData[2].type = 'fire';
                    self.waterList[index][index2].numData[2].src = self.fire;
                    self.waterList[index][index2].numData[2].num -= 1;
                }
            }

            self.imgList = tool.deepCopy(self.imgList);
        },
        changeImg(index) {
            let self = this;
            self.waterList[0] = [];
            self.waterList[1] = [];
            for(var j = 0; j < 2; j ++) {
                for(var i = 0; i < 5; i ++) {
                    i % 2 ==0 ? self.waterList[0].push(self.srcBimg[tool.randomNum(0, self.srcBimg.length - 1)]) 
                        : self.waterList[0].push(this.srcSImg[tool.randomNum(0, this.srcSImg.length - 1)]);
                    i % 2 ==0 ? self.waterList[1].push(self.srcSImg[tool.randomNum(0, self.srcSImg.length - 1)]) : self.waterList[1].push(this.srcBimg[tool.randomNum(0, this.srcBimg.length - 1)]);;
                }
            }
            
            self.waterList = tool.deepCopy(self.waterList);
            self.waterList.forEach((colItem, colIndex)=> {
                for(let index in self.waterList[colIndex]) {
                    
                    self.waterList[colIndex][index] = {
                        src: self.waterList[colIndex][index].src,
                        type: self.waterList[colIndex][index].type,
                        time: self.waterList[colIndex][index].time,
                        authorId: self.waterList[colIndex][index].authorId,
                        srcIndex: self.waterList[colIndex][index].srcIndex,
                        title: self.waterList[colIndex][index].title,
                        author: self.waterList[colIndex][index].author,
                        numData: [
                            {
                                num: tool.randomNum(300, 1000),
                                type: 'scan',
                                src: require('../assets/image/eye.svg')
                            },{
                                num: tool.randomNum(0, 100),
                                type: 'msg',
                                src: require('../assets/image/msg.svg')
                            },{
                                num: tool.randomNum(0, 100),
                                type: 'fire',
                                src: require('../assets/image/fire.svg'),
                                activeMove: false
                            }
                        ],
                        status: 1
                    }
                }
            })
            this.waterList = tool.deepCopy(self.waterList);
        }
    },
    mounted(){
        this.changeImg();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zmy-container {
    height: 100%;
    position: relative;
    background: #F1F2F4;
}
.top-img {
    z-index: 20;
    height: auto;
    width: 100%;
    margin-bottom:20px;
}
.top-img img {
    height: 100%;
}
.top-img .am-control-nav.am-control-paging{
    bottom: 12px;
}
.m-con {
    position: relative;
    width: 100%;
    display: inline-block;
    background: #F1F2F4;
    margin-bottom: 56px;
    padding-left: 10px;
    padding-right: 10px;
}
.index-btn-block {
    background: #F0F1F3;
    border: 1px solid #E1E1E1;
    border-radius: 2px;
    width: fit-content;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    display: inline-block;
    margin-bottom: 12px;

}
.index-btn-block .index-btn {
    border: none;
    border-radius: 0;
    width: 100px;
    height: 33px;
    background: #F0F1F3;
    opacity: .5;
    color: #000;
}
.index-btn-block .index-btn-active {
    background-image: linear-gradient(-90deg, #6EC6FC 0%, #45CFBE 100%);
    opacity: 1;
    color: #fff;
}
.m-con .index-img-block {
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 20px;
    background: #FFFFFF;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
    border-radius: 4px;
    
}
.m-con .index-img-block img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.index-img-icon {
    display: inline-block;
    vertical-align: baseline;
    width: 18px;
    height: 18px;
    vertical-align: top;

}
.index-img-icontext {
    display: inline;
    vertical-align: bottom;
}
.m-con .index-img-block > .am-u-sm-12 {
    padding: 0;
}
.m-con .index-img-block > .am-u-sm-12 .am-u-sm-4 {
    padding: 0;
}
.m-con .index-img-block > .index-img-block-text {
    height: 90px;
    padding: 8px 15px;
}
.index-img-block-title {
    text-align: left;
    font-size: 13px;
    color: #2E3442;
}
.index-img-block-author {
    font-size: 13px;
    text-align: left;
    color: #BBBEC0;
    margin-bottom: 16px;
 }



@-webkit-keyframes plus-animate {
    0% {
        transform: scale(1);
        -webkit-transform: scale(1);
    }
    
    50% {
        transform: scale(1.5);
        -webkit-transform: scale(1.5);
    }
    
    
    100% {
        transform: scale(1);
        -webkit-transform: scale(1);
    }
}
@keyframes plus-animate {
    0% {
        transform: scale(1);
        -webkit-transform: scale(1);
    }
    
    50% {
        transform: scale(1.5);
        -webkit-transform: scale(1.5);
    }
    
    
    100% {
        transform: scale(1);
        -webkit-transform: scale(1);
    }
}

.pulse{
    animation: plus-animate .3s ease-in 0s 1 alternate;
    -webkit-animation: plus-animate .3s ease-in 0s 1 alternate;
}
</style>
