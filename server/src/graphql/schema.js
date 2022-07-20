const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query{
        #first 10 photos
        homePhotos: [HomePhoto!]!
        photo(id: ID!): DetailedPhoto!
    }
    
    type LinkToHTML{
        #get link to real html page (original url)
        html: String!
    }

    interface DefaultPhoto{
        id: ID!
        #color for design
        color: String!
        #get specific sizes of photo
        urls: RegularPhotoUrl!
        user: Author!
    }

    type HomePhoto implements DefaultPhoto{
        id: ID!
        color: String!
        urls: RegularPhotoUrl!
        user: Author!
    }
    
    type DetailedPhoto implements DefaultPhoto{
        id: ID!
        color: String!
        urls: RegularPhotoUrl!
        user: Author!
        created_at: String
        #count of likes
        likes: Int
        #get link to original page
        links: LinkToHTML!
        #description
        description: String
    }
    
    type RegularPhotoUrl{
        regular: String
    }

    type Author{
        id: ID!
        first_name: String
        last_name: String
        #link to unsplash profile
        links: LinkToHTML!
    }
    
    type Search{
        query: String
    }
`;

module.exports = typeDefs;