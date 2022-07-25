import "./theme/index.scss";

import {Fragment} from "react";
import {Footer, Header} from "./components";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Photo from "./pages/photo";
import Search from "./pages/search";

export default function App() {

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