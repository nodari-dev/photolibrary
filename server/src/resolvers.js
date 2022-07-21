const resolvers= {
    Query:{
        homePhotos: (_, __, {dataSources}) =>{
            return dataSources.photosAPI.getHomePhotos();
        },
        searchPhotos: (_, {query}, {dataSources}) =>{
            return dataSources.photosAPI.getSearchPhoto(query);
        },
        photo: (_, {id}, {dataSources}) =>{
            return dataSources.photosAPI.getPhotoDetails(id);
        }
    }
}

module.exports =resolvers;