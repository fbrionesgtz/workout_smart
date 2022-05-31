import {Fragment} from "react";
import Time from "./time/Time";
import Reps from "./reps/Reps";
import AddSet from "../sets/AddSet";

const AMRAPWorkout = (props) => {
    return <Fragment>
        <div className={props.descClasses}>
            <h1>{props.title}</h1>
            <p>High-intensity interval training</p>
        </div>
        <div className={props.contentClass}>
            <Time label="Work"/>
            <AddSet label="Add sets"/>
        </div>
    </Fragment>
};

export default AMRAPWorkout;