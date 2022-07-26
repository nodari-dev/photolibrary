import {useLazyQuery, useQuery} from "@apollo/client";
import {GET_SEARCH_PHOTOS} from "../../hooks/get-search-photos";
import useSearch from "../../hooks/use-search";
import {DefaultContainer} from "../../containers";
import {useEffect, useRef, useState} from "react";
import {PhotoCard} from "../../components";
import {useStyles} from "./styles";


export default function Search() {
    const classes = useStyles();
    const didMount = useRef(false);
    const [getSearch, {data}] = useLazyQuery(GET_SEARCH_PHOTOS);
    const {filters} = useSearch();
    const [totalPages, setTotalPages] = useState();

    const [currentPage, setCurrentPage] = useState(1);
    const [keywords, setKeywords] = useState("");


    useEffect(()=>{
        if (!didMount.current) {
            didMount.current = true;
            return;
        }
        getSearch({
            variables: {
                searchParams: {
                    keywords: keywords,
                    page: currentPage
                }
            }
        })
    }, [currentPage]);
    // if (loading) return <h2>Loading</h2>;
    return (
        <DefaultContainer>
            <div className={classes.root}>
                <h2 className={classes.title}>Find something new for yourself <br/> and even more</h2>
                <div className={classes.form}>
                    <input placeholder={"Search here"} className={classes.searchInput} type="text" onChange={(e) => {
                        setKeywords(filters.filterInput(e.target.value));
                    }}/>
                    <button className={classes.searchButton} onClick={() => {
                        getSearch({
                            variables: {
                                searchParams: {
                                    keywords: keywords,
                                    page: currentPage,
                                }
                            }
                        }).then(res => setTotalPages(res?.data?.searchPhotos.total_pages))
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"/></svg>
                    </button>
                </div>

                <div className={classes.results}>
                    {data?.searchPhotos?.results.map((item, index) => (
                        <div className={classes.resultsItem} key={index}>
                            <PhotoCard data={item} interactive={true} additionalInfo={true} fixedSize={false}/>

                        </div>
                    ))}
                </div>

                {data?.searchPhotos && (
                    <div className={classes.pagination}>
                        {currentPage < totalPages &&
                            <div className={classes.paginationAction}
                                 onClick={() =>{setCurrentPage(currentPage - 1);}}>Prev</div>
                        }
                        <h4>
                            {currentPage}
                        </h4>
                        {currentPage !== totalPages &&
                            <div className={classes.paginationAction}
                                 onClick={() =>{setCurrentPage(currentPage + 1);}}>Next</div>
                        }
                    </div>
                )}

            </div>

            {/*<input type="number" min={1} onChange={(e) => {*/}
            {/*    operations.updateParams("page", parseInt(e.target.value))*/}
            {/*}}/>*/}


        </DefaultContainer>
    )
}

