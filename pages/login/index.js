import {Fragment} from "react";
import LoginForm from "../../components/auth/LoginForm";
import Nav from "../../components/header/Nav";

const Login = () => {
    return <Fragment>
        <Nav/>
        <LoginForm />
    </Fragment>
}

export default Login;