import styles from "./Jumbotron.module.css";
import Button from "../ui/button/Button";
import btnStyles from "../ui/button/Button.module.css";
import RunningSVG from "../ui/svg/RunningSVG";
import {useRouter} from "next/router";

const Jumbotron = () => {
    const router = useRouter();

    return <div className={styles.jumbo}>
        <RunningSVG width="50%" height="50%"/>
        <div className={styles.jumboContent}>
            <p>¨The only person you are destined to become is the person you decide to be.¨ – Ralph Waldo Emerson</p>
            <span>Take on the challenge today and and become the person you want to be!</span>
            <Button
                label="Start Now"
                classes={btnStyles.btnGhost}
                onClick={() => {router.push("/create-workout")}}
            />
        </div>
    </div>
};

export default Jumbotron;