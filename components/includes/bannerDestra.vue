<template lang="html">
<a v-bind:href="home" v-on:click="bannerTrack()" target="_blank">
    <div class="box bannerDestra is-centered">
        <div class="logoPratiche has-text-centered">
            <img class="imglogo" src="/images/logo-menu.png" alt="SosHereNow.com">
        </div>
        <div class="payoff has-text-centered">
            {{$t(traduzioni.banner.payoff)}}
        </div>
        <div class="">
            <div class="callToAction has-text-centered">
                <div class="button">{{$t(traduzioni.calltoaction.maggioriinformazioni)}}</div>
            </div>
        </div>

    </div>

</a>

</template>

<script>
export default {
    data: function () {
        return {
            traduzioni: this.$store.getters['traduzioni/getTraduzioni'],
        }
    },

    
}
</script>

<style lang="scss">

.bannerDestra {
    border-top-color: $rosso;
    border-top-width: .1rem;
    border-top-style: solid;
    padding: 1rem;

    .logoPratiche {
        border-bottom: 0.01rem solid;
        border-color: #e3e3e3;
    }

    .payoff {
        padding-top: 1.5rem;
        font-size: 150%;
        font-weight: bold;
    }

    .callToAction {
        padding-top: 1.5rem;
    }
}

</style>

