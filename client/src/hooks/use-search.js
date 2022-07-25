import {useState} from "react";

export default function useSearch () {

    const initialState = {
        keywords: undefined,
        page: 1
    }

    const [params, _updateParams] = useState({...initialState});

    const updateParams = (type, value) =>{
        /*
        * Updating params by key
        */
        _updateParams({
            ...params,
            [type]: value
        });
    }

    const clearParams = () =>{
        /*
        * Set initial value for params
        */
        _updateParams({
            ...initialState
        })
    }

    const adaptInputString = (string) =>{
        return string.replace(" ", ",");
    }

    const adaptTagsArray = (arr) =>{
        let tags = [];
        arr.forEach((item) => {
            tags.push(item.title);
        })

        return (String(tags))

    }


    return{
        params: params,
        adapting: {adaptInputString, adaptTagsArray},
        operations: {updateParams,  clearParams}
    }
}
