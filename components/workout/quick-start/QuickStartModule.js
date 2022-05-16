import styles from "./QuickStartModule.module.css";
import Image from "next/image";
import {useRouter} from "next/router";

const QuickStartModule = (props) => {
    const router = useRouter();

    return <div className={`${styles.quickStartModule} ${props.classes}`} onClick={() => {router.push(`/create-workout/${props.title}`)}}>
        <Image src={props.image} layout={"fill"}/>
        <div className={styles.moduleContent}>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    </div>
}

export default QuickStartModule;