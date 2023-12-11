const queries = require("./queries");
const db = require("../../dbConfig");

const getStudents = (req, res) => {
  db.query(queries.getStudents, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};
const getStudentById = (req, res) => {
  var id = parseInt(req.params.id);
  db.query(queries.getStudentById, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};
const addStudent = (req, res) => {
  const { name, email, dbo, salary } = req.body;
  db.query(queries.addStudent, [name, email, dbo, salary], (err, result) => {
    if (err) throw err;
    res.status(200).json("Student added Successfully!");
  });
};
const updateStudent = (req, res) => {
    var id = parseInt(req.params.id)
    const {name}=req.body
    db.query(queries.updateStudent, [name,id], (err, result) => {
      if (err) throw err;
      res.status(200).json("Student updated Successfully!");
    });
  };


const deleteStudent = (req, res) => {
    var id = parseInt(req.params.id);
    db.query(queries.deleteStudent, [id], (err, result) => {
      if (err) throw err;
      res.status(200).json("Student deleted Successfully!");
    });
  };

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent
};
