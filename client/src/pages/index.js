import "../theme/_index.scss";

import {Fragment} from "react";
import {Footer, Header} from "../components";
import {Route, Routes} from "react-router-dom";
import Home from "./home";
import Photo from "./photo";
import Search from "./search";

export default function Index() {

    return (
        <Fragment>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/photos/:photoId"} element={<Photo/>}/>
                <Route path={"/search"} element={<Search/>}/>
            </Routes>
        </Fragment>
    )
}