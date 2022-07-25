export function DefaultLayout (props) {
    return(
        <div className={"container default-layout"}>
                {props.children}
        </div>
    )
}

export function PhotoLayout(props){
    return(
        <div className={"container photo-layout"}>
            {props.children}
        </div>
    )
}

export function GalleryLayout (props){
    return(
        <div className={"container gallery-layout"}>
            {props.children}
        </div>
    )
}