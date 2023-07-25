const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: '0317',
  database: "academic_approval", 
  connectionLimit: 10
});

(async () => {
  try {
    const connection = await pool.getConnection();

    const [semesterDetails] = await connection.query('SELECT * FROM academic_approval.`academic-semester_details`;');
    const [staffDetails] = await connection.query('SELECT * FROM academic_approval.academic_staff_details;');
    const [courseRegistration] = await connection.query('SELECT * FROM academic_approval.course_registration;');
    const [courses] = await connection.query('SELECT * FROM academic_approval.courses;');
    const [departmentDetails] = await connection.query('SELECT * FROM academic_approval.department_deatils;');
    const [studentRegistration] = await connection.query('SELECT * FROM academic_approval.student_registration;');
    const [studentUniDetails] = await connection.query('SELECT * FROM academic_approval.student_uni_details;');
    const [userDetails] = await connection.query('SELECT * FROM academic_approval.user_details;');

    connection.release(); 

    console.log('Semester Details:', semesterDetails);
    console.log('Staff Details:', staffDetails);
    console.log('Course Registration:', courseRegistration);
    console.log('Courses:', courses);
    console.log('Department Details:', departmentDetails);
    console.log('Student Registration:', studentRegistration);
    console.log('Student Uni Details:', studentUniDetails);
    console.log('User Details:', userDetails);
  } catch (err) {
    console.error('Error executing query:', err);
  } finally {
    pool.end();
  }
})();
