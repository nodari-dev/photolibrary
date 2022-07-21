const resolvers= {
    Query:{
        homePhotos: (_, __, {dataSources}) =>{
            return dataSources.photosAPI.getHomePhotos();
        },
        searchPhotos: (_, {searchInput}, {dataSources}) =>{
            return dataSources.photosAPI.getSearchPhoto(searchInput.queries);
        },
        photo: (_, {id}, {dataSources}) =>{
            return dataSources.photosAPI.getPhotoDetails(id);
        }
    }
}

module.exports =resolvers;