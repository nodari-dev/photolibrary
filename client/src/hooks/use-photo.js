import {useLazyQuery} from "@apollo/client";
import {GET_PHOTO_DETAILS} from "./get-photo-details";

export default function usePhoto() {
    const [_getPhoto, {data}] = useLazyQuery(GET_PHOTO_DETAILS);

    const getPhoto = (id) =>{
        _getPhoto({
            variables: {
                photoId: id
            }
        })
    }

    return{
        photoActions: {getPhoto},
        photoData: data
    }
}