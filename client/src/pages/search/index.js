import {useLazyQuery, useQuery} from "@apollo/client";
import {GET_SEARCH_PHOTOS} from "../../hooks/get-search-photos";
import useSearch from "../../hooks/use-search";

export default function Search() {
    const {loading, error, data, refetch} = useQuery(GET_SEARCH_PHOTOS);
    const { operations, params } = useSearch();

    if (loading) return <h2>Loading</h2>;
    return(
        <div>
            <input type="text" onChange={(e) =>{
                operations.updateParams("keywords", operations.separateValues(e.target.value))
            }}/>
            <input type="number" min={1} onChange={(e) => {
                operations.updateParams("page", parseInt(e.target.value))
            }}/>

            {/*{[...Array(data?.searchPhotos.total_pages)].map((e, i) =>{*/}
            {/*    return <p key={i + 1}>{i + 1}</p>*/}
            {/*})}*/}

            <button onClick={() =>{
                refetch({
                    searchParams:{
                        keywords: params.keywords,
                        page: params.page,
                    }
                })
            }}>
                Search
            </button>



            <p>Total pages {data?.searchPhotos.total_pages}</p>
            <p>Current page {params.page}</p>
            {/*{data?.searchPhotos?.total_pages.map((item, index) =>(*/}
            {/*    <div key={index}><h2>{item}</h2></div>*/}
            {/*))}*/}

            {data?.searchPhotos?.results.map((item, index) =>(
                <div key={index}><h2>{item.color}</h2></div>
            ))}
        </div>
    )
}