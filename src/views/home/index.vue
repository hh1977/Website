<template>
    <div>
        <el-carousel trigger="click" height="500px" @change="loadAnimate">
            <el-carousel-item v-for="(item,index) in sliderList" :key="index">
                <figure>
                    <img :src="'../../static/img/slider/'+item.img" width="100%"/>
                    <figcaption>
                        <h1 :class="{ bounceInDown:slider_index==index }">{{ item.title }}</h1><br>
                        <p :class="{ fadeInUp:slider_index==index }">{{ item.abstract }}</p><br>
                        <router-link :to="item.link">
                            <el-button class="slider-button" round :class="{ fadeInUp:slider_index==index }">了解详情 >></el-button>
                        </router-link>
                    </figcaption>
                </figure>
            </el-carousel-item>
        </el-carousel>
        <ul class="home-kind">
            <li v-for="(item,index) in kind" :key="index">
                <h3>{{ item.title }}<div></div></h3>
                <p>{{ item.info }}</p>
            </li>
        </ul>
        <div class="home-service">
            <h1>丰富的应用场景，最优的解决方案</h1>
            <p>引进与吸收了国内外数十位行业资深人才，聚集行业先进的产品与技术，满足不同的客户需求并提供最优解决方案，共创价值</p>
            <ul>
                <li v-for="(item,index) in services" :key="index">
                    <div class="service-box">
                        <img :src="`../../../static/img/services/${index+1}.jpg`">
                        <div class="service-info"><p>{{ item.info }}</p></div>
                    </div>
                    <br>
                    <p>{{ item.title }}</p>
                </li>
            </ul>
        </div>
        <div class="home-friends">
            <div class="friends-container">
                <h1>合作伙伴</h1>
                <ul>
                    <li v-for="item in 6" :key="item">
                        <img :src="`../../../static/img/friends/clients-logo0${item}.png`">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { home } from '../../http/home';

