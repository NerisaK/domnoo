<template>
  <div>
    <the-header />
    <div>
      <app-slider />
      <app-menu />
      <call-us />
      <app-newsletter />
    </div>    
    <the-footer />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import AppSlider from './components/FeaturedSlider.vue'
import AppMenu from './components/menu/AppMenu.vue'
import CallUs from './components/contact/CallUs.vue'
import AppNewsletter from './components/newsletter/AppNewsletter.vue'

export default {
  components:{
    TheHeader,
    TheFooter,
    AppSlider,
    AppMenu,
    CallUs,
    AppNewsletter
  }
}
</script>

<style>
  @import './assets/style.css';
</style>