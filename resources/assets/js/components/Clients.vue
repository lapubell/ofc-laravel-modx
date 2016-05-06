<template>
    <div class='clients'>
        <h2>{{title}}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<style>
.clients {
    background-color: #666;
    padding: 20px;
}
</style>

<script>
export default {
    data() {
        return {
            title: 'We love our clients',
            description: "Weather you work with us directly, or work with us through an agency, your goals are our goals.",
            name: 'Laracasts'
        };
    }
}
</script>