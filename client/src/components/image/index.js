import "./style.scss";

export default function (props){

    const styles = {
        "small": "small-style",
        "full": "full-style"
    }

    return(
        <div className={`image-container ${styles[props.size]}`}>
            <img src={props.src} alt="Photo"/>
        </div>
    )
}