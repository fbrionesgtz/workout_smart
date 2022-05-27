import styles from "./CreateWorkout.module.css";
import AMRAPWorkout from "./AMRAPWorkout";
import CustomWorkout from "./CustomWorkout";
import TABATAWorkout from "./TABATAWorkout";
import EMOMWorkout from "./EMOMWorkout";
import ForTimeWorkout from "./ForTimeWorkout";

const CreateWorkout = (props) => {
    const category = props.category;

    return <div className={styles.createWorkoutGrid}>
        <h1>{category}</h1>
        {category === "AMRAP" && <AMRAPWorkout/>}
        {category === "For Time" && <ForTimeWorkout/>}
        {category === "EMOM" && <EMOMWorkout/>}
        {category === "TABATA" && <TABATAWorkout/>}
        {category === "Custom Workout" && <CustomWorkout/>}
    </div>
}

export default CreateWorkout;