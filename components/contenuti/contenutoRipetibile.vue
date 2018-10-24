<template lang="html">
    <section>
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
