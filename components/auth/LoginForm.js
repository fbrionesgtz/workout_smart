import {useState} from "react";
import styles from "./LoginForm.module.css";
import btnStyles from "../ui/button/Button.module.css";
import Card from "../ui/card/Card";
import Button from "../ui/button/Button";

const LoginForm = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleLoginSubmit = () => {

    };

    return <Card>
        <form onSubmit={handleLoginSubmit} className={styles.form}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
            <Button
                classes={btnStyles.btnPrimary}
                label="Sign In"
                type="submit"/>
        </form>
    </Card>
}

export default LoginForm;