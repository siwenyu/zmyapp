<template>
    <div class="zmy-container">
        <top></top>
        <img class="detail-top-img" ref="topImg" width="100%" :src="topImg.src">
        <am-container class="detail-con">
            <am-row>
                <am-col :span="2">
                    <img @click="disClick(author)" width="100%" height="100%" :src="author.src">
                </am-col>
                <am-col :span="7">
                    <div class="detail-t1">
                        {{ author.name }}
                    </div>
                    <div class="detail-t2">
                        {{ author.t1 }}
                    </div>
                    <div class="detail-t3">
                         | 
                        {{ author.tag }}
                    </div>
                </am-col>
                <am-col :span="3">
                    <am-button 
                        @click="clickBtn(focus.type)" 
                        :class="['guide-active']"> {{focus.text}}
                    </am-button>
                </am-col>
            </am-row>
            <am-row>
                <am-col :span="12">
                    <div class="detail-t4">
                        {{ topImg.title }}
                    </div>
                </am-col>
            </am-row>
            <am-row>
                <am-col :span="7">
                    <div class="detail-t2">
                        {{ topImg.time }}小时前
                    </div>
                    
                </am-col>
                <am-col :span="5">
                    <am-row >
                        <am-col
                        v-for="(numItem, numIndex) in topImg.numData" 
                        :span="4"
                        :key="numIndex + 'icon'"
                        >
                        <img  @click="fireClick(numItem.type)" :class="['index-img-icon' ,{pulse: numItem.activeMove}]" :src="numItem.src">
                        <div  @click="fireClick(numItem.type)" :class="['index-img-icontext']">
                            {{numItem.num}}
                        </div>
                        </am-col>
                    </am-row>
                </am-col>
            </am-row>

            <am-row  class="detail-bottom">
                <am-col :span="12">
                    <div class="detail-t5">
                        相关作品
                    </div>
                </am-col>
            </am-row>

            <swiper class="detail-swiper" @click="bottomItemClick" :options="swiperOption"  ref="mySwiper">  
                <swiper-slide  v-for="(item, index) in bottomList" :key="index">
                    <img :src="item.src">
                </swiper-slide>  
            </swiper>  

             <am-row  class="detail-bottom">
                <am-col :span="12">
                    <div class="detail-t7" ref="disCon">
                        8条评论
                    </div>
                </am-col>
                <am-col  v-for="(item, index) in autherList" :key="index + 'dis'" :span="12">
                    <am-row >
                        <am-col :span="2">
                            <img @click="disClick(item)" width="100%" height="100%" :src="item.src">
                        </am-col>
                        <am-col :span="10">
                            <div class="detail-t1">
                                {{ item.name }}
                            </div>
                            <div class="detail-t3">
                                {{ item.lastTime }}分钟前
                            </div>
                        </am-col>
                    </am-row>
                    <am-row>
                        <am-col class="detail-dis" :span="12">
                            {{ item.discuss }} 
                        </am-col>
                    </am-row>
                </am-col>
            </am-row>
        </am-container>
        <div class="detail-check-div" v-if="ischeckDis" @click="disBtnClick">
            <img src="../assets/image/dis.png">
        </div>
        
    </div>
</template>

<script>
import bottomFooter from '@/components/bottomFooter'
import waterFull from '@/components/waterFull'
import top from '@/components/top'
import search from '@/components/search'
import tool from  '@/assets/js/tool.js'
import imgData from  '@/assets/js/imgData.js'

import { swiper, swiperSlide } from 'vue-awesome-swiper';  


