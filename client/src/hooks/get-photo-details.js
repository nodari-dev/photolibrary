import {gql} from "@apollo/client";

export const GET_PHOTO_DETAILS = gql`
    query Photo($photoId: ID!) {
        photo(id: $photoId) {
            id
            urls {
                full
            }
            user {
                id
                first_name
                last_name
            }
            created_at
            links {
                html
            }
            description
            tags {
                title
            }
        }
    }
`;