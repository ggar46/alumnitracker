const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'This is our template ExpressJS with React-Vite' });
});

app.get('/api/alumni', async (req, res) => {
  try {
    const { rows: alumni } = await db.query('SELECT * FROM alumni ORDER BY id ASC');
    res.send(alumni);
  } catch (e) {
    return res.status(400).send(String(e));
  }
});

app.post('/api/alumni', async (req, res) => {
  try {
    const result = await db.query(
      "INSERT INTO alumni(name, position, company, salary, start_date, is_looking, linkedin) VALUES($1, $2, $3, $4, $5, $6, $7)",
      [req.body.name, req.body.position, req.body.company, req.body.salary, req.body.start_date, req.body.is_looking, req.body.linkedin],
    );
    const returnObj = {
      id: result.rows[0].id,
      name: req.body.name,
      position: req.body.position,
      company: req.body.company,
      salary: req.body.salary,
      start_date: req.body.start_date,
      is_looking: req.body.is_looking,
      linkedin: req.body.linkedin
    }
    return res.status(200).json(returnObj);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.put('/api/students/:studentId', async (req, res) =>{
  //console.log(req.params);
  //This will be the id that I want to find in the DB - the student to be updated
  const studentId = req.params.studentId
  const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname, iscurrent: req.body.is_current}
  console.log("In the server from the url - the student id", studentId);
  console.log("In the server, from the react - the student to be edited", updatedStudent);
  // UPDATE students SET lastname = "something" WHERE id="16";
  const query = `UPDATE students SET firstname=$1, lastname=$2, is_current=$3 WHERE id=${studentId} RETURNING *`;
  const values = [updatedStudent.firstname, updatedStudent.lastname, updatedStudent.iscurrent];
  try {
    const updated = await db.query(query, values);
    console.log(updated.rows[0]);
    res.send(updated.rows[0]);
  } catch(e){
    console.log(e);
    return res.status(400).json({e})
  }
})

app.delete('/api/students/:studentId', async (req, res) => {
  try {
    const studentId = req.params.studentId;
    await db.query('DELETE FROM students WHERE id=$1', [studentId]);
    console.log("From the delete request-url", studentId);
    res.status(200).end();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});


app.listen(PORT, () => {
  console.log(`The server is listening on ${PORT}`);
});