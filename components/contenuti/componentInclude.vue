<template lang="html">

    <section>
        <div class="spazio_bianco"></div>

        <ctaEmail v-if="contenuto.slug.current == 'cta-email'"  v-bind:contenuto="contenuto" />

    </section>

</template>

<script>
import ctaEmail from '~/components/includes/cta_email.vue'


export default {
    props: ['contenuto', 'indice'],
    components: {
        ctaEmail,
    },
}
</script>

<style lang="scss">
</style>
