<template>
    <main>
        <el-button :plain="true" @click="$router.push('/home')">返回首页</el-button>
    </main>
</template>
<script>
export default {
    name: 'Error-500'
}
</script>

<style lang="scss" scoped>
    main {
        width: 100%;
        height: 100%;
        background: 40% 0% url('../../../static/img/error/500.gif');
        .el-button {
            position: absolute;
            top: 50%;
            right: 20%;
            height: 7vh;
            width: 15vw;
            border-color: #000000;
            color: #000000;
        }
    }
</style>

