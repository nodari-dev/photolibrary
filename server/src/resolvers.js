const resolvers = {
    Query:{
        listPhotos: (_, __, {dataSources}) =>{
            return dataSources.photosAPI.getPhotos();
        }
    }
    // Query: {
    //     tracksForHome: (_, __, { dataSources }) => {
    //         return dataSources.photosAPI.getPhotos();
    //     },
    // },
}

module.exports = resolvers;