const queries = require("./queries");
const db = require("../../dbConfig");
const createError = require('http-errors')

const getEmployees = (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {      
        if (err) res.json({ type: 'danger', message: err.message })
        res.render('index', { title: 'Home page', emplst: result.rows })
    })
};

const addEmployee = (req, res) => {
    res.render('add_user', { title: 'Add User' })
};

const insertEmployee = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const adresult = await db.query(queries.addEmp, [name, email, phone, req.file.filename])
        req.session.message = { type: 'success', message: 'Employee added Successfully!' }
        res.redirect('/')
    } catch (err) {
        console.log(err.message)
        res.json({ type: 'danger', message: err.message })
    }
};


module.exports = {
    getEmployees, addEmployee, insertEmployee
}