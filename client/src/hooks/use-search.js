import {useLazyQuery} from "@apollo/client";
import {GET_SEARCH_PHOTOS} from "./get-search-photos";

export default function useSearch () {
    const [_getSearch, {data}] = useLazyQuery(GET_SEARCH_PHOTOS);

    const filterInput = (string) =>{
        return string.replace(" ", ",");
    }

    const filterTags = (str, tag) =>{ return str + "," + tag.title; }

    const getSearch = (keywords, page) =>{
        _getSearch({
            variables: {
                searchParams: {
                    keywords: keywords,
                    page: page
                }
            }
        })
    }

    return{
        searchFilters: {filterInput, filterTags},
        searchActions: {getSearch},
        searchData: data
    }
}
