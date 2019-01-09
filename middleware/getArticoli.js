import {getSanityClient, getByContenutoId} from '~/tools/sanity.js'
import _ from 'lodash'
import moment from 'moment'

const getArticoli = async function (dataset, error) {
    let adesso = moment().toISOString(); 
    //let adesso = '2019-01-09T15:12:31Z';
    console.log(adesso);
    const query = '*[_type == "articolo" && dataPubblicazione < $adesso] |  order(dataPubblicazione desc)'
    const params = {
        adesso: adesso,
        lang: 'it'
    }


    try {
        const landing = getSanityClient(dataset).fetch(query, params);
        return landing
        } catch (e) {
            error({ message: 'Landing Page not found', statusCode: 404 })
        }
}

const manageReferences = async function (documento, dataset) {

    let documentoOk = documento;
    let loop = 0;

    if (documento.contenuti === undefined){
        return landingOk;
    }

    for (const contenuto of documento.contenuti) {
        if (contenuto._type != 'paragrafo') {
            let contenutoOk = await getByContenutoId(dataset, contenuto._ref);
            documentoOk.contenuti[loop] = contenutoOk;
        } else {
            documentoOk.contenuti[loop] = contenuto;
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

    return documentoOk;
}





export default async function (context) {

    let dataset = context.env.dataset;
    let articoli = await getArticoli (dataset, context.error);


    let articoliOkPromise = articoli.map(
        
            async function (articolo, dataset ) {
                let reference = await manageReferences (articolo, dataset);

                //console.log(reference);

                return reference;
            }
    
        );


    //let articoliOk = await manageRxeferences(articoli[0], dataset);

    let articoliOk =  await Promise.all(articoliOkPromise);

    if (typeof articoliOk != 'undefined'){
            context.store.commit('articoli/SET_DATA', articoliOk);
    }

    // if (context.route.params.slug === undefined) {

    //     landing  = await getLanding ('home-page', dataset, context.error);

    // } else {

    //     landing  = await getLanding (context.route.params.slug, dataset, context.error);
    // }

    // let landingOk = await manageReferences(landing[0], dataset);

    // //console.log(landingOk);


    // if (typeof landing != 'undefined'){
    //         context.store.commit('landing/SET_DATA', landingOk);
    // }




        //getLanding ('home-page', store);
}
