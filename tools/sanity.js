const sanityClient = require('@sanity/client')
const blocksToHtml = require('@sanity/block-content-to-html')
const h = blocksToHtml.h

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

const serializers = {
    types: {
        block: props => {
            return (
                  h('p', [
                    h('p', null, props.children)
                  ])
                )

        }
    }
}

const getBlockHtml = function (input) {

    if (input === undefined){
        return null;
    }

    const content = blocksToHtml({
        blocks: input
    })

    return content;

}

export {getSanityClient, getImageBuilder, getByContenutoId, getBlockHtml};
