import {Router} from "@reach/router";
import {Fragment} from "react";
import Home from "./home";
import Photo from "./photo";
import Search from "./search";

export default function Index(){

    return(
        <Router primary={false} component={Fragment}>
            <Home path="/" />
            <Photo path="/photos/:photoId" />
            <Search path="/photos/:photoId" />
        </Router>
    )
}