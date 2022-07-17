const {RESTDataSource} = require('apollo-datasource-rest');
const config = require("../config");

class PhotosApi extends RESTDataSource{
    constructor() {
        super();
        this.baseURL = `https://api.unsplash.com/`
    }

    getPhotos(){
        return this.get(`photos/?client_id=${config.API_KEY}`)
    }
}

module.exports = PhotosApi;