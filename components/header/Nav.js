import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./Nav.module.css";
import btnStyles from "../ui/button/Button.module.css";
import Button from "../ui/button/Button";

const Nav = () => {
    const router = useRouter();
    const handleBtnLoginClick = () => {
        router.push("/login");
    }

    return <nav className={styles.nav}>
        <p>Workout Smart</p>
        <ul>
            <li>
                <Link href="/browse-workouts">Browse</Link>
            </li>
            <li>
                <Link href="/my-workouts">My Workouts</Link>
            </li>
            <li>
                <Link href="/create-workout">Create Workout</Link>
            </li>
            <li>
                <Button
                    label="Login"
                    onClick={handleBtnLoginClick}
                    classes={btnStyles.btnPrimary}
                />
            </li>
        </ul>
    </nav>
};

export default Nav;