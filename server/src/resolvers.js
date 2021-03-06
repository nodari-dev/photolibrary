const resolvers= {
    Query:{
        homePhotos: (_, __, {dataSources}) =>{
            return dataSources.photosAPI.getHomePhotos();
        },
        searchPhotos: (_, {searchParams}, {dataSources}) =>{
            return dataSources.photosAPI.getSearchPhoto(searchParams);
        },
        photo: (_, {id}, {dataSources}) =>{
            return dataSources.photosAPI.getPhotoDetails(id);
        }
    }
}

module.exports =resolvers;