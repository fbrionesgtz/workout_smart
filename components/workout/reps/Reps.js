import {useState} from "react";
import styles from "./Reps.module.css";

const Reps = () => {
    const [reps, setReps] = useState(0);

    const handleSetReps = (e) => {
        setReps(e.target.value);
    }

    const handleAddRepsToWorkout = () => {
        console.log(reps);
    }

    return <div className={styles.reps}>
        <input
            type="number"
            value={reps}
            min={0}
            onChange={handleSetReps}
            onBlur={handleAddRepsToWorkout}/>
    </div>
}

export default Reps;