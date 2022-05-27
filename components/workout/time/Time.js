import {useState, Fragment} from "react";
import {useSelector, useDispatch} from "react-redux";
import {workoutActions} from "../../../store/workout-slice";
import styles from "./Time.module.css";

let firstSet = true;
const Time = (props) => {
    const currentSet = useSelector(state => {state.workout.currentSet});
    const dispatch = useDispatch();
    const [minutes, setMinutes] = useState(0);
    const [showTime, setShowTime] = useState(false);

    const range = (start, end) => {
        const length = end - start;
        return Array.from({length}, (_, i) => start + i);
    }

    const handleShowTime = () => {
        setShowTime(prevState => {
            return !prevState;
        });
    }

    const handleAddTimeToWorkout = (minutes) => {
        handleShowTime();
        if (showTime) {
            minutes = 0;
            setMinutes(0);
            return;
        }

        setMinutes(minutes);

        // dispatch(workoutActions.setCurrentSet(true));
        dispatch(workoutActions.addSets(1));
        dispatch(workoutActions.addTime(minutes));
    }

    return <Fragment>
        {!showTime ?
            <div className={styles.timeContainer}>
                <p>Time</p>
                <div className={styles.time}>
                    {range(1, 101).map((minutes) => (
                        <div className={styles.minute}
                             key={minutes}
                             value={minutes}
                             onClick={handleAddTimeToWorkout.bind(null, minutes)}>
                            <p>{`${minutes} ${minutes === 1 ? "minute" : "minutes"}`}</p>
                        </div>
                    ))}
                </div>
            </div> :
            <div className={styles.showMinutesContainer}>
                <p>{props.label}</p>
                <div className={styles.showMinutes} onClick={handleShowTime}>
                    <p>{minutes}</p>
                </div>
            </div>
        }
    </Fragment>
}

export default Time;