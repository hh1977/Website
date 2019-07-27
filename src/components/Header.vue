<template>
    <header :style="{backgroundColor: bg_color, position: hd_position}">
        <div>
            <div :class="{img_hover: hover_flag}" class="web_icon">
                <img src="../../static/img/brand-logo.png" alt="官网" @click="toHome">
            </div>
            <ul>
                <li v-for="(item,index) in titleList" :key="index" @click="selected(item.title)">
                    <router-link :to="item.link" :class="{active: active == item.title}">{{ item.title }}</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    props:{
        bg_color:{
            type: String,
            default: 'transparent'
        },
        hd_position:{
            type: String,
            default: 'fixed'
        },
        hover_flag:{
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            active: '首页',
            titleList:[
                {
                    title: '首页',
                    link: '/home'
                },
                {
                    title: '产品中心',
                    link: '/product'
                },
                {
                    title: '解决方案',
                    link: '#'        // '/solution'
                },
                {
                    title: '客户案例',
                    link: '#'        // '/customer'
                },
                {
                    title: '关于我们',
                    link: '#'       // '/about'
                },
                {
                    title: '500',
                    link: '/error-500'
                }
            ]

        }
    },
    mounted(){
        this.active = this.$route.meta.nav;
    },
    methods: {
        selected(title){
            this.active = title;
        },
        toHome(){
            this.$router.push('/home');
            this.active = '首页';
        }
    }
};
</script>

<style lang="scss" scoped>
    $white: #ffffff;
    @mixin rim {
        background: transparent none repeat scroll 0 0;
        content: "";
        height: 10px;
        position: absolute;
        width: 25px;
        visibility: hidden;
        transition: .3s ease;
        opacity: 0;
    }
    header {
        color: $white;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        padding: 2% 0;
        transition: background-color 1.5s;
        &>div {
            display: flex;
            justify-content: space-between;
            margin: 0 10%;
            .img_hover:hover {
                &::before {
                    content: "";
                    height: 555px;
                    width: 100%;
                    position: absolute;
                    left: 0%;
                    top: 0;
                    background-color: transparent;
                    background-image: -webkit-linear-gradient(-30deg, transparent 30%, #fff 50%, transparent 70%); /*设置渐变的背景，按对角线渐变*/
                    background-blend-mode: hard-light; /*设置背景为混合模式下的强光模式*/
                    background-size: 200%;
                    animation: shine 5s forwards; /*给背景添加动画改变位置*/
                }
            }
            .web_icon {
                img {
                    position: absolute;
                    z-index: inherit;
                    cursor: pointer;
                }
            }
            ul {
                font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
                font-weight: bold;
                display: flex;
                list-style: none;
                li {
                    margin-right: 5px;
                    box-sizing: border-box;
                    position: relative;
                    a {
                        display: block;
                        line-height: 20px;
                        padding: 6px 15px;
                        text-decoration:none;
                        box-sizing: border-box;
                        color: $white;
                        position: relative;
                        background-color: transparent;
                        text-transform: uppercase;
                        transition: .3s ease;
                        &.active {
                            color: #ff8724;
                            &::before {
                                visibility: visible;
                                opacity: 1;
                                left: 0;
                            }
                            &::after {
                                visibility: visible;
                                opacity: 1;
                                right: 0;
                            }
                        }
                        &:hover {
                            background: none;
                            color: #ff8724;
                            outline: none;
                            &::before {
                                visibility: visible;
                                opacity: 1;
                                left: 0;
                            }
                            &::after {
                                visibility: visible;
                                opacity: 1;
                                right: 0;
                            }
                        }
                        &::before{
                            @include rim;
                            border-left: 1px solid #FF8724;
                            border-top: 1px solid #FF8724;
                            top: 0;
                            left: -70px;
                        }
                        &::after {
                            @include rim;
                            border-right: 1px solid #FF8724;
                            border-bottom: 1px solid #FF8724;
                            bottom: 0;
                            right: 70px;
                        }
                    }
                }
            }
        }
    }
// 动画
@keyframes shine {
    from {background-position: 130%;}
    to {background-position: -50%;}
}
</style>
