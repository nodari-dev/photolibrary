import "./index.css";
import {Header} from "./components";
import {Route, Routes} from "react-router-dom";
import {Home, Photo, Search} from "./pages";
import GlobalStyles from "./theme/global-styles";
import {ThemeProvider} from "@mui/styles";
import {theme} from "./theme/theme";

export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/photos/:photoId"} element={<Photo/>}/>
                <Route path={"/search"} element={<Search/>}/>
            </Routes>
        </ThemeProvider>
    )
}