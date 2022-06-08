import PlusIcon from "../icons/PlusIcon";
import styles from "./AddSet.module.css";
import {workoutActions} from "../../store/workout-slice";
import {useDispatch, useSelector} from "react-redux";

const AddSet = (props) => {
    const dispatch = useDispatch();
    const sets = useSelector(state => {
        return state.workout.sets
    });

    const handleAddSetToWorkout = () => {
        const setNum = sets.length + 1;

        dispatch(workoutActions.addSets({
            setNum: setNum,
            exercises: [{
                name: props.category === "AMRAP" ? `${props.category} ${setNum}` : "",
                reps: 0,
                time: 0,
                rest: 0
            }]}
        ));
    }

    return <div className={styles.addSet}>
        <p>{props.label}</p>
        <button className={styles.addButton} onClick={handleAddSetToWorkout}>
            <PlusIcon height="1em" width="1em" color="#005f73" strokeWidth="0.2em"/>
        </button>
    </div>
}

export default AddSet;