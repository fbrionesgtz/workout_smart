import {useState, Fragment} from "react";
import {useDispatch} from "react-redux";
import {workoutActions} from "../../../store/workout-slice";
import styles from "./Range.module.css";

const Range = (props) => {
    const [units, setUnits] = useState(0);
    const [showTime, setShowTime] = useState(false);

    const range = (start, end) => {
        const length = end - start;
        return Array.from({length}, (_, i) => start + i);
    }

    const handleShowUnit = () => {
        setShowTime(prevState => {
            return !prevState;
        });
    }

    return <Fragment>
        <div className={styles.timeContainer}>
            <p>{props.label}</p>
            {!showTime ?
                <div className={styles.time}>
                    {range(1, props.rangeCap + 1).map((units) => (
                        <div className={styles.minute}
                             key={units}
                             onClick={() => {
                                 setUnits(units);
                                 handleShowUnit();
                                 props.onSetRange(units);
                             }}>
                            <p>{`${units} ${units === 1 ? props.unit : props.unit + "s"}`}</p>
                        </div>
                    ))}
                </div> :
                <div className={styles.showMinutes} onClick={handleShowUnit}>
                    <p>{units}</p>
                </div>}
        </div>
    </Fragment>
}

export default Range;