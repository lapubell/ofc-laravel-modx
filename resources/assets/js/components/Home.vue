<template>
    <section class='vue-home'>
        <div class="video-container">
            <video autoplay autoplay='true' loop='loop'>
                <source src='/videos/combined.mp4' type='video/mp4'>
            </video>

            <h1>We use open source solutions to provide extraordinary results</h1>
        </div>

        <div class='container'>
            <h2 class='headline'>Founded in 2006, Open Function Computers has been working with companies and individuals in the Pacific Northwest to solve a variety of problems</h2>

            <p>With the power of Open Source technology and software, we have been able to change the way our customers do business, speak to their clients, optimize internal processes, and more. Contact us today to find out how we can help you with your next project.</p>

            <p><a v-link="{ path: 'contact'}" class="button">Contact Us</a></p>

            <h2 class='headline'>Case Study</h2>
        </div>
    </section>
</template>

<style lang='sass'>
    @import "../../sass/variables";

    .vue-home {
        position: relative;
        overflow: hidden;

        .video-container {
            position: relative;
            width: 100%;
            height: 100%;

            video {
                width: 100%;
                object-fit: cover;
                z-index: 1;
            }

            .overlay {
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: $c-black;
                opacity: 0.5;
                z-index: 1;
            }

            h1 {
                position: absolute;
                z-index: 2;
                font-family: $serif;
                color: $c-white;
                top: 20%;
                text-align: center;
                width: 100%;
                font-weight: normal;
                font-size: 30px;
                padding: 0 15%;

                @media (min-width: $screen-md-min) {
                    font-size: 36px;
                }

                @media (min-width: $screen-lg-min) {
                    font-size: 50px;
                }
            }
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                message: 'yo'
            }
        }
    }
</script>