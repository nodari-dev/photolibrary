import {gql} from "@apollo/client";

export const GET_SEARCH_PHOTOS = gql`
    query SearchPhotos($query: String!) {
        searchPhotos(query: $query) {
            results {
                id
                color
                urls {
                    regular
                }
                user {
                    id
                    first_name
                    links {
                        html
                    }
                    last_name
                }
            }
        }
    }`;
