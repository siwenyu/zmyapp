<template>
    <div>
        <top :title="title"></top>

        <div class="pc-info">
            <am-row>
                <am-col :span="5" 
                :offset="2"
                >
                <img width="100%" :src="person.src">
                </am-col>
                <am-col :span="5" 
                >
                <div @click="fensiClick" class="pc-info-t1">
                    {{ person.fensi }}
                </div>
                <div @click="fensiClick" class="pc-info-t2">
                    粉丝
                </div>
                <div @click="focusClick" class="pc-info-t1">
                    {{ person.focus }}
                </div>
                <div @click="focusClick" class="pc-info-t2">
                    关注
                </div>
                <div class="pc-info-t5">
                    {{ person.name }}
                </div>
                <div class="pc-info-t2">
                    {{ person.tag }}
                </div>
                </am-col>
            </am-row>
        </div>
        <am-row class="pc-btns">
            <am-col :span="10" :offset="2">
                <div class="pc-btn-block">
                    <am-button 
                    v-for="(item, index) in btnList" 
                    :key="index + 'btn'" @click="clickBtn(index)" 
                    :class="['pc-btn', {'pc-btn-active': item.active}]"> {{ item.text }} </am-button>
                </div>
            </am-col>
        </am-row>
        <div class="pc-lists">
            <am-row class="pc-list" v-for="(item, index) in pList" :key="index + 'p'">
                <am-col :span="10" :offset="2">
                    <am-row>
                        <am-col :span="4">
                            <img @click="otherClick(item)" :src="item.src" width="100%">
                        </am-col>
                        <am-col :span="8">
                            <div class="pc-info-t7">
                                {{ item.title }}
                            </div>
                            <div class="pc-info-t8">
                                <span class="pc-info-t9">{{ item.t1 }}</span>
                                <span>{{ item.tag }}</span>
                            </div>
                        </am-col>
                    </am-row>
                </am-col>
            </am-row>
        </div>


        <bottomFooter>
        </bottomFooter>
        
    </div>
</template>

<script>
import bottomFooter from '@/components/bottomFooter'
import top from '@/components/top'

import tool from  '@/assets/js/tool.js'
import imgData from  '@/assets/js/imgData.js'

export default {
    name: 'pcenter',
    components: {
        bottomFooter, top
    },
    data () {
        return {
            defaultTrue: true,
            title: '我的',
            person:{},
            pListSorce:[],
            pListRandom:[],
            pList:[],
            btnList: [{
                text: '浏览记录',
                active: true,
            },{
                text: '我的喜欢',
                active: false,
            }
            ],
        }
    },
    methods:{
        clickBtn(n) {
            let self = this;
            self.btnList.forEach(function(item, index){
                index == n ? self.btnList[index].active = true : self.btnList[index].active = false;
            });
            self.btnList = tool.deepCopy(self.btnList);
            self.changeImg(n);
            
        },
        changeImg(index){
            index == 0 ? this.pList = this.pListSorce: this.pList = this.pListRandom;
        },
        otherClick(item){
            this.$router.push({path:  '/authorc', query:{'authorId': item.srcIndex, 'scanType': item.scanType}});
        },
        fensiClick(){
            console.log();
            this.$router.push({path:  '/myfensi'});
        },
        focusClick(){
            this.$router.push({path:  '/myfocus'});
            console.log();
        }
    },
    mounted(){
        this.person = imgData.personData.list[0];
        this.pListSorce = imgData.personData.list.slice(0,imgData.personData.list.length - 1);
        this.pListRandom = tool.randomsSortArr(imgData.personData.list.slice(0,imgData.personData.list.length - 1));
        this.pList = this.pListSorce;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .pc-info {
        margin-top: 83px;
        margin-bottom: 30px;
    }
    .pc-info-t1 {
        font-size: 16px;
        color: #2E3442;
    }
    .pc-info-t2 {
        font-size: 13px;
        color: #AFB1B4;
        margin-bottom: 10px;
    }
    .pc-info-t5 {
        font-size: 24px;
        color: #2E3442;
        margin-top: 15px;
    }
    .pc-info-t7 {
        font-size: 16px;
        color: #2E3442;
        margin-bottom: 3px;
        margin-top: 3px;
    }
    .pc-info-t8 {
        font-size: 13px;
        color: #AFB1B4;
    }
    .pc-info-t9 {
        margin-right: 10px;
    }
    .pc-btn-block {
        background: #F0F1F3;
        border: 1px solid #E1E1E1;
        border-radius: 2px;
        width: fit-content;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        display: inline-block;
        margin-bottom: 12px;

    }
    .pc-btn-block .pc-btn {
        border: none;
        border-radius: 0;
        width: 100px;
        height: 33px;
        background: #fff;
        color: #000;
    }
    .pc-btn-block .pc-btn-active {
        background-image: linear-gradient(-90deg, #6EC6FC 0%, #45CFBE 100%);
        color: #fff;
    }
    .pc-lists {
        margin-bottom: 56px;
    }
    .pc-lists img {
        border-radius: 4px; 
    }
    .pc-list .am-g {
        border-top: 1px solid #E3E4E5;
        padding-top: 18px;
        margin-bottom: 18px;
    }
    .pc-list .am-g .am-u-sm-4 {
        padding-left: 0;
    }
    .pc-btns .am-u-sm-10{
        padding-left: 0;
    }
    .pc-info .am-u-sm-offset-2 {
        padding-left: 0;
    }
</style>
