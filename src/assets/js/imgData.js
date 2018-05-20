/**
 * @file 项目共用的工具类
 */
/* eslint-disable */
import tool from  '@/assets/js/tool.js'
export default {
    
    topImgList: [
        {
            src: require('../image/indextop1.jpg'),
        },
        {
            src: require('../image/indextop2.jpg'),
        },
        {
            src: require('../image/indextop3.jpg'),
        }
    ],
    srcSImg: [
        {
            src: require('../imglist/limgs1.jpg'),
            type: 's',
            srcIndex: 0,
            title: '镶金葫芦',
            author: '张红新',
            time: tool.randomNum(1, 24),
            authorId:0,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgs2.jpg'),
            type: 's',
            srcIndex: 1,
            title: '禅定',
            author: '郭巷',
            time: tool.randomNum(1, 24),
            authorId:1,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgs3.jpg'),
            type: 's',
            srcIndex: 2,
            title: '琉璃光宝',
            author: '艾新成',
            time: tool.randomNum(1, 24),
            authorId:3,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgs4.jpg'),
            type: 's',
            srcIndex: 3,
            title: '佛牌',
            author: '兴元',
            time: tool.randomNum(1, 24),
            authorId:4,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgs5.jpg'),
            type: 's',
            srcIndex: 4,
            title: '神萝卜',
            author: '杨鹏',
            time: tool.randomNum(1, 24),
            authorId:5,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]

        },
        {
            src: require('../imglist/limgs6.jpg'),
            type: 's',
            srcIndex: 5,
            title: '白玉刀',
            author: '张磊',
            time: tool.randomNum(1, 24),
            authorId:6,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgs7.jpg'),
            type: 's',
            srcIndex: 6,
            title: '佛人归去',
            author: '赵梦圆',
            time: tool.randomNum(1, 24),
            authorId:7,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgs8.jpg'),
            type: 's',
            srcIndex: 7,
            title: '刀光剑影',
            author: '郑思楠',
            time: tool.randomNum(1, 24),
            authorId:8,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgs9.jpg'),
            type: 's',
            srcIndex: 8,
            title: '指环王',
            author: '曹欣',
            time: tool.randomNum(1, 24),
            authorId:0,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgs10.jpg'),
            type: 's',
            srcIndex: 9,
            title: '翡翠指环',
            author: '范亚楠',
            time: tool.randomNum(1, 24),
            authorId:1,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        }

    ],
    srcBimg: [
        {
            src: require('../imglist/limgbig1.jpg'),
            type: 'big',
            srcIndex: 0,
            title: '红玉之心',
            author: '卢亚楠',
            time: tool.randomNum(1, 24),
            authorId:2,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgbig2.jpg'),
            type: 'big',
            srcIndex: 1,
            title: '白象',
            author: '小黑',
            time: tool.randomNum(1, 24),
            authorId:3,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgbig3.jpg'),
            type: 'big',
            srcIndex: 2,
            title: '平安无相',
            author: '李旭',
            time: tool.randomNum(1, 24),
            authorId:4,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgbig4.jpg'),
            type: 'big',
            srcIndex: 3,
            title: '白度母',
            author: '王倩倩',
            time: tool.randomNum(1, 24),
            authorId:5,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgbig5.jpg'),
            type: 'big',
            srcIndex: 4,
            title: '瓜棱提梁壶',
            author: '驴旭',
            time: tool.randomNum(1, 24),
            authorId:6,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgbig6.jpg'),
            type: 'big',
            srcIndex: 5,
            title: '真人下凡',
            author: '东北师大',
            time: tool.randomNum(1, 24),
            authorId:7,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgbig7.jpg'),
            type: 'big',
            srcIndex: 6,
            title: '金辉独身',
            author: '东师美术',
            time: tool.randomNum(1, 24),
            authorId:8,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgbig8.jpg'),
            type: 'big',
            srcIndex: 7,
            title: '佛之相',
            author: '设计学院',
            time: tool.randomNum(1, 24),
            authorId:0,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgbig9.jpg'),
            type: 'big',
            srcIndex: 8,
            title: '青玉雕',
            author: '徐凯',
            time: tool.randomNum(1, 24),
            authorId:1,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        },
        {
            src: require('../imglist/limgbig10.jpg'),
            type: 'big',
            srcIndex: 9,
            title: '红宝书',
            author: '斯文',
            time: tool.randomNum(1, 24),
            authorId:2,
            numData: [
                {
                    num: tool.randomNum(300, 1000),
                    type: 'scan',
                    src: require('../image/eye.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'msg',
                    src: require('../image/msg.svg')
                },{
                    num: tool.randomNum(0, 100),
                    type: 'fire',
                    src: require('../image/fire.svg'),
                    activeMove: false
                }
            ]
        }

    ],
    classifyImg:[
        {
            src: require('../classify/person.jpg'),
            numData:[
                {
                    num: tool.randomNum(100, 1000),
                    type: 'msg',
                    active: false
                },
                {
                    num: tool.randomNum(100, 1000),
                    type: 'fire',
                    active: false
                }
            ],
            title: '人物',
            sub: '玉雕艺术'

        },
        {
            src: require('../classify/bird.jpg'),
            numData:[
                {
                    num: tool.randomNum(100, 1000),
                    type: 'msg',
                    active: false
                },
                {
                    num: tool.randomNum(100, 1000),
                    type: 'fire',
                    active: false
                }
            ],
            title: '鸟兽',
            sub: '玉雕艺术'

        },
        {
            src: require('../classify/other.jpg'),
            numData:[
                {
                    num: tool.randomNum(100, 1000),
                    type: 'msg',
                    active: false
                },
                {
                    num: tool.randomNum(100, 1000),
                    type: 'fire',
                    active: false
                }
            ],
            title: '其他',
            sub: '玉雕艺术'

        }
    ],
    personData:{
        person:{
            src: require('../person/person.png'),
            scan: tool.randomNum(300, 1000),
            vote: tool.randomNum(50, 200),
            name: '赵梦圆',
            tag: '玉雕爱好者',
            focus: 8,
            fensi: 5
        },
        list:[
            {
                src: require('../person/person.png'),
                scan: tool.randomNum(300, 1000),
                vote: tool.randomNum(50, 200),
                srcIndex: 0,
                name: '赵梦圆',
                tag: '玉雕爱好者',
                title: '曹欣',
                t1: '北京',
                discuss: '喜欢。',
                lastTime: tool.randomNum(0, 60) + '分钟前',
                scanType: 'big',
                focus: 8,
                fensi: 5,
                works: tool.randomNum(1, 20),
                isfocus: false
            },
            {
                src: require('../person/p2.jpg'),
                title: '李旭',
                scan: tool.randomNum(300, 1000),
                vote: tool.randomNum(50, 200),
                srcIndex: 1,
                t1: '重庆',
                name: '小菲',
                tag: '玉雕爱好者',
                discuss: '与其他工艺相比，玉雕做的是减法，一刀下去就无法改变，现在，好的原料越来越少，这就要求我们在工艺上更加精益求精，这样才能赢得客户的信赖。',
                lastTime: tool.randomNum(0, 60) + '分钟前',
                scanType: 'big',
                focus: 8,
                fensi: 5,
                works: tool.randomNum(1, 20),
                isfocus: false
            },
            {
                src: require('../person/p3.jpg'),
                title: '王倩倩',
                srcIndex: 2,
                t1: '贵州',
                name: '悄悄猫',
                tag: '玉雕爱好者',
                scan: tool.randomNum(300, 1000),
                vote: tool.randomNum(50, 200),
                discuss: '质地细腻油润，整体光洁纯净，无瑕疵、无石筋、无裂纹，观之如凝脂，手感十分温润细滑为上品，价值很高。',
                lastTime: tool.randomNum(0, 60) + '分钟前',
                scanType: 'big',
                focus: 8,
                fensi: 5,
                works: tool.randomNum(1, 20),
                isfocus: false
            },
            {
                src: require('../person/p4.jpg'),
                title: '卢亚楠',
                srcIndex: 3,
                t1: '山西',
                name: '大中华',
                tag: '玉雕爱好者',
                scan: tool.randomNum(300, 1000),
                vote: tool.randomNum(50, 200),
                discuss: '这块玉雕材质非常棒这块玉雕材质非常棒。',
                lastTime: tool.randomNum(0, 60) + '分钟前',
                scanType: 'big',
                focus: 8,
                fensi: 5,
                works: tool.randomNum(1, 20),
                isfocus: false
            },
            {
                src: require('../person/p5.jpg'),
                title: '小黑',
                srcIndex: 4,
                t1: '北京',
                name: '江南水乡',
                tag: '玉雕爱好者',
                scan: tool.randomNum(300, 1000),
                vote: tool.randomNum(50, 200),
                discuss: '玉雕是玉文化的精髓，一块玉雕作品，光看材质是不够的，雕工非常重要，好的雕工和创意可以让人忽视玉石本来的问题。',
                lastTime: tool.randomNum(0, 60) + '分钟前',
                scanType: 'big',
                focus: 8,
                fensi: 5,
                works: tool.randomNum(1, 20),
                isfocus: false
            },
            {
                src: require('../person/p6.jpg'),
                title: '东师美术',
                srcIndex: 5,
                t1: '大连',
                name: '苟',
                tag: '玉雕爱好者',
                scan: tool.randomNum(300, 1000),
                vote: tool.randomNum(50, 200),
                discuss: '雕刻侧脸佛像，只是很小很小的一次改变',
                lastTime: tool.randomNum(0, 60) + '分钟前',
                scanType: 's',
                focus: 8,
                fensi: 5,
                works: tool.randomNum(1, 20),
                isfocus: false
            },
            {
                src: require('../person/p7.png'),
                title: '设计学院',
                srcIndex: 6,
                t1: '澳门',
                name: '美丽的春天',
                tag: '玉雕爱好者',
                scan: tool.randomNum(300, 1000),
                vote: tool.randomNum(50, 200),
                discuss: '玉雕是中国最古老的雕刻品种之一。玉石经加工雕琢成为精美的工艺品，称为玉雕。工艺师在制作过程中，根据不同玉料的天然颜色和自然形状，经过精心设计、反复琢磨，才能把玉石雕制成精美的工艺品。',
                lastTime: tool.randomNum(0, 60) + '分钟前',
                scanType: 's',
                focus: 8,
                fensi: 5,
                works: tool.randomNum(1, 20),
                isfocus: false
            },
            {
                src: require('../person/p8.png'),
                title: '郑思楠',
                srcIndex: 7,
                t1: '郑州',
                name: '过客',
                tag: '玉雕爱好者',
                scan: tool.randomNum(300, 1000),
                vote: tool.randomNum(50, 200),
                discuss: '这个作品简直太棒了',
                lastTime: tool.randomNum(0, 60) + '分钟前',
                scanType: 's',
                focus: 8,
                fensi: 5,
                works: tool.randomNum(1, 20),
                isfocus: false
            },
            {
                src: require('../person/p1.png'),
                title: '赵云飞',
                srcIndex: 8,
                t1: '南京',
                name: '莉莉',
                tag: '玉雕爱好者',
                scan: tool.randomNum(300, 1000),
                vote: tool.randomNum(50, 200),
                discuss: '这块玉雕材质非常棒。',
                lastTime: tool.randomNum(0, 60) + '分钟前',
                scanType: 's',
                focus: 8,
                fensi: 5,
                works: tool.randomNum(1, 20),
                isfocus: false
            }
        ]
    },
    errorImg:[
        {
            src: require('../image/error1.jpg'),
        },
        {
            src: require('../image/error2.jpg'),
        }
    ],
    disErrorImg:[
        {
            src: require('../error/diserror1.jpg'),
        },
        {
            src: require('../error/diserror2.jpg'),
        },
        {
            src: require('../error/diserror3.jpg'),
        }
    ],
    videoErrorImg:[
        {
            src: require('../error/videoerror1.jpg'),
        },
        {
            src: require('../error/videoerror2.jpg'),
        },
        {
            src: require('../error/videoerror3.jpg'),
        }
    ],
    focusImg:[
        {
            src: require('../image/focus.png'),
            type: 'focus'
        },
        {
            src: require('../image/nofocus.png'),
            type: 'nofocus'
        }
    ],
    activeFire: require('../image/fireActive.svg'),
    fire: require('../image/fire.svg'),
    msg: require('../image/msg.svg'),
    eye: require('../image/eye.svg'),
    test:false
};
