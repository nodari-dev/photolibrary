const {gql} = require('apollo-server');

const typeDefs = gql`

    type Query{
        #first 20 photos
        homePhotos: [PhotoCard!]!
        #seach for photos by keywords
        searchPhotos(searchParams: SearchParams!): SearchPhotos!
        #single photo information
        photo(id: ID!): PhotoDetails!
    }
    
    interface DefaultPhoto{
        id: ID!
        #color for design
        color: String!
        #get specific sizes of photo
        urls: RegularPhotoUrl!
        user: Author!
    }

    
    type LinkToHTML{
        #get link to real html page (original url)
        html: String!
    }
    
    type PhotoCard implements DefaultPhoto{
        id: ID!
        color: String!
        urls: RegularPhotoUrl!
        user: Author!
    }
    
    type PhotoDetails implements DefaultPhoto{
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
    
    type SearchPhotos{
        total: Int!
        total_pages: Int!
        results: [PhotoCard!]!
    }

    type Author{
        id: ID!
        first_name: String
        last_name: String
        #link to unsplash profile
        links: LinkToHTML!
    }
    
    input SearchParams{
        keywords: String!
        page: Int!
    }
`;

module.exports = typeDefs;