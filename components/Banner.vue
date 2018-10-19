<template lang="html">
    <section>
        <div class="has-text-centered">
            <p class="title is-1">{{contenuto.riga1.it}}</p>
            <p class="title is-2">{{contenuto.riga2.it}}</p>
        </div>
    </section>

</template>

<script>

export default {
    props: ['contenuto', 'indice'],
}
</script>

<style lang="scss">
</style>
