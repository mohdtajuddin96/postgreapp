const getStudents = "SELECT * FROM students";

const getStudentById = "SELECT * FROM students where emp_id=$1";

const addStudent = "INSERT INTO students(name,email,dbo,salary) VALUES($1,$2,$3,$4)";

const updateStudent = "UPDATE students SET name=$1 WHERE emp_id=$2";

const deleteStudent = "DELETE FROM students WHERE emp_id=$1";

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
};
