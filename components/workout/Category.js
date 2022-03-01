import styles from "./Category.module.css";

const Category = (props) => {
    return <div>
        <label htmlFor="category">{props.label}</label>
        <input type="checkbox" id="category"/>
    </div>
};

export default Category;