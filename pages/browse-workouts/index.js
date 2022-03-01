import {Fragment} from "react";
import Nav from "../../components/header/Nav";
import WorkoutCategories from "../../components/workout/WorkoutCategories";

const BrowseWorkouts = () => {
    return (
        <Fragment>
            <Nav/>
            <WorkoutCategories/>
        </Fragment>
    )
}

export default BrowseWorkouts;