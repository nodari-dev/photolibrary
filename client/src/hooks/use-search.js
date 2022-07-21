import {useState} from "react";

export default function useSearch () {
    const [params, _updateParams] = useState({
        keywords: undefined,
        page: 1
    });

    const updateParams = (type, value) =>{
        _updateParams({
            ...params,
            [type]: value
        });

        console.log(params);
    }
    const separateValues = (value) =>{
        return value.replace(" ", ",");
    }

    return{
        params: params,
        operations: {updateParams, separateValues}
    }
}