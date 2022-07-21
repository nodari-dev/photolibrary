import "./style.scss";
export default function (props){
    return(
        <div className={"container gallery-layout"}>
            {props.children}
        </div>
    )
}