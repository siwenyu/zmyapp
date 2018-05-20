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
    name: 'focuserror',
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
            errorSrc: require('../assets/image/focuserror.jpg'),
            errorTip: false,
        }
    },
    methods:{
        clickBtn(){
            this.$router.push({path:  '/index'});
            this.showEntry = false;
        },
        routerback: function () {
            this.$router.back(-1);
        },
    },
    mounted(){
        
    },
    beforeDestroy(){

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
