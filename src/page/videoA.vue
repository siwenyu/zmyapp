<template>
    <div >
        <top :title="title"></top>
        <div class="video-top-bg " ref="topBg">
            <img :src="bgImg" width="100%" >
        </div>
        <div class="swiper-container">
            <div class="swiper">  
                <swiper 
                    :options="swiperOption" 
                    @click="touchEndCall" 
                    @touchEnd="touchEndCallClick"
                    ref="mySwiper">  
                    <swiper-slide v-for="(item, index) in topImgList" :key="index">
                        <img :src="item.src">
                        <div class="video-top-paly-block">
                            <img class="video-top-paly" src="../assets/video/play.png">
                        </div>
                    </swiper-slide>  
                </swiper>  
            </div>  
        </div>
        <div class="video-play-text">
            <p class="video-play-title">
                {{ nowData.name }}
            </p>
            <p class="video-play-text">
                {{ nowData.text }}
            </p>
        </div>

        <div class="video-play-icon">
            <span class="video-play-icon1">
                <img width="100%" height="100%" src="../assets/video/mix.png">
            </span>
            <span :class="[{'pulse': fireActive}]" class="video-play-icon2">
                <img @click="fireClick" width="100%" height="100%" :src="fireImg">
            </span>
            <span class="video-play-icon3">
                <img width="100%" height="100%" src="../assets/video/repeat.png">
            </span>
        </div>

        <div class="video-process">
            <am-progress :progress="50" :showProgress="false" color="secondary"></am-progress>
        </div>
        <am-row>
            <am-col class="text-left" :span="6">00:13</am-col>
            <am-col class="text-right" :span="6">15:67</am-col>
        </am-row>

        <div class="video-control-icon">
            <span class="video-control-icon1">
                <img width="100%" height="100%" src="../assets/video/pre.png">
            </span>
            <span class="video-control-icon2">
                <img width="100%" height="100%" src="../assets/video/pause.png">
            </span>
            <span class="video-control-icon3">
                <img width="100%" height="100%" src="../assets/video/next.png">
            </span>
        </div>

        <bottomFooter>
        </bottomFooter>
        
    </div>
</template>

<script>
import bottomFooter from '@/components/bottomFooter'
import top from '@/components/top'
import tool from  '@/assets/js/tool.js'


import { swiper, swiperSlide } from 'vue-awesome-swiper';  


