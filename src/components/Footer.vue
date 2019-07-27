<template>
    <footer>
        <div class="foot-container">
            <div v-for="(item,index) in footList" :key="index" class="foot-left">
                <h2>{{ item.title }}</h2>
                <ul>
                    <li v-for="(sub_item,index) in item.subList" :key="index">
                        <router-link :to="sub_item.link">{{ sub_item.sub_title }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="foot-middle">
                <h2>联系我们</h2>
                <ul>
                    <li style="color: #FF8724;">
                        <span style="float:left;margin-right: 8px;"><i class="el-icon-location-outline"></i></span>
                        <div style="display: inline-block;">
                            银川市金凤区悦海新天地<br>14号办公楼1605-1607号
                        </div>
                    </li>
                    <li style="color: #67C23A;"><i class="el-icon-phone"></i>服务热线：400-878 6678</li>
                    <li style="color: #009688;"><i class="el-icon-printer"></i>传真：0756-3629670</li>
                </ul>
            </div>
            <div class="foot-right">
                <h2>概览</h2>
                <ul>
                    <li v-for="(item,index) in viewList" :key="index">
                        <router-link :to="item.link"><img :src="'../../static/img/foot-view/'+item.path" /></router-link>
                    </li>
                </ul>
                <h5><router-link to="">View More >></router-link></h5>
            </div>
        </div>
        <div class="foot-bottom">
            <div>© Copyrights 2018 宁夏节能投资有限公司. All rights reserved </div>
            <div>宁ICP备19000065号</div>
        </div>
    </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
        footList: [
            {
                title: '产品体系',
                subList:[
                    {
                        sub_title: '智能产品',
                        link: ''
                    },
                    {
                        sub_title: '能效',
                        link: ''
                    },
                    {
                        sub_title: '新能源',
                        link: ''
                    }
                ]
            },
            {
                title: '解决方案',
                subList:[
                    {
                        sub_title: '基于用户蓄电池分布式储能服务平台',
                        link: ''
                    },
                    {
                        sub_title: '城市能源管控服务云平台',
                        link: ''
                    },
                    {
                        sub_title: '需求侧能源管控平台',
                        link: ''
                    },
                    {
                        sub_title: '智慧水务管控一体化平台',
                        link: ''
                    }
                ]
            },
            {
                title: '关于我们',
                subList: [
                    {
                        sub_title: '了解我们',
                        link: ''
                    },
                    {
                        sub_title: '发展历程',
                        link: ''
                    },
                    {
                        sub_title: '奖项荣誉',
                        link: ''
                    },
                    {
                        sub_title: '新闻动态',
                        link: ''
                    }
                ]
            }
        ],
        viewList: [
            {
                path: 'flickr01.jpg',
                link: ''
            },
            {
                path: 'flickr02.jpg',
                link: ''
            },
            {
                path: 'flickr03.jpg',
                link: ''
            },
            {
                path: 'flickr04.jpg',
                link: ''
            },
            {
                path: 'flickr05.jpg',
                link: ''
            },
            {
                path: 'flickr06.jpg',
                link: ''
            },
            {
                path: 'flickr07.jpg',
                link: ''
            },
            {
                path: 'flickr08.jpg',
                link: ''
            }
        ]
    }
  }
};
</script>

<style lang="scss" scoped>
    footer {
        width: 100%;
        .foot-container {
            z-index: 1;
            background: #343434;
            width: 100%;
            padding: 3% 7%;
            box-sizing: border-box;
            display: flex;
            h2 {
                color: #fff;
                margin: 0 0 20px 0;
                font-size: 16px;
                font-family: "Open Sans", sans-serif;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            ul {
                li {
                    padding: 5px;
                    padding-left: 0;
                    padding-right: 0;
                    color: #969595;
                    font-size: 14px;
                }
            }
            .foot-left {
                margin-right: 5%;
                ul {
                    li {
                        padding: 10px;
                        border-top: 1px solid #3F3F3F;
                        a {
                            display: block;
                            color: #969595;
                            font-size: 14px;
                            text-decoration: none;
                            transition: all .3s;
                            &:hover {
                                color:#FF8724;
                                transform: scale(1.2);
                            }
                        }
                    }
                }
            }
            .foot-middle {
                margin-left: 3%;
                position: relative;
                text-align: left;
                &::before {
                    position: absolute;
                    content: '';
                    height: 80%;
                    width: 1px;
                    background-color: #3F3F3F;
                    left: -30px;
                    top: 10%;
                }
                ul>li>i{
                    margin-right: 8px;
                }
            }
            .foot-right {
                text-align: left;
                margin-left: 5%;
                ul {
                    display: grid;
                    grid-template-columns: repeat(4, 25%);
                    grid-template-rows: repeat(2, 42%);
                    gap: 3px;
                    li:hover {
                        animation: pulse .5s linear;
                    }
                }
                h5 {
                    text-align: right;
                    a {
                    color: #5FB878;
                        text-decoration: none;
                    }
                }
            }
        }
        .foot-bottom {
            background: #2F2F2F;
            padding: 15px 0;
            box-sizing: border-box;
            width: 100%;
            color: #969595;
            font-size: 14px;
            display: flex;
            justify-content: space-around;
        }
    }

</style>
