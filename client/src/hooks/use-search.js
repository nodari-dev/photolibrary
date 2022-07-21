import {useState} from "react";

export default function useSearch () {
    const [queriesString, _updateQueriesString] = useState(undefined);

    const updateQueriesArr = (value) =>{
        _updateQueriesString(value);
    }

    const separateValues = (value) =>{
        return value.replace(" ", ",");
    }

    return{
        queriesString: queriesString,
        operations: {updateQueriesArr, separateValues}
    }
}