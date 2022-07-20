import {gql} from "@apollo/client";

export const GET_PHOTO_DETAILS = gql`
    query Photo($photoId: ID!) {
        photo(id: $photoId) {
            id
            color
            urls {
                regular
            }
            user {
                id
                first_name
                last_name
                links {
                    html
                }
            }
            created_at
            likes
            links {
                html
            }
            description
        }
    }
`;