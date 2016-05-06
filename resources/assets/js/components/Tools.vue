<template>

    <section>
        <h2>The tools in our toolbox don't define us, they empower us to bring your goals and vision to life.</h2>
        <ul>
            <li v-for='tool in tools'
                transition='stagger'
                stagger='100'>{{ tool }}</li>
        </ul>
    </section>

</template>

<style lang='less'>
.stagger {
    &-transition {
        transform: all .5s ease;
        opacity: 1;
    }

    &-enter {
        opacity: 0;
    }

    &-leave {
        opacity: 0;
    }
}
</style>

<script>
export default {
    data() {
        return {
            tools: [
                'Laravel',
                'Vue.js',
                'MODX',
                'GoLang',
                'Flask'
            ]
        }
    }
}
</script>