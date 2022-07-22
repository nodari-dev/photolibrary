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
        #get specific sizes of photo
        urls: RegularPhotoUrl!
        user: Author!
        created_at: String!
    }

    
    type LinkToHTML{
        #get link to real html page (original url)
        html: String!
    }
    
    type PhotoCard implements DefaultPhoto{
        id: ID!
        urls: RegularPhotoUrl!
        user: Author!
        created_at: String!
        #color
        color: String!
    }
    
    type PhotoDetails implements DefaultPhoto{
        id: ID!
        urls: RegularPhotoUrl!
        user: Author!
        created_at: String!
        #count of likes
        likes: Int!
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
    }
    
    input SearchParams{
        keywords: String!
        page: Int!
    }
`;

module.exports = typeDefs;