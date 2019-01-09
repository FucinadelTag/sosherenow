<template lang="html">
    <div class="dataArticolo">
        <meta itemprop="datePublished" :content="dataArticolo" />
        <span itemprop="publisher" itemscope itemtype="http://schema.org/Organization">
            <meta itemprop="name"  content="Burocraziafacile.it" />

            <span itemprop="logo" itemscope itemtype="https://schema.org/ImageObject">
                <meta itemprop="url"   content="https://prismic-io.s3.amazonaws.com/burocraziafacile/6ee37555903fbb556179937998dc274d1c730b61_unnamed.png" />
            </span>
        </span>

        <meta itemprop="author" content="Burocraziafacile.it" />
        <span class="data"><time itemprop="dateModified">{{dataArticolo}}</time></span>
    </div>
</template>

<script>
import Moment from 'moment'

export default {
    props: ['articolo'],
    computed: {
        // a computed getter
        dataArticolo: function () {
            return Moment(this.articolo.dataPubblicazione).format('DD MMMM YYYY');
        }
    },
}
</script>

<style lang="scss">

.dataArticolo {
        font-size: 90%;
        margin-bottom: 0rem;
    .data {

        font-style: italic;
    }
    .tag {

        margin-left: 0rem;
    }
}
</style>
