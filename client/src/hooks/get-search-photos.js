import {gql} from "@apollo/client";

export const GET_SEARCH_PHOTOS = gql`
    query SearchPhotos($searchInput: SearchQueries!) {
        searchPhotos(searchInput: $searchInput) {
            total
            total_pages
            results {
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
    }`;
