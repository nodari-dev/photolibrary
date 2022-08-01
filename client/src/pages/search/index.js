import useSearch from "../../hooks/use-search";
import { DefaultContainer, PhotosListContainer } from "../../containers";
import { useEffect, useRef, useState } from "react";
import { useStyles } from "./styles";
import { Pagination } from "./components/pagination";
import {SearchResults} from "./components/search-results";

export default function Search() {
    const classes = useStyles();
    const didMount = useRef(false);
    const { searchFilters, searchActions, searchData } = useSearch();

    const [totalPages, setTotalPages] = useState(null);
    const [page, setPage] = useState(1);
    const [keywords, setKeywords] = useState("");

    const increment = () => {
        setPage(page + 1);
    };
    const decrement = () => {
        setPage(page - 1);
    };

    useEffect(() => {
        /**
         * After updating state of {page} => run new fetching
         */

        if (!didMount.current) {
            didMount.current = true;
            return;
        }
        searchActions.getSearch(keywords, page);
    }, [page]);

    useEffect(() => {
        /**
         * After updating data set count of pages
         */

        if (!didMount.current) {
            didMount.current = true;
            return;
        }

        setTotalPages(searchData?.searchPhotos?.total_pages);
    }, [searchData]);

    return (
        <DefaultContainer>
            <div className={classes.root}>
                <h2 className={classes.title}>
                    Find something new for yourself <br /> and even more
                </h2>

                <div className={classes.form}>
                    <input
                        placeholder={"Search here"}
                        className={classes.searchInput}
                        type="text"
                        onChange={(e) => {
                            setKeywords(searchFilters.filterInput(e.target.value));
                        }}
                    />

                    <button
                        className={classes.searchButton}
                        onClick={() => {
                            searchActions.getSearch(keywords, page);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                            <path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
                        </svg>
                    </button>
                </div>

                {searchData?.searchPhotos?.results && (
                    <>
                        <PhotosListContainer>
                            <SearchResults list={searchData.searchPhotos.results} />
                        </PhotosListContainer>

                        <Pagination
                            decrement={decrement}
                            increment={increment}
                            page={page}
                            totalPages={totalPages}
                        />
                    </>
                )}
            </div>
        </DefaultContainer>
    );
}
