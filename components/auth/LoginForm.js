import {useState} from "react";

const LoginForm = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleLoginSubmit = () => {

    };

    return <form onSubmit={handleLoginSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"/>
        <label htmlFor="password">Password</label>
        <input type="text" id="password"/>
        <button type="submit">Login</button>
    </form>
}

export default LoginForm;