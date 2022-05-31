import styles from "./CreateWorkout.module.css";
import AMRAPWorkout from "./AMRAPWorkout";
import CustomWorkout from "./CustomWorkout";
import TABATAWorkout from "./TABATAWorkout";
import EMOMWorkout from "./EMOMWorkout";
import ForTimeWorkout from "./ForTimeWorkout";

const CreateWorkout = (props) => {
    return <div className={styles.createWorkoutGrid}>
        {props.category === "AMRAP" &&
        <AMRAPWorkout
            title={props.category}
            descClass={styles.workoutDescription}
            contentClass={styles.workoutContent}/>}
        {props.category === "For Time" &&
        <ForTimeWorkout
            title={props.category}
            descClass={styles.workoutDescription}
            contentClass={styles.workoutContent}/>}
        {props.category === "EMOM" &&
        <EMOMWorkout
            title={props.category}
            descClass={styles.workoutDescription}
            contentClass={styles.workoutContent}/>}
        {props.category === "TABATA" &&
        <TABATAWorkout
            title={props.category}
            descClass={styles.workoutDescription}
            contentClass={styles.workoutContent}/>}
        {props.category === "Custom Workout" &&
        <CustomWorkout
            title={props.category}
            descClass={styles.workoutDescription}
            contentClass={styles.workoutContent}/>}
    </div>
}

export default CreateWorkout;