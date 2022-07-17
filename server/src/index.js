const { ApolloServer} = require('apollo-server');
const resolvers = require('./resolvers');

const PhotosAPI = require('./datasources/photos-api');

const typeDefs = require('./graphql/schema');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () =>{
        return{
            photosAPI: new PhotosAPI(),
        }
    }
})

server.listen().then(() =>{
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
});


