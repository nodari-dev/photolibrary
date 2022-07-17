const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query{
        #first 10 photos
        homePhotos: [HomePhoto!]!
        detailedPhoto(id: ID!): DetailedPhoto!
    }
    type LinkToHTML{
        #get link to real html page (original url)
        html: String!
    }

    interface Photo{
        id: ID!
        #color for design
        color: String!
        #get specific sizes of photo
        urls: RegularPhotoUrl!
        user: Author!
    }

    type HomePhoto implements Photo{
        id: ID!
        color: String!
        urls: RegularPhotoUrl!
        user: Author!
    }
    
    type DetailedPhoto implements Photo{
        id: ID!
        color: String!
        urls: RegularPhotoUrl!
        user: Author!

        #count of likes
        likes: Int
        #get link to original page
        links: LinkToHTML!
        #description
        description: String!
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
`;

module.exports = typeDefs;