import styles from "./Categories.module.css";
import CategoryModule from "./CategoryModule";

const Categories = (props) => {
    const modulesComponents = props.categories.map((category) => (
        <CategoryModule
            key={category.id}
            classes={styles.cell}
            image={category.image}
            title={category.title}
            description={category.description}
        />
    ));

    return <section className={styles.grid}>
        {modulesComponents}
    </section>
}

export default Categories;