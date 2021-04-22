<template>
    <div class="call_us_container">
        <div class="container">
            <div class="first">
                <h1>Hungry?</h1>
            </div>
            <div class="second">
                <contact-icons/>
            </div>
            <div class="third">
                <span>Give us a call </span><span>6666-3399</span>
            </div>
        </div>
    </div>
</template>

<script>
import contactIcons from './CallUsIcons.vue'

export default {
    components:{
        contactIcons
    }
}
</script>