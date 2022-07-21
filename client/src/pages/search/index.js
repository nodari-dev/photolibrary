import {useQuery} from "@apollo/client";
import {GET_SEARCH_PHOTOS} from "../../hooks/get-search-photos";
import useSearch from "../../hooks/use-search";

export default function Search() {
    const {loading, error, data, refetch} = useQuery(GET_SEARCH_PHOTOS);
    const { operations, queriesString } = useSearch();


    if (loading) return <h2>Loading</h2>

    return(
        <div>
            <input type="string" onChange={(e) =>{
                operations.updateQueriesArr(
                    operations.separateValues(e.target.value)
                );
                console.log(queriesString)
            }}/>

            <button onClick={() =>{
                refetch({
                    searchInput:{
                        queries: queriesString
                    }
                })
            }}>
                Search
            </button>

            {data?.searchPhotos?.results.map((item, index) =>(
                <div key={index}><h2>{item.color}</h2></div>
            ))}
        </div>
    )
}