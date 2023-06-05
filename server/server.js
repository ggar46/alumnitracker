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

app.put('/api/alumni/:alumnusId', async (req, res) =>{
  const id = parseInt(req.params.alumnusId);
  try {
    await db.query(
			"UPDATE alumni SET name = $1, position = $2, company = $3, salary = $4, start_date = $5, is_looking = $6, linkedin = $7 WHERE id = $8", 
			[req.body.name, req.body.position, req.body.company, req.body.salary, req.body.start_date, req.body.is_looking, req.body.linkedin, id]
		);
	} catch(e) {
		return res.status(400).send(String(e));
	}
	return res.end();
})

app.delete('/api/alumni/:alumnusId', async (req, res) => {
  const id = parseInt(req.params.alumnusId);
  try {
    await db.query("DELETE FROM alumni WHERE id = $1", [id]);
  } catch (e) {
    return res.status(400).json({ e });
  }
});


app.listen(PORT, () => {
  console.log(`The server is listening on ${PORT}`);
});