import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Index from "./pages";

import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Footer, Header} from "./components";
import Home from "./pages/home";
import Photo from "./pages/photo";
import Search from "./pages/search";

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({

    cache: new InMemoryCache(),

    uri: "http://localhost:4000/graphql"

});
root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <div className={"main"}>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/photos/:photoId"} element={<Photo/>}/>
                    <Route path={"/search"} element={<Search/>}/>
                </Routes>

                <Footer/>
            </div>
        </BrowserRouter>

    </ApolloProvider>
);