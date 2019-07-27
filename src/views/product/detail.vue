<template>
    <div class="product-detail">
        <figure>
            <figcaption>
                <h1>智能用电终端</h1><br>
                <p></p>
            </figcaption>
            <img :src="`../../../static/img/product/work0${$route.params.id}.jpg`" width="100%" height="500px">
        </figure>
        <div class="detail-content">
            <div class="detail-block">
                <div class="elem-quote"><h2>产品概述</h2></div>
                <div class="product-info">
                    智能用电终端是一种用于电能监测和控制的集成系统，采用标准的19英寸机架式结构，可以同时实现6路交流采样、6路控制、6路报警、6路遥信、6路温度测量和6路直流模拟量测量的功能，系统内部采用了工控机，除了远程检测和远程控制功能外，还可实现当地显示和当地控制的功能，是一种理想的企业级用电行为管控和自动需求响应工具。
                </div>
            </div>
            <div class="detail-block">
                <div class="elem-quote"><h2>技术参数</h2></div>
                <ul>
                    <li>交流采样：能效终端可以采集三相的交流电流、电压，并可产生及总的有功/无功功率、有功/无功电量及示度、功率因数等；</li>
                    <li> 电能质量分析：能效终端可测量2~31次电压、电流谐波的每次谐波及总的含有率、畸变率，并可分别测量奇次及偶次谐波电压、电流的总畸变率和含有率；</li>
                    <li>短路（过流）检测：内置过流检测功能，超出额定值10%以上告警；</li>
                    <li>零序电流测量：软件计算零序电流；</li>
                    <li>温度测量：内置8路温度测量，测量范围-40~+125℃，测量精度不低于±1.5℃；</li>
                    <li>有线通信：提供1路隔离RS485通信接口，通信速率不低于9600bps，用于数据通信；该有线接口亦可切换为1个TTL通信接口，用于GPRS、集线器等通信方式扩展；</li>
                    <li>实时时钟：走时精度不小于1S/天，断电保持10年；</li>
                    <li>交流采样：能效终端可以采集三相的交流电流、电压，并可产生及总的有功/无功功率、有功/无功电量及示度、功率因数等；</li>
                    <li> 电能质量分析：能效终端可测量2~31次电压、电流谐波的每次谐波及总的含有率、畸变率，并可分别测量奇次及偶次谐波电压、电流的总畸变率和含有率；</li>
                    <li>短路（过流）检测：内置过流检测功能，超出额定值10%以上告警；</li>
                    <li>零序电流测量：软件计算零序电流；</li>
                    <li>温度测量：内置8路温度测量，测量范围-40~+125℃，测量精度不低于±1.5℃；</li>
                    <li>有线通信：提供1路隔离RS485通信接口，通信速率不低于9600bps，用于数据通信；该有线接口亦可切换为1个TTL通信接口，用于GPRS、集线器等通信方式扩展；</li>
                    <li>实时时钟：走时精度不小于1S/天，断电保持10年；</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'product-detail',
    data(){
        return {
            
        }
    },
    mounted(){
        window.scroll(0,0);
        this.$emit('headFix', ['fixed',false]);
    },
    methods:{
        
    }
  
}
</script>
<style lang="scss" scoped>
    .product-detail {
        figure {
            figcaption {
                color: #ffffff;
                text-align: left;
                position: absolute;
                left: 6%;
                top: 30%;
                h1 {
                    font-size: 2.5rem;
                }
            }
        }
        .detail-content {
            padding: 2% 5%;
            .detail-block {
                margin-bottom: 5%;
                .elem-quote {
                    text-align: left;
                    text-indent: 1em;
                    margin-bottom: 10px;
                    line-height: 22px;
                    border-left: 5px solid #009688;
                    border-radius: 0 2px 2px 0;
                }
                .product-info {
                    text-align: left;
                    font-size: 15px;
                    line-height: 25px;
                }
                ul {
                    text-align: left;
                    padding-left: 2%;
                    list-style-type: disc;
                }
            }
        }
        
    }

</style>
