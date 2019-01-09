<template lang="html">

    <span v-if="contenuto" v-html="getBlockHtml" />

</template>

<script>
import {getBlockHtml} from '~/tools/sanity.js'

export default {
    props: ['contenuto'],
    computed: {
        getBlockHtml: function () {
            let testo = this.$t(this.contenuto);
            return getBlockHtml(testo);


        }
    },
}
</script>

<style lang="scss">
</style>
