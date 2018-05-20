<template>
    <div :class="['index-search',{'index-search-bg': isbg}]">
        <!-- <form @submit="subInput">
            <am-input style="font-size: 14px !important;" type="search" v-model="searchVal" :class="[{'index-search-focus': isFocus }]" @blur="blurInput(searchVal)" @focus="focusInput(searchVal)"></am-input>
        </form> -->
        <div @click="subInput" class="index-search-input">
        请输入内容
        </div>
    </div>
</template>

<script>
import tool from  '@/assets/js/tool.js'
export default {
    name: 'search',
    props:['isbg'],
    data () {
        return {
            isFocus: false,
            searchVal: '请输入内容'
        }
    },
    methods:{
        focusInput(value){
            this.isFocus = true;
            if(value == '请输入内容') {
                this.searchVal = '';
            }
            this.$router.push({path:  '/searchResult', query:{'key': this.searchVal}});
        },
        subInput(value){
            this.$router.push({path:  '/searchResult', query:{'key': this.searchVal}});
            if(value == '') {
                this.searchVal = '请输入内容';
            }
        },
        blurInput(){
            this.isFocus = false;
        },
        
    },
    mounted(){
        // this.itemClick(this.getHighIndex());
        if(this.$route.query.key) {
            this.searchVal = this.$route.query.key;
        }
        if(this.$route.query.key == '请输入内容') {
            this.focusInput();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.index-search {
    width: 100%;
    position: absolute;
    top:10px;
    left:0px;
    padding: 0px 20px 0 20px;
    z-index:30;
}
.index-search .index-search-input {
    background: rgba(255,255,255,0.38);
    border: 1px solid #FFFFFF;
    border-radius: 100px;
    color: #fff;
    background: url('../assets/image/search.svg');
    background-repeat: no-repeat;
    background-position: 10px;
    padding-left: 35px;
    height: 30px;
    line-height: 30px;
    width: 100%;
}
.index-search .index-search-focus {
    /* background:#fff; */
    background: url('../assets/image/search.svg');
    background-repeat: no-repeat;
    background-position: 10px;
    color: #fff;
    
}
.index-search-bg {
    background-image: linear-gradient(-90deg, #6EC6FC 0%, #45CEBD 100%);
    top:0px;
    height: 56px;
    padding-top: 14px;
}
</style>
