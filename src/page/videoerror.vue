<template>
    <div class="video-error-container">
        <div class="video-error-tip">
            <img width="100%" height="100%" :src="errorSrc">
        </div>
        <div class="video-error-btn-block" @click="routerback">
            <am-button class="video-error-btn" :round="true" color="secondary">点击返回</am-button>
        </div>
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
    name: 'diserror',
    components: {
        bottomFooter, search, top
    },
    data () {
        return {
            curSlide: 0,
            title: '搜索结果',
            defaultFalse: false,
            defaultTrue: true,
            showEntry: false,
            errorSrc:imgData.videoErrorImg[0].src,
            errorTip: false,
            nowData: {
                title: '这是老师',
                text: '这是街舞的我大所大所',
                src: ''
            },
            timer: '',
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
        }
    },
    methods:{
        changeImg(index){
            if(index==2) {
                this.showEntry = true;
            }else {
                this.showEntry = false;
            }
        },
        clickBtn(){
            this.$router.push({path:  '/index'});
            this.showEntry = false;
        },
        notify() {
            this.$notify({
                message: '这是一条提示信息',
                type: 'error',
                delay: 1000
            });
        },
        routerback: function () {
            this.$router.back(-1);
        },
    },
    mounted(){
        let self = this;
        // setTimeout(function(){
        //     self.$router.back(-1);
        // }, 2000);
        let i = 0;
        self.timer = setInterval(function(){
            self.errorSrc = imgData.videoErrorImg[i].src;
            i += 1;
            if(i > 2) {
                i = 0;
            }
        }, 600);
    },
    beforeDestroy(){
        clearTimeout(this.timer);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

<style scoped>
    .guide-active {
        background-image: linear-gradient(-90deg, #6EC6FC 0%, #45CFBE 100%);
        opacity: 1;
        color: #fff;
        position: fixed;
        right:15px;
        bottom: 50px;
        z-index:10;
    }
    .guide .wc-pagination {
        bottom: 50px;
    }
    .video-error-container {
        padding-top: 0;
    }
    .video-error-tip {
        text-align: center;
        margin: 30px;
    }
    .am-btn-success i {
        margin-right: 5px;
    }
    .video-error-btn-block {
        position: absolute;
        left: 50%;
        bottom: 25%;
    }
    .video-error-btn-block .video-error-btn {
        margin-top: -50%;
        margin-left: -50%;
        border: none;
        padding: 8px 30px;
        background-image: linear-gradient(-90deg, #6EC6FC 0%, #45CEBD 100%);
    }
</style>
