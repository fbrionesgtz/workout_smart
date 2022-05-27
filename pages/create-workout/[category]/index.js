import {useRouter} from "next/router";
import CreateWorkout from "../../../components/workout/CreateWorkout";

const CreateWorkoutByCategory = () => {
    const {query} = useRouter();

    return <section>
        <CreateWorkout
            category={query.category}
        />
    </section>
}

export default CreateWorkoutByCategory;