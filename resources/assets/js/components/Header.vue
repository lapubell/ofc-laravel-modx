<template>
    <div id='logo-wrap'>
    </div>
</template>

<style lang='scss'>
@import "../../sass/variables";

#logo-wrap {
    display: flex;
    align-items: center;

    svg {
        margin: 0 auto;
        width: 80%;
    }

    .fa {
        font-size: 30px;

        @media (min-width: $screen-md-min) {
            display: none;
        }
    }
}
</style>

