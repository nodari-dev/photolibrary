import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({

    cache: new InMemoryCache(),

    uri: "http://localhost:4000/graphql"
});

root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);