export default {
    name: "Home",
    data(){
        return {
            slider_index: 0,
            sliderList: [
                {
                    title: '加盟宁夏节能，开启财富之门',
                    abstract: '诚邀您的加盟',
                    img: 'slider01.jpg',
                    link: ''
                },
                {
                    title: '智慧能管平台',
                    abstract: '基于物联网、大数据、区块链等先进技术',
                    img: 'slider02.jpg',
                    link: ''
                },
                {
                    title: '能源服务大厅',
                    abstract: '根据地式能源服务，快速高效响应服务',
                    img: 'slider03.jpg',
                    link: ''
                }
            ],
            kind:[
                {
                    title: '构建能源服务生态图',
                    info: '让天下企业用“好”能源'
                },
                {
                    title: '智慧能管平台',
                    info: '基于物联网、大数据、区块链等先进技术'
                },
                {
                    title: '能效产品',
                    info: '汇聚行业先进能效产品与技术'
                },
                {
                    title: '根据地式能源服务大厅',
                    info: '为您提供多种多样的综合服务'
                }
            ],
            services:[
                {
                    title: '政府机构',
                    info: '“纵向到企业、横向跨行业、覆盖全工业”，实现供给侧与需求侧双向互动。'
                },
                {
                    title: '服务机构',
                    info: '提供平台、智能终端、能效产品与新技术，实现“能源互联网+售电+能源服务”的综合能源服务。'
                },
                {
                    title: '能源用户',
                    info: '提供能源管理系统装备、技术、人才的整体服务解决方案，降低生产成本，提高竞争力。'
                }
            ]
        }
    },
    created(){
        this.$emit('headFix', ['fixed',false]);
        // home()
        // .then(data=>{
        //     console.log(data)
        // })
        // .catch(err => {
        //     this.$message.error(err.message);
        // });
    },
    methods:{
        loadAnimate(index){
            this.slider_index = index;
        }
    }
}
</script>
<style lang="scss" scoped>
    @mixin self_icon {
        &::before {
            border-left: 50px solid #DADADA;
            border-right: 50px solid #DADADA;
            bottom: 0;
            content: "";
            height: 1px;
            margin-left: -70px;
            position: absolute;
        }
        &::after {
            background: #FF8724 none repeat scroll 0 0 padding-box content-box;
            border-bottom: 1px solid #DADADA;
            border-left: 1px solid #DADADA;
            bottom: -10px;
            content: "";
            left: 50%;
            margin-left: -16px;
            padding: 0 0 8px 8px;
            position: absolute;
            transform: rotate(-45deg);
        }
    }
    figure {
        color: #ffffff;
        text-align: left;
        &::before {
            background: rgba(0, 0, 0, 0.4) none repeat scroll 0 0;
            content: "";
            height: 100%;
            position: absolute;
            width: 100%;
        }
        figcaption {
            bottom: 0;
            left: 6%;
            margin: 0 auto;
            position: absolute;
            right: 6%;
            top: 40%;
            width: 1170px;
            padding: 0 15px;
            h1 {
                font-size: 46px;
            }
            p {
                font-size: 18px;
                font-weight: 400;
            }
            .slider-button {
                background-color: #FE8724;
                border-color: #FE8724;
                color: #ffffff;
                width: 180px;
                height: 40px;
                font-size: 18px;
                transition: transform 2s;
                &:hover {
                    transform: translateY(10px);
                }
            }
        }
    }
    .home-kind {
        box-sizing: border-box;
        background-color: #EBEEF5;
        padding: 0 5%;
        display: flex;
        li {
            padding: 1%;
            text-align: left;
            position: relative;
            box-sizing: border-box;
            width: 25%;
            h3{
                display: inline-block;
                div {
                    margin-top: 1%;
                    height: 2px;
                    width: 40px;
                    background-color: #0984E3;
                }
            }
            p {
                margin-top: 1.5%;
                font-size: 14px;
                color: gray;
            }
            h3>div {
                transition: width .5s;
            }
            &:hover {
                background-color: #ffffff;
                transition: background-color .5s;
                h3>div{
                    width: 100%;
                }
            }
            &:not(:first-child)::before {
                content: '';
                position: absolute;
                width: 1px;
                height: 80%;
                left: 0;
                background-color: #D6D6D6;
            }
            
        }
    }
    .home-service {
        margin-top: 3%;
        h1 {
            position: relative;
            @include self_icon;
            &::before {
                left: 49.9%;
                top: 174%;
                width: 43px;
            }
            &::after {
                height: 22px;
                left: 50%;
                top: 140%;
                width: 22px;
            }
        }
        &>p {
            margin-top: 5%;
            color: gray;
        }
        ul {
            margin-top: 5%;
            padding: 0 10%;
            display: grid;
            grid-template-columns: repeat(3,33.33333%);
            li {
                .service-box {
                    margin-left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    overflow: hidden;
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    img, .service-info {
                        transition: all 0.4s ease-in-out 0s;
                    }
                    &:hover {
                        img, .service-info {
                            transform: translateX(-80%);
                        }
                    }
                    img {
                        width: 100%;
                        height: auto;
                    }
                    .service-info {
                        width: 80%;
                        height: 100%;
                        background: #f1f1f1;
                        padding: 20% 25% 0 5%;
                        position: absolute;
                        top: 0;
                        right: -110%;
                        p {
                            font-weight: 600;
                        }
                    }
                }
            }
        }
    }
    .home-friends {
        margin-top: 5%;
        height: 35vh;
        padding: 20px 0;
        background: url(../../../static/img/head-view/clients-bg.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        &::before {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            content: "";
            left: 0;
            top: 0;
        }
        .friends-container {
            padding-right: 15px;
            padding-left: 15px;
            position: relative;
            h1 {
                font-size: 45px;
                color: #ffffff;
                @include self_icon;
                &::before {
                    left: 50%;
                    top: 144%;
                    width: 29.5px;
                }
                &::after {
                    height: 12px;
                    left: 50%;
                    top: 130.5%;
                    width: 12px;
                }
            }
            ul {
                display: flex;
                margin-top: 5%;
                position: absolute;
                margin-left: 50%;
                transform: translateX(-50%);
            }
        }
    }
// 动画类
.bounceInDown {
    animation: bounceInDown 1s linear;
}
.fadeInUp {
    animation: fadeInUp 1s linear;
}
</style>
