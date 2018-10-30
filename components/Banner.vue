<template lang="html">
    <section>
        <div class="has-text-centered">
            <span class="title is-1">{{$t(contenuto.riga1)}}</span>
            <br>
            <span class="title is-2">{{$t(contenuto.riga2)}}</span>
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
