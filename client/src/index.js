import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {MainWrapper} from "./containers";

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({

    cache: new InMemoryCache(),

    uri: "http://localhost:4000/graphql"

});
root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <MainWrapper>
                <App/>
            </MainWrapper>
        </BrowserRouter>

    </ApolloProvider>
);