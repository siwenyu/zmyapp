<template>
    <div>
        
        <wc-swiper class="vide-play-img" @transitionend="changeImg">
            <wc-slide 
            v-for="(item, index) in topImgList" 
            :key="index" 
            :curSlide="curSlide">
                <img class="vide-play-img-left" :src="item.preSrc" />
                <img class="vide-play-img-center" :src="item.src" />
                <img class="vide-play-img-right" :src="item.afterSrc" />
            </wc-slide>
        </wc-swiper>
        <div class="vide-play-text">
            <p class="vide-play-title">
                {{ nowData.title }}
            </p>
            <p class="vide-play-text">
                {{ nowData.text }}
            </p>
        </div>

        <div class="vide-play-icon1">
            <p class="vide-play-title">
                
            </p>
            
        </div>




        <bottomFooter>
        </bottomFooter>
        
    </div>
</template>

<script>
import bottomFooter from '@/components/bottomFooter'
import tool from  '@/assets/js/tool.js'

export default {
    name: 'videoPlay',
    components: {
        bottomFooter
    },
    data () {
        return {
            curSlide: 0,
            nowData: {
                title: '这是老师',
                text: '这是街舞的我大所大所',
                src: ''
            },
            topImgList: [
                {
                    src: require('../assets/image/video1.jpg'),
                    preSrc: '',
                    afterSrc:''
                },
                {
                    src: require('../assets/image/video2.jpg'),
                    preSrc: '',
                    afterSrc:''
                }
                
            ],
        }
    },
    methods:{
        changeImg(index){
            let self = this;
            let nowIndex = index;
            let preIndex = index > 0 ? index - 1: self.topImgList.length - 1;
            let afterIndex = index >= self.topImgList.length - 1 ? 0 : index + 1;
            
            self.topImgList[index].preSrc = self.topImgList[preIndex].src;
            self.topImgList[index].afterSrc = self.topImgList[afterIndex].src;
        }
    },
    mounted(){
        let self = this;
        self.topImgList[0].preSrc = self.topImgList[self.topImgList.length-1].src;
        self.topImgList[0].afterSrc = self.topImgList[1].src;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .vide-play-img {
        height: 235px;
        margin-top: 70px;
    }
    .vide-play-img .wc-slide {
        width: 100%;
        position: relative;
    }
    .vide-play-img .vide-play-img-center {
        width: 235px;
        height: 235px;
        margin: 0px auto;
        position: relative;
        display: block;
    }
    .vide-play-img-right {
        position: absolute;
        opacity: .7;
        top:0;
        width: 100px;
        height: 160px;
        width: 124px;
        margin-top: 38px;
        right: -75px;
    }
    .vide-play-img-left {
        position: absolute;
        opacity: .7;
        top:0;
        width: 100px;
        border: 1px solid red;
        height: 160px;
        width: 124px;
        margin-top: 38px;
        left: -75px;
    }
    .vide-play-title {
        margin: 0;
        font-size: 24px;
        color: #2E3442;
        text-align: center;
        margin-top: 26px;
    }
    .vide-play-text {
        font-size: 13px;
        color: #AFB1B4;
        text-align: center;
        margin-top: 6px;
    }
</style>
