<template>
    <div class="nav-footer">
        <ul class="am-nav nav-footer-ul am-nav-pills am-nav-justify">
            <li 
                @click="itemClick(index)" 
                v-for="(item, index) in list" 
                :key="index + 'footer'" 
                :class="['m-active', 'animate']" >
                <div 
                :class="[ {'pulse': list[index].active}, {'opacityA': list[index].opacityA}]">
                    <img :src="item.img">
                    <br />
                    {{ item.text}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import tool from  '@/assets/js/tool.js'
export default {
    name: 'bottomFooter',
    data () {
        return {
            list:[{
                text: '首页',
                img: require('../assets/image/icon1.svg'),
                active: false,
                opacityA: false,
                pathNameA: 'index',
                pathAll: ['index']
            },{
                text: '分类',
                img: require('../assets/image/icon2.svg'),
                active: false,
                opacityA: false,
                pathNameA: 'classify',
                pathAll: ['classify', 'allworks']
            },{
                text: '视频',
                img:  require('../assets/image/icon3.svg'),
                active: false,
                opacityA: false,
                pathNameA: 'videoA',
                pathAll: ['videoA', 'videoPlay', 'videoerror']
            },{
                text: '我的',
                img:  require('../assets/image/icon4.svg'),
                active: false,
                opacityA: false,
                pathNameA: 'pcenter',
                pathAll: ['pcenter', 'myfocus']
            }]
        }
    },
    methods:{
        itemClick(n){
            let nowIndex = n;
            let self = this;
            self.$router.push({path:  '/' + self.list[nowIndex].pathNameA});
        },
        opacityAOne(index){
            let self = this;
            self.list.forEach(function(item, index){
                self.list[index].opacityA = false;
            });
            self.list[index].opacityA = true;
            self.list = tool.deepCopy(self.list);
        },
        getHighIndex(){
            // 查找路由index
            let self = this;
            let nowIndex = 0;
            self.list.forEach(function(item, index){
                item.pathAll.forEach(function(itemItem, indexIndex){
                    if (self.$root._route.name == itemItem) {
                        nowIndex = index;
                    }
                })
                
            });
            return nowIndex;
        },
        firstRender(){
            let self = this;
            let nowIndex = self.getHighIndex();
            self.list[nowIndex].active = true; 
            self.list = tool.deepCopy(self.list);
            setTimeout(function(){
                self.list.forEach(function(item, index){
                    self.list[index].active = false;
                });
            }, 500);
            self.list = tool.deepCopy(self.list);
            self.opacityAOne(nowIndex);
        }
    },
    mounted(){
        // this.itemClick(this.getHighIndex());
        this.firstRender();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .nav-footer {
        height: 56px;
        width: 100%;
        position: fixed;
        bottom: 0;
        text-align: center;
    }
    .nav-footer li {
        width: 23%;
        position: relative;
    }
    .nav-footer img{
        height: 26px;
        margin:0px auto;
        margin-left: 5px;
    }
    .nav-footer .am-nav-justify>li {
        display: inline-block;
    }
    .nav-footer .am-nav-justify>li div {
        opacity: .5;
    }
    .nav-footer-ul {
        width: 100%;
        box-shadow: 0 -1px 0 0 rgba(203,200,200,0.50);
        padding-top: 10px;
        font-size: 10px;
        height: 56px;
        background: #fff;
    }
    .nav-footer .am-nav-justify>li div.opacityA {
        opacity: 1;
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
