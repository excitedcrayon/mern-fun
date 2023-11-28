
function Category({ category }){
    return(
        <div className="category-row">
            <span className="cat-title">{category.name}</span>
            <span className="cat-desc">{category.description}</span>
            <span className="cat-active">{category.category_active}</span>
        </div>
    )
}

export default Category;