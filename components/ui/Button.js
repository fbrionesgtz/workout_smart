import styles from "./Button.module.css";

const Button = (props) => {
    return <button
        className={styles.primaryButton}
        type={props.type ? props.type : "button"}
        onClick={props.onClick}>
        {props.label}
    </button>
};

export default Button;