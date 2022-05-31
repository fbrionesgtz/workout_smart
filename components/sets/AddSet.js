import PlusIcon from "../icons/PlusIcon";
import styles from "./AddSet.module.css";
import {workoutActions} from "../../store/workout-slice";
import {useDispatch, useSelector} from "react-redux";

const AddSet = (props) => {
    const sets = useSelector(state => {
        return state.workout.sets
    });
    const dispatch = useDispatch();

    const handleAddSetToWorkout = () => {
        const setNum = sets.length + 1;

        dispatch(workoutActions.addSets({
            setNum: setNum,
            exercises: [{
                name: "",
                reps: 0,
                time: 0
            }]}
        ));
    }

    console.log(sets);

    return <div className={styles.addSet}>
        <p>{props.label}</p>
        <button className={styles.addButton} onClick={handleAddSetToWorkout}>
            <PlusIcon height="1em" width="1em" color="#005f73" strokeWidth="0.2em"/>
        </button>
    </div>
}

export default AddSet;