export default {
    name: 'videoA',
    components: {
        bottomFooter, swiper, swiperSlide, top
    },
    data () {
        return {
            curSlide: 0,
            defaultTrue: true,
            title: '视频',
            defaultFalse:false,
            nowData: {
                name: '这是老师',
                text: '这是街舞的我大所大所'
            },
            fireNoImg: require('../assets/image/fire.svg'),
            fireActiveImg: require('../assets/image/fireActive.svg'),
            fireImg: 'fireNoImg',
            fireActive: false,
            bgImg: require('../assets/video/bg.jpg'),
            topImgList: [
                {
                    src: require('../assets/video/v1.jpg'),
                    preSrc: '',
                    afterSrc:'',
                    pre:false,
                    center: false,
                    after: false
                },
                {
                    src: require('../assets/video/v2.png'),
                    preSrc: '',
                    afterSrc:'',
                    pre:false,
                    center: false,
                    after: false
                },
                {
                    src: require('../assets/video/v3.png'),
                    preSrc: '',
                    afterSrc:'',
                    pre:false,
                    center: false,
                    after: false
                }
                
            ],
            textData:[
                {
                    name: '和田碧玉',
                    text: '碧玉是软玉里的一个品种，在中国以准噶尔盆地南缘的玛钠斯县出产量和俄罗斯产量最大。'
                },
                {
                    name: '俄罗斯玉',
                    text: '俄罗斯白玉矿体呈透镜状、脉状、似层状、团块状等，产出于酸性岩浆岩与白云质大理岩的接触带中。'
                },
                {
                    name: '新疆和田玉',
                    text: '新疆和田玉精细玉雕茶壶茶具茶杯礼品套装摆件可来样加工定做。'
                }
            ],
            isFire: false,
            
            //轮播config  
            swiperOption: {  
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger  
                debugger: true,    
                speed: 300,
                effect : 'coverflow',
                slidesPerView: 3,
                centeredSlides: true,
                preventClicks: true,
                preventLinksPropagation: true,
                coverflow: {
                    rotate: 30,
                    stretch: 10,
                    depth: 60,
                    modifier: 2,
                    slideShadows : false
                },
                spaceBetween: 35,
                loop:true,
                autoplay: 3000,          
                slidesPerView: "auto",//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。  
                centeredSlides: true//<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>  
            }  

        }
    },
    methods:{
        touchEndCall(val,event){
            if(this.swiper.activeIndex == this.swiper.clickedIndex) {
                this.$router.push({path:  '/videoerror'});
            }
        },
        touchEndCallClick(val){
            let nowIndex = this.swiper.realIndex;
            this.nowData.name = this.textData[nowIndex].name;
            this.nowData.text = this.textData[nowIndex].text;
        },
        fireClick(){
            if(this.isFire) {
                this.fireImg = this.fireNoImg;
                this.isFire = false;
            } else {
                this.fireImg = this.fireActiveImg;
                this.isFire = true ;
                this.fireActive = true;
                setTimeout(()=>{
                    this.fireActive = false;
                }, 500);
            }
        }
    },
    mounted(){
        let self = this;
        let nowIndex = 0;
        this.nowData.name = this.textData[nowIndex].name;
        this.nowData.text = this.textData[nowIndex].text;

        this.fireImg = this.fireNoImg;
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
    .video-top-bg {
        margin-top: -27px;
        z-index:1000;
    }
    .video-play-title {
        margin: 0;
        font-size: 24px;
        color: #2E3442;
        text-align: center;
        margin-top: -44px;
    }
    .video-play-text {
        font-size: 13px;
        color: #AFB1B4;
        text-align: center;
        margin-top: 6px;
    }

    .swiper-container {
        width: 100%;
        height: 320px;
        overflow: hidden;
        margin-top: -69px;
        padding-top: 48px;
    }

    .swiper-slide {
        width: 200px;
        height: 200px;
        z-index:10;
        
    }
    .swiper-slide-active {
        z-index: 100;
    }
    .swiper-slide-active > img {
        width: 100%;
        height: 100%;
        margin: 0;
        transform: scale(1.3);
    }
    .swiper-slide > img {
        width: 100%;
        height: 100%;
        display: block;
        margin: 0 auto;
        margin-top: 2%;
        transition: all .5s ease 0s;
        border:3px solid #fff;
        border-radius: 6px;
    }
    .video-top-paly-block {
        position: absolute;
        height: 38px;
        width: 28px;
        top:50%;
        left:50%;
    }
    .video-top-paly {
        margin-left: -28px;
        margin-top: -19px;
    }
    .video-play-icon {
        text-align: center;
    }
    .video-play-icon1 {
        height: 15px;
        width: 15px;
        display: inline-block
    }
    .video-play-icon2 {
        height: 40px;
        width: 40px;
        display: inline-block;
        margin-left: 28px;
        margin-right: 28px;
    }
    .video-play-icon3 {
        height: 15px;
        width: 15px;
        display: inline-block
    }
    .video-control-icon {
        text-align: center;
    }
    .video-control-icon1 {
        height: 18px;
        width: 18px;
        display: inline-block
    }
    .video-control-icon2 {
        height: 27px;
        width: 27px;
        display: inline-block;
        margin-left: 28px;
        margin-right: 28px;
    }
    .video-control-icon3 {
        height: 18px;
        width: 18px;
        display: inline-block
    }
    .video-process {
        margin-top: 24px;
    }
    .video-process .am-progress-bar-secondary {
        background:  #2E3442;
        line-height: 2px;
        height: 2px;
    }
    .video-process  .am-progress {
        line-height: 2px;
        height: 2px;
    }
    .text-left {
        text-align: left;
        font-size: 11px;
        color: #BBBEC0;
    }
    .text-right {
        text-align: right;
        font-size: 11px;
        color: #BBBEC0;
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
