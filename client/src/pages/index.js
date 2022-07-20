import {Router} from "@reach/router";
import {Fragment} from "react";
import Home from "./home";
import Photo from "./photo";

export default function Index(){

    return(
        <Router primary={false} component={Fragment}>
            <Home path="/" />
            <Photo path="/photos/:photoId" />
        </Router>
    )
}