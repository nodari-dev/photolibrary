import {PhotoCard} from "../../../components";
import usePhoto from "../../../hooks/use-photo";

export const RelatedResults = ({list}) => {
    const {photoActions} = usePhoto();
    return (
        <>
            {list.map((item, index) => (
                    <div key={index} onClick={() => {
                        photoActions.getPhoto(item.id)
                    }}>
                        <PhotoCard data={item}
                                   interactive={true}
                                   additionalInfo={true}
                                   fixedSize={false}/>
                    </div>
                )
            )}
        </>
    )

}