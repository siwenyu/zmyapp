<template>
    <div class="top-bar">
        <div @click="pageBack" class="top-bar-back">
            <img src="../assets/image/back.png">
        </div>
        <div @click="pageIndex" class="top-bar-index">
            <am-icon size="sm" type="home"></am-icon>
        </div>
        {{title}}
        <div @click="topSearch" class="top-bar-search">
            <img src="../assets/image/search.svg">
        </div>
    </div>
</template>

<script>
import tool from  '@/assets/js/tool.js'
export default {
    props:[ 'title' ],
    name: 'top',
    data () {
        return {
            
        }
    },
    methods:{
        pageBack(){
            let self = this;
            self.$router.back(-1);
        },
        topSearch(){
            this.$router.push({path:  '/searchResult', query:{'key': this.searchVal}});
        },
        pageIndex(){
            this.$router.push({path:  '/index'});
        }
    },
    mounted(){
        // this.itemClick(this.getHighIndex());
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
.top-bar {
    background-image: linear-gradient(-90deg, #6EC6FC 0%, #45CEBD 100%);
    top:0px;
    height: 56px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 56px;
    padding-left: 56px;
    position: fixed;
    z-index: 2000;
    width: 100%;
    padding-right: 56px;
}
.top-bar-back {
    width: 40px;
    height: 56px;
    position: absolute;
    left: 0;
    top: 0;
}
.top-bar-index {
    width: 40px;
    height: 56px;
    position: absolute;
    left: 40px;
    top: 3px;
}

.top-bar-search{
    width: 56px;
    height: 56px;
    position: absolute;
    right: 0;
    top: 0;
}

</style>
