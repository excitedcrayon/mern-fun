import { useEffect, useState } from "react";
import CreateCategory from "./components/CreateCategory";
import Category from './Category';

function Home(){

    const [categories, setCategories] = useState([]);
    const categoriesDataURL = `http://localhost:9000/category`;

    useEffect(() => {
        fetch(categoriesDataURL)
        .then(response => response.json())
        .then(data => {
            setCategories(data.response);
        })
        .catch(err => {console.log(err)});
    });

    return(
        <>
            <CreateCategory />
            <div className="categories">
                {categories.map(category => (
                    <Category key={category.id} category={category} />
                ))}
            </div>
        </>
    )
}

export default Home;