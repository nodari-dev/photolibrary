import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Index from "./pages";

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({

    cache: new InMemoryCache(),

    uri: "http://localhost:4000/graphql"

});
root.render(
    <ApolloProvider client={client}>
        <Index/>
    </ApolloProvider>
);