export default {
    name: 'swiperDemo',
    components: {
        swiper, swiperSlide, top
    },
    data () {
        return {
            discNum: tool.randomNum(1,20),
            topImgList: [
                {
                    src: require('../assets/video/v1.jpg'),
                },
                {
                    src: require('../assets/video/v2.png'),
                },
                {
                    src: require('../assets/video/v3.png'),
                }
                
            ],
            imgHeight: 214,
            activeFire: imgData.activeFire,
            fire: imgData.fire,
            msg: imgData.msg,
            eye: imgData.eye,
            srcBimg: imgData.srcBimg,
            srcSImg: imgData.srcSImg,
            bottomList: [],
            autherList: imgData.personData.list,
            waterList:[],
            imgList:[],
            author:{},
            topImg:{},
            disList:[],
            ischeckDis: false,
            focus:{
                type: false,
                text: '关注'
            },
            
            //轮播config  
            swiperOption: {  
                slidesPerView: 2.5,
                spaceBetween: 3,
                pagination: {
                    clickable: true
                }
          }  

        }
    },
    methods:{
        clickBtn(n) {
            let self = this;
            if(this.focus.type) {
                this.focus.text = '关注';
                this.focus.type = false;
            }else {
                this.focus.text = '已关注';
                this.focus.type = true;
            }
        },
        fireClick(type) {
            let self = this;
            if(type == 'fire' || type == 'fireActive') {
                if(type == 'fire') {
                    self.topImg.numData[2].activeMove = true;
                    setTimeout(function(){
                        self.topImg.numData[2].activeMove = false;
                    }, 500);
                    self.topImg.numData[2].type = 'fireActive';
                    self.topImg.numData[2].src = self.activeFire;
                    self.topImg.numData[2].num += 1;
                }else {
                    self.topImg.numData[2].type = 'fire';
                    self.topImg.numData[2].src = self.fire;
                    self.topImg.numData[2].num -= 1;
                }
            }

            self.imgList = tool.deepCopy(self.imgList);
        },
        bottomItemClick(item) {
            this.$route.query.type == 'big' ? this.topImg = this.srcBimg[this.swiper.clickedIndex]: this.topImg = this.srcSImg[this.swiper.clickedIndex];
            this.author = this.autherList[this.topImg.authorId];
            setTimeout(()=>{
                document.body.scrollTop = 0;
            }, 0);
            this.$refs.topImg.scrollIntoView();
            
        },
        disBtnClick(){
            this.$router.push({path:  '/diserror'});
        },
        disClick(item) {
            this.$router.push({path:  '/authorc', query:{'authorId': item.srcIndex, 'scanType': item.scanType}});
        },
        checkDis(){
            if(this.$refs.disCon.getBoundingClientRect().top < 0) {
                this.ischeckDis = true;
            }else {
                this.ischeckDis = false;
            }
            
        }
        
    },
    mounted(){
        this.bottomList = this.$route.query.type == 'big' ? this.srcBimg : this.srcSImg;
        this.$route.query.type == 'big' ? this.topImg = this.srcBimg[this.$route.query.index]: this.topImg = this.srcSImg[this.$route.query.index];
        this.author = this.autherList[this.topImg.authorId];
        window.addEventListener('scroll', this.checkDis);
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    destroyed(){
        window.removeEventListener('scroll', this.checkDis);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
.zmy-container {
    height: 100%;
    position: relative;
}
.detail-top-img {
    margin-top: 56px;
}
.detail-con {
    margin-top: 23px;
    padding: 0 20px;
}
.detail-con img {
    border-radius: 4px;
}
.detail-t1 {
    font-size: 14px;
    color: #2E3442;
    margin-bottom: 10px;
}
.detail-t2 {
    display: inline-block;
    font-size: 13px;
    color: #BBBEC0;
}
.detail-t3 {
    display: inline-block;
    font-size: 13px;
    color: #BBBEC0;
}
.detail-t4 {
    font-size: 20px;
    color: #2E3442;
    margin-top:18px;
    margin-bottom: 10px;
}
.detail-t5 {
    font-size: 16px;
    color: #2E3442;
    margin-bottom: 12px;
}
.detail-t7 {
    margin-bottom: 30px;
}
.detail-dis {
    margin-top: 20px;
    font-size: 14px;
    color: #666666;
    padding: 15px 16px;
    border-bottom: 1px solid #E3E4E5;
    margin-bottom: 16px;
}
.guide-active {
    background-image: linear-gradient(-90deg, #6EC6FC 0%, #45CFBE 100%);
    opacity: 1;
    color: #fff;
    z-index:10;
    margin-top: 7px;
    border-radius: 4px;
    padding: .5rem 1.7rem;
}

.index-img-icon {
    display: inline-block;
    vertical-align: baseline;
    width: 16px;
    height: 16px;
    vertical-align: top;

}
.index-img-icontext {
    display: inline;
    vertical-align: baseline;
}
.am-g > .am-u-sm-5 > .am-g .am-u-sm-4 {
    padding: 0;
}
.detail-bottom {
    border-top: 1px solid  #E3E4E5;
    margin-top: 18px;
    padding-top: 12px;
}
.detail-check-div {
    width: 56px;
    height: 56px;
    bottom: 40px;
    right: 40px;
    position: fixed;
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

.detail-swiper img {
    width: 100%;
    height: 100%
}
</style>
