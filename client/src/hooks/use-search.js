import {useState} from "react";

export default function useSearch () {

    const filterInput = (string) =>{
        return string.replace(" ", ",");
    }

    const filterTags = (str, tag) =>{ return str + tag.title; }


    return{
        filters: {filterInput, filterTags}
    }
}
