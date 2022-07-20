import {gql} from "@apollo/client";

export const GET_PHOTOS = gql`
    query HomePhotos {
        homePhotos {
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
        }
    }
`;