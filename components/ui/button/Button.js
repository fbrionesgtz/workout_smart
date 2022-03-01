const Button = (props) => {
    return <button
        className={props.classes}
        type={props.type ? props.type : "button"}
        onClick={props.onClick}>
        {props.label}
    </button>
};

export default Button;