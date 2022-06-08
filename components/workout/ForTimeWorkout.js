import {Fragment, useEffect} from "react";
import Range from "./range/Range";
import {workoutActions} from "../../store/workout-slice";
import {useDispatch, useSelector} from "react-redux";
import Button from "../ui/button/Button";
import btnStyles from "../ui/button/Button.module.css";

const ForTimeWorkout = (props) => {
    const dispatch = useDispatch();
    const sets = useSelector(state => {
        return state.workout.sets;
    });

    useEffect(() => {
        dispatch(workoutActions.initializeWorkout({
            category: "For Time",
            sets: [{
                setNum: 1,
                exercises: [{
                    name: "Round 1",
                    time: 0,
                    rest: 0
                }]
            }]
        }));
    }, []);

    return <Fragment>
        <div className={props.descClass}>
            <h1>{props.title}</h1>
            <p>As fast as possible for time</p>
        </div>
        <div className={props.contentClass}>
            <Range
                rangeCap={100}
                label="Time cap"
                unit="minute"
            />
            <Range
                rangeCap={10}
                label="Rest"
                unit="minute"
            />
            <Range
                rangeCap={10}
                label="Sets"
                unit="set"
            />
            <Button
                classes={btnStyles.btnPrimary}
                label="Start Workout"
            />
        </div>
    </Fragment>
};

export default ForTimeWorkout;