<template>
    
    <div class="zmy-container">
        <top></top>
        <am-container class="detail-con">
            <am-row>
                <am-col :span="12">
                    <div class="detail-t4">
                        他的浏览记录
                    </div>
                </am-col>
            </am-row>
            <swiper class="detail-swiper" @click="topImgClick" :options="swiperOption"  ref="mySwiper">  
                <swiper-slide v-for="(item, index) in topList" :key="index">
                    <img :src="item.src">
                </swiper-slide>  
            </swiper>  
            <am-row>
                <am-col :span="12">
                    <div class="detail-t4">
                        他发布的作品
                    </div>
                </am-col>
            </am-row>
            <am-row>
                <am-col :span="2">
                    <img width="100%" height="100%" :src="author.src">
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
                        @click="clickBtn()" 
                        :class="['guide-active']"> 已关注
                    </am-button>
                </am-col>
            </am-row>
            <div class="author-all-works" @click="worksClick">
                <img width="100%" src="../assets/image/works.png">
            </div>

        </am-container>
        
    </div>
</template>

<script>
import bottomFooter from '@/components/bottomFooter'
import top from '@/components/top'
import waterFull from '@/components/waterFull'
import search from '@/components/search'
import tool from  '@/assets/js/tool.js'
import imgData from  '@/assets/js/imgData.js'

import { swiper, swiperSlide } from 'vue-awesome-swiper';  
import vueImages from 'vue-images'


export default {
    name: 'authorc',
    components: {
        swiper, swiperSlide, vueImages, top
    },
    data () {
        return {
            discNum: tool.randomNum(1,20),
            topImgList: [
                {
                    imageUrl: require('../assets/video/v1.jpg'),
                },
                {
                    imageUrl: require('../assets/video/v2.png'),
                },
                {
                    imageUrl: require('../assets/video/v3.png'),
                }
                
            ],
            imgHeight: 214,
            activeFire: imgData.activeFire,
            defaultTrue: true,
            defaultFalse: false,
            fire: imgData.fire,
            msg: imgData.msg,
            eye: imgData.eye,
            srcBimg: imgData.srcBimg,
            srcSImg: imgData.srcSImg,
            topList: [],
            autherList: imgData.personData.list,
            waterList:[],
            imgList:[],
            author:{},
            topImg:{},
            disList:[],
            author:{},
            
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
        topImgClick(index){
            let img = this.topList[this.swiper.clickedIndex];
            this.$router.push({path:  '/detail', query:{'type': img.type, 'index': img.srcIndex}});
        },
        worksClick(){
            this.$router.push({path:  '/detail', query:{'type': tool.randomNum(0, 1) > 0.5 ? 'big' : 's', 'index': tool.randomNum(0, 6)}});
        }
    },
    mounted(){
        this.topList = this.$route.query.scanType == 'big' ? this.srcBimg : this.srcSImg;
        this.author = this.autherList[this.$route.query.authorId];
        this.$route.query.type == 'big' ? this.topImg = this.srcBimg[this.$route.query.index]: this.topImg = this.srcSImg[this.$route.query.index];
        
        
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
.zmy-container {
    height: 100%;
    position: relative;
    padding-top: 56px;
}
.detail-con {
    margin-top: 10x;
    padding: 0 20px;
}
.detail-con img {
    border-radius: 4px;
}
.detail-t1 {
    font-size: 14px;
    color: #2E3442;
    margin-bottom: 5px;
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
    padding: .5rem 1rem;
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
.author-all-works {
    margin-top: 10px;
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
