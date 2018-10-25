<template lang="html">

    <section>
        <div class="spazio_bianco"></div>

        <h2 v-if="contenuto.titolo_visibile === true" class="title is-2"><i v-if="contenuto.icona != ''" v-bind:class="contenuto.icona"></i> {{$t(contenuto.titolo)}}</h2>

        <contenuto3Colonne v-if="contenuto.layout == '3_colonne'"  v-bind:contenuto="contenuto" />

        
    </section>

</template>

<script>
import contenuto3Colonne from '~/components/contenuti/contenuto3Colonne.vue'

export default {
    props: ['contenuto', 'indice'],
    components: {
        contenuto3Colonne
    },
}
</script>

<style lang="scss">
</style>
