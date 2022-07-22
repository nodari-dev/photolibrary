import "./style.scss";

export default function (props){
    return(
        <div className={`image-container ${props.small ? "small-style" : "default-style"}`}>
            <img src={props.src} alt="Photo"/>
        </div>
    )
}