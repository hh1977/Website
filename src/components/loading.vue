<template>
    <div class="mask" :style="{display: flag}">
        <div class="pacman"><div class="point"></div></div>
        <div class="dot"></div>
    </div>
</template>
<script>
export default {
    name: 'Loading',
    data(){
        return {
            flag: 'none'
        }
    },
    methods:{
        show(){
            this.flag = 'block';
        },
        hidden(){
            this.flag = 'none';
        }
    }
}
</script>

<style lang="scss" scoped>
    @mixin circle {
        content: '';
        position: absolute;
        left: 45%;
        top: 50%;
        background: #FFC107;
        width: 100px;
        height: 50px;
        margin-left: -50px;
    }
    .mask {
        position: absolute;
        z-index: 99999;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,.9);
        .pacman {
            .point {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: #000000;
                position: absolute;
                left: 45%;
                top: 45%;
            }
            &::before {
                @include circle;
                margin-top: -50px;
                border-radius: 50px 50px 0 0;
                animation: up 0.4s infinite;
            }
            &::after {
                @include circle;
                margin-top: -1px;
                border-radius: 0 0 50px 50px;
                animation: down 0.4s infinite;
            }
        }
        .dot {
            position: absolute;
            left: 47%;
            top: 50%;
            width: 15px;
            height: 15px;
            margin-top: -5px;
            margin-left: 30px;
            border-radius: 50%;
            background: #ccc;
            box-shadow: 30px 0 0 #ccc, 60px 0 0 #ccc, 90px 0 0 #ccc, 120px 0 0 #ccc, 150px 0 0 #ccc;
            animation: r-to-l 0.4s infinite;
        }
    }
// 动画
@keyframes up {
  0%, 100% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-30deg);
  }
}
@keyframes down {
  0%, 100% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(30deg);
  }
}
@keyframes r-to-l {
  100% {
    margin-left: -1px;
  }
}
</style>


