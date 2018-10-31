<template lang="html">
    <section class="banner">
        <div class="has-text-centered">
            <span class="title is-2 has-text-danger">In prevendita con il 50% di sconto da Gennaio 2019</span>
        </div>
        <br>
        <div class="columns is-centered">
            <div class="column is-half">
                <div class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-info" type="email" placeholder="Inserisci Il tuo indirizzo email" value="">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>

                    </div>
                </div>
                <div class="field">
                    <div class="control has-text-centered">
                        <button class="button is-large is-warning">
                            <i class="fas fa-envelope"></i>&nbsp;Avvisami quando inizia la Prevendita!
                        </button>
                    </div>
                </div>
            </div>

        </div>
        <div class="has-text-centered">
            <span class="subtitle is-4">Solo i primi 100 avranno diritto allo sconto del 50%</span>
        </div>
    </section>

</template>

<script>
export default {
    data (context) {
        //console.log(this.$store);
        return {
            lang: this.$store.getters.getLocale,
        }
    },
}
</script>

<style lang="scss">
</style>
