import "./index.css";
import {Header} from "./components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, Photo, Search} from "./pages";
import GlobalStyles from "./theme/global-styles";
import {ThemeProvider} from "@mui/styles";
import {theme} from "./theme/theme";
import {MainWrapper} from "./containers";

export default function App() {

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MainWrapper>
                    <GlobalStyles/>
                    <Header/>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/photos/:photoId"} element={<Photo/>}/>
                        <Route path={"/search"} element={<Search/>}/>
                    </Routes>
                </MainWrapper>

            </ThemeProvider>
        </BrowserRouter>
    )
}