<template>
    <div>
        <carousel :per-page="1" :mouse-drag="true" :pagination-enabled="false">
            <slide v-for="(slide, index) in slides" :key="index">
                <div class="slider_bg" :style="{'background':`url(${slide.background})`}">
                    <div class="container slider-container">
                        <div class="text">{{slide.text}}</div>
                        <div class="image">
                            <img :src="slide.image" alt="pizza">
                        </div>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

import slideBg1 from '../assets/images/slide_bck.jpg';
import slideBg2 from '../assets/images/slide_bck2.jpg';
import pizzaOne from '../assets/images/pizza_one.png';
import pizzaTwo from '../assets/images/pizza_three.png';

export default {
    components: {
        Carousel,
        Slide,
    },
    data(){
        return{
            slides: [
                {
                    text: "20% off on all pizzas",
                    background: slideBg1,
                    image: pizzaOne,
                },
                {
                    text: "buy two, get one free",
                    background: slideBg2,
                    image: pizzaTwo,
                }
            ]
        }
    }
}
</script>
