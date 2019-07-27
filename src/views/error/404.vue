<template>
    <main>
        <self-header :hover_flag="false"></self-header>
        <section>
            <h1>
                404<br>
                Looks like you got lost.
            </h1>
            <img src="../../../static/img/error/404.gif">
        </section>
    </main>
</template>
<script>
import selfHeader from '../../components/Header'

export default {
    name: 'Error-404',
    components: {
        selfHeader
    }
}
</script>

<style lang="scss" scoped>
    section {
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: rgb(238, 80, 80);
        overflow: hidden;
        h1 {
            font-feature-settings: "liga" 1,"kern" 1;
            font-family: avantgardegothicitcw01bd,sans-serif;
            font-weight: bolder;
            margin: 2.5em auto 0;
            max-width: 61.5rem;
            font-size: 4rem;
            color: #ffffff;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                top: 25%;
                left: 1%;
                border-top: 2.4px solid transparent;
                border-right: 18rem solid #ffffff;
                border-bottom: 2.4px solid transparent;
            }
            &::after {
                content: '';
                position: absolute;
                top: 25%;
                right: 1%;
                border-top: 2.4px solid transparent;
                border-left: 18rem solid #ffffff;
                border-bottom: 2.4px solid transparent;
            }
        }
        img {
            height: 50vh;
            width: 25vw;
            position: absolute;
            bottom: 0;
            left: 3vw;
        }
    }
</style>

