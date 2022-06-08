import {Fragment, useEffect} from "react";
import Range from "./range/Range";
import AddSet from "../sets/AddSet";
import {useSelector, useDispatch} from "react-redux";
import {workoutActions} from "../../store/workout-slice";
import Button from "../ui/button/Button";
import btnStyles from "../ui/button/Button.module.css";

const AMRAPWorkout = (props) => {
    const dispatch = useDispatch();
    const sets = useSelector(state => {
        return state.workout.sets;
    });

    useEffect(() => {
        dispatch(workoutActions.initializeWorkout({
            category: "AMRAP",
            sets: [{
                setNum: 1,
                exercises: [{
                    name: "AMRAP 1",
                    time: 0,
                    rest: 0
                }]
            }]
        }));
    }, []);

    const handleAddTimeToWorkout = (setNum, minutes) => {
        dispatch(workoutActions.addTime({setNum: setNum, time: minutes}));
    }

    const handleAddRestToWorkout = (setNum, rest) => {
        dispatch(workoutActions.addRest({setNum: setNum, rest: rest}));
    }

    const handleStartAMRAPWorkout = () => {
        for (let key in sets) {
            let time = 0;
            const interval = setInterval(() => {
                time++;
                console.log(time);

                if(time === sets[key].exercises[0].time) {
                    clearTimeout(interval);
                }
            }, 1000);
        }
    }

    console.log(sets);

    return <Fragment>
        <div className={props.descClass}>
            <h1>{props.title}</h1>
            <p>As many reps as possible</p>
        </div>
        <div className={props.contentClass}>
            {sets.map(set => (
                <div key={set.setNum}>
                    <p>Set {set.setNum}</p>
                    {set.setNum > 1 &&
                    <Range
                        key={`R${set.setNum}`}
                        setNum={set.setNum}
                        rangeCap={10}
                        unit="minute"
                        label="Rest"
                        onSetRange={handleAddRestToWorkout.bind(null, set.setNum)}
                    />}
                    <Range
                        key={`W${set.setNum}`}
                        setNum={set.setNum}
                        rangeCap={100}
                        unit="minute"
                        label="Work"
                        onSetRange={handleAddTimeToWorkout.bind(null, set.setNum)}
                    />
                </div>
            ))}
            <AddSet
                category={props.title}
                label="Add multiple AMRAP's"
            />
            <Button
                classes={btnStyles.btnPrimary}
                label="Start Workout"
                onClick={handleStartAMRAPWorkout}
            />
        </div>
    </Fragment>
};

export default AMRAPWorkout;