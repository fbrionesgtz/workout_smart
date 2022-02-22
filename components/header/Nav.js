import Link from "next/link";
import styles from "./Nav.module.css";
import Button from "../ui/Button";

const Nav = () => {
    const handleBtnLoginClick = () => {
        console.log("click");
    }

    return <nav className={styles.nav}>
        <p>Workout Smart</p>
        <ul>
            <li>
                <Link href="/">Browse</Link>
            </li>
            <li>
                <Link href="/">My Workouts</Link>
            </li>
            <li>
                <Link href="/">Create Workout</Link>
            </li>
            <li>
                <Button
                    label="Login"
                    onClick={handleBtnLoginClick}
                />
            </li>
        </ul>
    </nav>
};

export default Nav;