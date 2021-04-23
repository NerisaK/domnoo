<template>
    <div class="call_us_container">
        <div class="container">
            <div class="hungry">
                <h1>Hungry?</h1>
            </div>
            <div class="icons">
                <contact-icons/>
            </div>
            <div class="call">
                <span>Give us a call </span><span>46878-6899</span>
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