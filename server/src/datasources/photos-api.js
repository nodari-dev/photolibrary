const {RESTDataSource} = require('apollo-datasource-rest');
const config = require("../config");

class PhotosApi extends RESTDataSource{
    constructor() {
        super();
        this.baseURL = `https://api.unsplash.com/`
    }

    getHomePhotos(){
        return this.get(`photos/random?count=20&client_id=${config.API_KEY}`)
    }
    getSearchPhoto(searchQuery){
        return this.get(`search/photos?${searchQuery}&client_id=${config.API_KEY}`)
    }
    getPhotoDetails(photoId){
        return this.get(`photos/${photoId}/?client_id=${config.API_KEY}`)
    }
}

module.exports = PhotosApi;