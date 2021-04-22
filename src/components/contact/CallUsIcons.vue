<template>
    <div class="anim_container">
        <div class="icon icon_phone"></div>
        <div class="plus-st">+</div>
        <div class="icon icon_delivery"></div>
        <div class="equal">=</div>
        <div class="icon icon_pizza"></div>
    </div>
</template>

<style>
    .anim_container {
        position:relative;
        height:200px;
    }

    .icon {
        background-size: cover !important;
        position: absolute;
    }

    .plus-st {
        position: absolute;
        font-size:160px;
        color:#ffffff;
        top:90px;
        left: 310px
    }

    .equal {
        position: absolute;
        font-size:160px;
        color:#ffffff;
        top:90px;
        left: 750px
    }

    .icon_phone {
        background: url('../../assets/images/icons/icon-phone.png');
        width:130px;
        height:130px;
        top:30px;
        left: 100px
    }

    .icon_delivery {
        background: url('../../assets/images/icons/icon-delivery.png');
        width:200px;
        height:200px;
        left: 480px
    }


    .icon_pizza {
        background: url('../../assets/images/icons/icon-pizza.png');
        width:200px;
        height:200px;
        left: 900px
    }

</style>