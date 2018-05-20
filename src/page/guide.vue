<template>
    <div class="guide-con">
        <!-- <wc-swiper class="guide" :curSlide="curSlide" @transitionend="changeImg" :autoplay="defaultFalse">
            <wc-slide 
            v-for="(item, index) in guideList" 
            :key="index" 
            >
                <img width="100%" height="100%" :src="item.src" />
            </wc-slide>
        </wc-swiper> -->
        <swiper :options="swiperOption" @touchEnd="changeImg" ref="mySwiper">  
            <swiper-slide v-for="(item, index) in guideList" :key="index">
                <img width="100%" height="100%" :src="item.src">
            </swiper-slide>  
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div :class="['guide-active-block',{'guide-active-block-move': isMove}]" v-if="showEntry">
            <am-button 
                @click="clickBtn()" 
                :class="['guide-active']"> 欢迎体验 
            </am-button>
        </div>
        
    </div>
</template>

<script>
import bottomFooter from '@/components/bottomFooter'
import tool from  '@/assets/js/tool.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper';  

export default {
    name: 'guide',
    components: {
        bottomFooter, swiper, swiperSlide
    },
    data () {
        return {
            curSlide: 0,
            defaultFalse: false,
            showEntry: false,
            nowData: {
                title: '这是老师',
                text: '这是街舞的我大所大所',
                src: ''
            },
            guideList: [
                {
                    src: require('../assets/guide/guide1.jpg'),
                    preSrc: '',
                    afterSrc:''
                },
                {
                    src: require('../assets/guide/guide2.jpg'),
                    preSrc: '',
                    afterSrc:''
                },
                {
                    src: require('../assets/guide/guide3.jpg'),
                    preSrc: '',
                    afterSrc:''
                }
                
            ],
            isMove: false,
            //轮播config  
            swiperOption: {  
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger  
                debugger: true,    
                speed: 300,
                effect : 'coverflow',
                slidesPerView: 3,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'progressbar'
                },
                coverflow: {
                    rotate: 30,
                    stretch: 10,
                    depth: 60,
                    modifier: 2,
                    slideShadows : false
                },
                spaceBetween: 35,
                loop: false,
                autoplay: 3000,          
                slidesPerView: "auto",//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。  
                centeredSlides: true//<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>  
            }  
        }
    },
    methods:{
        changeImg(index){
            if(this.swiper.activeIndex==2) {
                let self = this;
                this.showEntry = true;
                setTimeout(()=>{
                    self.isMove = true;
                },0);
            }else {
                this.showEntry = false;
            }
        },
        clickBtn(){
            this.showEntry = false;
            this.$router.push({path:  '/index'});
            
        }
    },
    mounted(){
        
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
    .guide-con {
        height: 100%;
    }
    .guide-active-block {
        position: absolute;
        left: 50%;
        top: 50%;
        display: block;
        z-index: 100;
    }
    .guide-active {
        background-image: linear-gradient(-90deg, #6EC6FC 0%, #45CFBE 100%);
        opacity: 1;
        color: #fff;
        margin-top: -16px;
        margin-left: -43px;
        z-index:10;
    }
    .guide .wc-pagination {
        bottom: 50px;
    }
    .guide-con .swiper-container {
        height: 100%;
    }
    .guide-active-block-move {
        transform:scale(1.5);
        -webkit-transform:scale(1.5);
        transition: all  1s  ease-in-out;
        -moz-transition: all  1s  ease-in-out;
        -webkit-transition: all  1s  ease-in-out;
    }
    .guide-con .swiper-container .swiper-pagination {
        bottom: 0;
        top:auto;
    }
    .guide-con .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {

        background: #fff;
    }
</style>
<style>
    .guide-con .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
        background: #fff;
    }
    .guide-con .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet-active {
        background: #007aff;
    }
</style>
