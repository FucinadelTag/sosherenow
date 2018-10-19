const sanityClient = require('@sanity/client')
import imageUrlBuilder from '@sanity/image-url'

const getSanityClient = function (dataset) {

    return sanityClient({
        projectId: 'il0zyooc',
        dataset: dataset,
        useCdn: true // `false` if you want to ensure fresh data
    })
}

const getByContenutoId = async function (dataset, id) {

        let contenuto = await getSanityClient(dataset).getDocument(id);
        return contenuto
}

const getImageBuilder = function (dataset) {

    let sanityClient = getSanityClient (dataset);

    let builder = imageUrlBuilder(sanityClient)

    return builder

}

export {getSanityClient, getImageBuilder, getByContenutoId};
