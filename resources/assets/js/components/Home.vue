<template>
    <div>
        <h1>Home <span>run</span></h1>
        {{ message }}
    </div>
</template>

<style lang='less'>
    h1 {
        text-align: center;

        span {
            color: #666;
        }
    }
</style>

<script>
export default {
    data() {
        message: 'yo'
    }
}
</script>