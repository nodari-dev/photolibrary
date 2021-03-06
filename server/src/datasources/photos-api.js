const {RESTDataSource} = require('apollo-datasource-rest');
const config = require("../config");

class PhotosApi extends RESTDataSource{
    constructor() {
        super();
        this.baseURL = `https://api.unsplash.com/`
    }

    getHomePhotos(){
        return this.get(`photos/random?count=30&client_id=${config.API_KEY}`);
    }
    getSearchPhoto(searchParams){
        return this.get(`search/photos/?query=${searchParams.keywords}&page=${searchParams.page}&client_id=${config.API_KEY}`);
}
    getPhotoDetails(photoId){
        return this.get(`photos/${photoId}/?client_id=${config.API_KEY}`);
    }
}

module.exports = PhotosApi;