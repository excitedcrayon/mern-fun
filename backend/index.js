const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const PORT = 9000;


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task_os'
});

app.get('/', (req, res)  => {
    return res.json('Hello from MERN back-end');
});

app.get('/category', (req, res) => {
    const categoryQuery = "SELECT * FROM category";
    db.query(categoryQuery, (err, category) => {
        if(err) return res.json(err);
        return (category.length == 0) ? res.json({ response: 'No categories found' }) : res.json({ response: category });
    });
});

app.post('/category', (req, res) => {
    const insertCategory = "INSERT INTO `category` (`name`,`description`,`category_active`) VALUES (?)";
    const insertCategoryData = [req.body.name, req.body.description, req.body.category_active];
    db.query(insertCategory, [insertCategoryData], (err, category) => {
        if (err) return res.json({ response : 'error', status : err });
        return res.json({ response: 'New category inserted' })
    })
});

app.listen(PORT, () => {
    console.log(`Backend Server Running`);
});