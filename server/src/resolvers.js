const resolvers = {
    Query:{
        homePhotos: (_, __, {dataSources}) =>{
            return dataSources.photosAPI.getHomePhotos();
        },
        detailedPhoto: (_, {id}, {dataSources}) =>{
            return dataSources.photosAPI.getPhotoDetails(id);
        }
    }
}

module.exports = resolvers;