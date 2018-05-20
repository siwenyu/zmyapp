<template>
    <div >
        
            <swiper :options="swiperOption" @touchEnd="touchEndCall" ref="mySwiper">  
                <swiper-slide v-for="(item, index) in topImgList" :key="index">
                    <img :src="item.src">
                </swiper-slide>  
            </swiper>  
        
        
    </div>
</template>

<script>
import tool from  '@/assets/js/tool.js'

import { swiper, swiperSlide } from 'vue-awesome-swiper';  


export default {
    name: 'swiperDemo',
    components: {
        swiper, swiperSlide
    },
    data () {
        return {
            curSlide: 0,
            defaultFalse:false,
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
            
            //轮播config  
            swiperOption: {  
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger  
                debugger: true,    
                speed: 300,
                effect : 'coverflow',
                slidesPerView: 3,
                centeredSlides: true,
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
        touchEndCall(val,val1){
            
        }
    },
    mounted(){
        let self = this;

        
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
</style>
