<template>
    <div class="water-div" :style="{ width: '100%' }">
        <div 
        v-for="(item, index) in imgList" 
        :key="index"
        :style="{ width: '50%', display: 'inline-block' }">
            img
        </div>
    </div>
</template>

<script>
export default {
    name: 'waterFull',
    data () {
        return {
            imgList:[
                {
                    list: [
                        {
                            src: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
                            text: '这是文本'
                        },
                        {
                            src: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
                            text: '这是文本'
                        },
                        {
                            src: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
                            text: '这是文本'
                        },
                        {
                            src: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
                            text: '这是文本'
                        }
                    ],
                },
                {
                    list: [
                        {
                            src: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
                            text: '这是文本'
                        },
                        {
                            src: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
                            text: '这是文本'
                        },
                        {
                            src: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
                            text: '这是文本'
                        },
                        {
                            src: 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
                            text: '这是文本'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .water-div {
        display: inline-block;
    }
</style>
