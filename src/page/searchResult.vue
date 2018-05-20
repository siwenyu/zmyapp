<template>
    <div class="search-result-container">
        <div class="search-result-tip">
            <img width="100%" height="100%" :src="errorSrc">
            <!-- <button class="am-btn am-btn-success">
                <am-icon type="exclamation-triangle" color="warning"></am-icon>抱歉，暂无搜索结果 ^_^
            </button> -->
        </div>
        <div class="search-result-btn-block" @click="routerback">
            <am-button class="search-result-btn" :round="true" color="secondary">点击返回</am-button>
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
    name: 'searchResult',
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
            errorSrc:imgData.errorImg[0].src,
            errorTip: false,
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
        setInterval(function(){
            if(self.errorTip) {
                self.errorSrc = imgData.errorImg[0].src;
            }else {
                self.errorSrc = imgData.errorImg[1].src;
            }
            
            self.errorTip = !self.errorTip;
        }, 600);
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
    .search-result-container {
        padding-top: 0;
    }
    .search-result-tip {
        text-align: center;
        margin: 30px;
    }
    .am-btn-success i {
        margin-right: 5px;
    }
    .search-result-btn-block {
        position: absolute;
        left: 50%;
        bottom: 25%;
    }
    .search-result-btn-block .search-result-btn {
        margin-top: -50%;
        margin-left: -50%;
        border: none;
        padding: 8px 30px;
        background-image: linear-gradient(-90deg, #6EC6FC 0%, #45CEBD 100%);
    }
</style>
