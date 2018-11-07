import {getSanityClient, getByContenutoId} from '~/tools/sanity.js'
import _ from 'lodash'

const getTraduzioni = async function (dataset, error) {
    const query = '*[_type == "traduzioni"]{ _id, contenuti, slug } '

    try {
        const landing = getSanityClient(dataset).fetch(query);
        return landing
        } catch (e) {
            error({ message: 'Traduzioni non trovate', statusCode: 404 })
        }
}

const manageTraduzioni = function (traduzioni) {

    let traduzioniOk = {};

    _.forEach(traduzioni, function(traduzione, key) {

        let contenutiOk = {};

        _.forEach(traduzione.contenuti, function(contenuto, key) {

            contenutiOk[contenuto.slug.current] = contenuto.testo;

        });

        traduzioniOk[traduzione.slug.current] = contenutiOk;

    });


    return traduzioniOk;
}





export default async function (context) {

    let dataset = context.env.dataset;
    let traduzioni = null;


    traduzioni  = await getTraduzioni (dataset, context.error);


    if (typeof traduzioni != 'undefined'){
        let traduzioniOk = manageTraduzioni (traduzioni);
        context.store.commit('traduzioni/SET_DATA', traduzioniOk);
    }




        //getLanding ('home-page', store);
}
