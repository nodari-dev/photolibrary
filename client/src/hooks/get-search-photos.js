import {gql} from "@apollo/client";

export const GET_SEARCH_PHOTOS = gql`
    query SearchPhotos($searchParams: SearchParams!) {
        searchPhotos(searchParams: $searchParams) {
            total
            total_pages
            results {
                id
                created_at
                color
                urls {
                    regular
                }
                user {
                    id
                    first_name
                    last_name
                }
            }
        }
    }`;
