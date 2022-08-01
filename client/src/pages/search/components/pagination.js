import {useStyles} from "../styles";

export const Pagination = ({decrement, increment, page, totalPages}) => {
    const classes = useStyles();

    return (
        <div className={classes.pagination}>
            {page < totalPages && page > 1 &&
                <div className={classes.paginationAction}
                     onClick={() => {
                         decrement();
                     }}>Prev</div>
            }
            <h4>
                {page} of {totalPages}
            </h4>
            {page !== totalPages &&
                <div className={classes.paginationAction}
                     onClick={() => {
                         increment();
                     }}>Next</div>
            }
        </div>
    )
}