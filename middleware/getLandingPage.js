import {getSanityClient, getByContenutoId} from '~/tools/sanity.js'
import _ from 'lodash'

const getLanding = async function (slug, dataset, error) {
    const query = '*[_type == "landing" && titoloGenerico.slug.it.current == $slug]'
    const params = {
        slug: slug,
        lang: 'it'
    }

    try {
        const landing = getSanityClient(dataset).fetch(query, params);
        return landing
        } catch (e) {
            error({ message: 'Landing Page not found', statusCode: 404 })
        }
}

const manageReferences = async function (landing, dataset) {

    let landingOk = landing;
    let loop = 0;

    for (const contenuto of landing.contenuti) {
        if (contenuto._type != 'paragrafo') {
            let contenutoOk = await getByContenutoId(dataset, contenuto._ref);
            landingOk.contenuti[loop] = contenutoOk;
        } else {
            landingOk.contenuti[loop] = contenuto;
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

    return landingOk;
}





export default async function (context) {

    let dataset = context.env.dataset;
    let landing = null;

    if (context.route.params.slug === undefined) {

        landing  = await getLanding ('home-page', dataset, context.error);

    } else {

        landing  = await getLanding (context.route.params.slug, dataset, context.error);
    }

    let landingOk = await manageReferences(landing[0], dataset);

    //console.log(landingOk);


    if (typeof landing != 'undefined'){
            context.store.commit('landing/SET_DATA', landingOk);
    }




        //getLanding ('home-page', store);
}
