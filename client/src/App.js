import "./theme/index.scss";
import {Header} from "./components";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Photo from "./pages/photo";
import Search from "./pages/search";
import {Fragment} from "react";
import GlobalStyles from "./theme/global-styles";

export default function App() {

    return (
        <Fragment>
            <GlobalStyles/>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/photos/:photoId"} element={<Photo/>}/>
                <Route path={"/search"} element={<Search/>}/>
            </Routes>
        </Fragment>
    )
}