// import "./style.css";
import {useLazyQuery, useQuery} from "@apollo/client";
import {GET_SEARCH_PHOTOS} from "../../hooks/get-search-photos";
import useSearch from "../../hooks/use-search";
import {DefaultContainer} from "../../containers";

export default function Search() {
    const [getSearch, {data}] = useLazyQuery(GET_SEARCH_PHOTOS);
    const { operations, params, adapting } = useSearch();

    // if (loading) return <h2>Loading</h2>;
    return(
        <DefaultContainer>
            <div className={"search-form"}>
                <input type="text" onChange={(e) =>{
                    operations.updateParams("keywords", adapting.adaptInputString(e.target.value))
                }}/>
                <button onClick={() =>{
                    getSearch({
                        variables:{
                            searchParams:{
                                keywords: params.keywords,
                                page: params.page,
                            }
                        }
                    }).then(r => console.log(r))
                }}>
                    Search
                </button>
            </div>

            {/*<input type="number" min={1} onChange={(e) => {*/}
            {/*    operations.updateParams("page", parseInt(e.target.value))*/}
            {/*}}/>*/}


            <p>Total pages {data?.searchPhotos.total_pages}</p>
            <p>Current page {params.page}</p>

            {data?.searchPhotos?.results.map((item, index) =>(
                <div key={index}><h2>{item.color}</h2></div>
            ))}
        </DefaultContainer>
    )
}

