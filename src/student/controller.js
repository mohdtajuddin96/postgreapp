const queries = require("./queries");
const db = require("../../dbConfig");
const createError = require('http-errors')

const getStudents = (req, res) => {
  db.query(queries.getStudents, (err, result) => {
    if (err) createError.InternalServerError(err.message)
    res.status(200).json(result.rows);

  });
};

const getStudentById = (req, res) => {
  var id = parseInt(req.params.id);
  db.query(queries.getStudentById, [id], (err, result) => {
    if (err) createError.InternalServerError(err.message)
    res.status(200).json(result.rows);
  });
};

const addStudent = async (req, res) => {
  const { name, email, dbo, salary } = req.body;
  try {
    const adresult = await db.query(queries.addStudent, [name, email, dbo, salary])
    res.status(201).json({ message: "Student added Successfully!", item: adresult.rows });
  } catch (err) {
    createError.InternalServerError(err.message)
  }
};

const updateStudent = async (req, res) => {
  var id = parseInt(req.params.id)
  const { name } = req.body
  try {
    const updresult = await db.query(queries.updateStudent, [name, id]);
    res.status(200).json({ message: "Student updated Successfully!", item: updresult.rows });
  } catch (error) {
    createError.InternalServerError(error.message)
  }
};

const deleteStudent = (req, res) => {
  var id = parseInt(req.params.id);
  db.query(queries.deleteStudent, [id], (err, result) => {
    if (err) createError.InternalServerError(err.message)
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
