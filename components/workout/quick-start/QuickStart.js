import styles from "./QuickStart.module.css";
import QuickStartModule from "./QuickStartModule";

const QuickStart = (props) => {
    const modulesComponents = props.categories.map((category) => (
        <QuickStartModule
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

export default QuickStart;