import {Fragment} from "react";
import Time from "./time/Time";
import Reps from "./reps/Reps";

const AMRAPWorkout = () => {
    return <Fragment>
        <p>Create your own custom workout</p>
        <Time/>
        <Reps/>
    </Fragment>
};

export default AMRAPWorkout;