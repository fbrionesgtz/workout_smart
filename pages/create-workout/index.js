import Categories from "../../components/workout/categories/Categories";

const SelectCategory = (props) => {
    return <section>
        <Categories
            categories={props.categories}
        />
    </section>
}

export const getStaticProps = async () => {
    let categories = [];
    try {
        const response = await fetch("https://workout-smart-default-rtdb.firebaseio.com/workout_categories.json");

        if (!response.ok) {
            throw new Error('Request failed!');
        }

        const categories_data = await response.json();
        for (const key in categories_data) {
            categories.push({
                id: key,
                description: categories_data[key].description,
                image: categories_data[key].image,
                title: categories_data[key].title
            })
        }

    } catch (err) {
        console.log(err.message);
    }

    return {
        props: {
            categories: categories
        }
    }
}

export default SelectCategory;