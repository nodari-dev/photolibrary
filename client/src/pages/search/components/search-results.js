import {PhotoCard} from "../../../components";


export const SearchResults = ({list}) =>{
    return(
        <>
            {list.map((item, index) => (
                    <div key={index}>
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