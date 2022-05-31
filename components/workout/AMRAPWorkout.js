import {Fragment} from "react";
import Time from "./time/Time";
import AddSet from "../sets/AddSet";
import {useSelector} from "react-redux";

const AMRAPWorkout = (props) => {
    const sets = useSelector(state => {
        return state.workout.sets;
    });

    return <Fragment>
        <div className={props.descClass}>
            <h1>{props.title}</h1>
            <p>As many reps as possible</p>
        </div>
        <div className={props.contentClass}>
            {sets.map(set => (
                <Time
                    key={set.setNum}
                    setNum={set.setNum}
                    label="Work"
                />
            ))}
            <AddSet label="Add multiple AMRAP's"/>
        </div>
    </Fragment>
};

export default AMRAPWorkout;