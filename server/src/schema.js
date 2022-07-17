const {gql} = require('apollo-server');

const typeDefs = gql`
        type Query{
            #first 10 photos
            listPhotos: [Photo!]!
        }

        type LinkToHTML{
            #get link to real html page (original url)
            html: String!
        }
        
        type Photo{
            id: ID!
            #color for design
            color: String!
            #date
            created_at: String
            #get specific sizes of photo
            urls: PhotoSizeDetails!
            #count of likes
            likes: Int
            #author
            user: Author!
            #get link to original page
            links: LinkToHTML!
        }

        type PhotoSizeDetails{
            #3 photo size
            full: String
            raw: String
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