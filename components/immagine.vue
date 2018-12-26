<template lang="html">
    <img v-bind:src="getImage" v-bind:alt="getAlt" />
</template>

<script>
import {getImageBuilder} from '~/tools/sanity.js'


export default {
    props: ['immagine'],
    computed: {
        // a computed getter
        getImage: function () {
            let imageBuilder = getImageBuilder('dev')

            let width = 1000;
            let height = 500;

            if (this.immagine.presentazione == 'quadrata'){
                width = 500;
            }

            if (this.immagine.presentazione == 'verticale'){
                height = 1000;
                width = 500;
            }

            if (this.immagine.base > 0){
                width = this.immagine.base;
            }

            if (this.immagine.altezza > 0){
                height = this.immagine.altezza;
            }

            //console.log(imageBuilder.image(this.landing.testata.immagine).width(1000).url());
            let immagineUrl = imageBuilder.image(this.immagine).width(width).height(height).url();
            return immagineUrl;
        },
        getAlt: function () {
            if (this.immagine.alt === undefined) {
                return null;
            } else {
                return this.$t(this.immagine.alt)
            }
        },

    },
}
</script>

<style lang="scss">
</style>
