<template lang="html">
    <section>
        <div class="has-text-centered">
            <p class="title is-1">{{$t(contenuto.riga1)}}</p>
            <p class="title is-2">{{$t(contenuto.riga2)}}</p>
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
