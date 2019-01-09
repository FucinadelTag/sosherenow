import {getSanityClient, getByContenutoId} from '~/tools/sanity.js'
import _ from 'lodash'

const getArticolo = async function (slug, dataset, error) {
    const query = '*[_type == "articolo" && titoloGenerico.slug.it.current == $slug]'
    const params = {
        slug: slug,
        lang: 'it'
    }

    try {
        const articolo = getSanityClient(dataset).fetch(query, params);
        return articolo
        } catch (e) {
            error({ message: 'Landing Page not found', statusCode: 404 })
        }
}

const manageReferences = async function (articolo, dataset) {

    let articoloOk = articolo;
    let loop = 0;

    if (articolo.contenuti === undefined){
        return articoloOk;
    }

    for (const contenuto of articolo.contenuti) {
        if (contenuto._type != 'paragrafo') {
            let articoloOk = await getByContenutoId(dataset, contenuto._ref);
            articoloOk.contenuti[loop] = contenutoOk;
        } else {
            articoloOk.contenuti[loop] = contenuto;
        }

        loop++;

    }

    // for(landing.contenuti, async function(contenuto, key) {
    //
    //     if (contenuto._type != 'paragrafo') {
    //
    //         let contenutoOk = await getByContenutoId(dataset, contenuto._ref);
    //
    //         landingOk.contenuti[key] = contenutoOk;
    //
    //         //console.log(landingOk);
    //
    //     }
    // });

    return articoloOk;
}





export default async function (context) {

    let dataset = context.env.dataset;
    let articolo = null;


    articolo  = await getArticolo (context.route.params.slug, dataset, context.error);

    let articoloOk = await manageReferences(articolo[0], dataset);

    console.log(articoloOk);


    if (typeof articolo != 'undefined'){
            context.store.commit('articoli/SET_ARTICOLO', articoloOk);
    }




        //getLanding ('home-page', store);
}
