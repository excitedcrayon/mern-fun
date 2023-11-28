import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateCategory(){

    const postCategory = 'http://localhost:9000/category';
    const navigate = useNavigate();
    const [addCategory, setAddCategory] = useState({
        name: '',
        description: '',
        category_active: 'yes'
    });
    const formData = new FormData();

    const handleFormChange = (e) => {
        setAddCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submitForm = (e) => {
        e.preventDefault();

        formData.append('name', addCategory.name);
        formData.append('description', addCategory.description);
        formData.append('category_active', addCategory.category_active);
        
        fetch(postCategory, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(post => {
            console.log(post);
            if(post.response === 'New category inserted'){
                navigate('/');
            }
        })
        .catch(err => { console.log(err) });
    };

    return(
        <div className="create-category-form">
            <div className="crud-form">
                <div className="form-row">
                    <label>Name</label>
                    <input type="text" name="name" onChange={handleFormChange} placeholder="Enter name"/>
                </div>
                <div className="form-row">
                    <label>Description</label>
                    <textarea name="description" onChange={handleFormChange} cols="30" rows="10" placeholder="My category description"></textarea>
                </div>
                <div className="form-button">
                    <button onClick={submitForm} className="btn-primary">Create Category</button>
                </div>
            </div>
        </div>
    )
}

export default CreateCategory;