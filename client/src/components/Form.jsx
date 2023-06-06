import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const MyForm = ({ onSaveAlumnus, editingAlumnus, onUpdateAlumnus }) => {
  // This is the original State with not initial student
  const [alumnus, setAlumnus] = useState(
    editingAlumnus || {
      name: "",
      position: "",
      company: "",
      salary: "",
      date: "",
      is_looking: false,
      linkedin: "",
      is_converted: false
    }
  );

  //create functions that handle the event of the user typing into the form
  const handleNameChange = (event) => {
    const name = event.target.value;
    setAlumnus((alumnus) => ({ ...alumnus, name }));
  };

  const handlePositionChange = (event) => {
    const position = event.target.value;
    setAlumnus((alumnus) => ({ ...alumnus, position }));
  };

  const handleCompanyChange = (event) => {
    const company = event.target.value;
    setAlumnus((alumnus) => ({ ...alumnus, company }));
  };

  const handleSalaryChange = (event) => {
    const salary = event.target.value;
    setAlumnus((alumnus) => ({ ...alumnus, salary }));
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setAlumnus((alumnus) => ({ ...alumnus, date }));
  };

  const handleCheckChange = (event) => {
    const is_looking = event.target.checked;
    //console.log(iscurrent);
    setAlumnus((alumnus) => ({ ...alumnus, is_looking }));
  };

  const handleLinkedinChange = (event) => {
    const linkedin = event.target.value;
    //console.log(iscurrent);
    setAlumnus((alumnus) => ({ ...alumnus, linkedin }));
  };

  const handleConvertedChange = (event) => {
    const is_converted = event.target.checked;
    //console.log(iscurrent);
    setAlumnus((alumnus) => ({ ...alumnus, is_converted }));
  };

  const clearForm = () => {
    setAlumnus({
      name: "",
      position: "",
      company: "",
      salary: "",
      date: "",
      linkedin: "",
      is_looking: false,
      is_converted: false,
    });
  };

  //A function to handle the post request
  const postAlumnus = (newAlumnus) => {
    return fetch("http://localhost:8080/api/alumni", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAlumnus),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("From the post ", data);
        //I'm sending data to the List of Alumnus (the parent) for updating the list
        onSaveAlumnus(data);
        //this line just for cleaning the form
        clearForm();
      });
  };

  //A function to handle the post request
  const putAlumnus = (toEditAlumnus) => {
    return fetch(`http://localhost:8080/api/alumni/${toEditAlumnus.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toEditAlumnus),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        onUpdateAlumnus(data);
        //this line just for cleaning the form
        clearForm();
      });
  };

  //A function to handle the submit in both cases - Post and Put request!
  const handleSubmit = (e) => {
    e.preventDefault();
    if (alumnus.id) {
      putAlumnus(alumnus);
    } else {
      postAlumnus(alumnus);
    }
  };

  return (
    <Form className="form-students" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <input
          type="text"
          id="add-user-name"
          placeholder="Name"
          required
          value={alumnus.name}
          onChange={handleNameChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Current Position</Form.Label>
        <input
          type="text"
          id="add-user-position"
          placeholder="Current Position"
          required
          value={alumnus.position}
          onChange={handlePositionChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Company</Form.Label>
        <input
          type="text"
          id="add-user-position"
          placeholder="Company"
          required
          value={alumnus.company}
          onChange={handleCompanyChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Salary</Form.Label>
        <input
          type="text"
          id="add-user-salary"
          placeholder="Salary"
          required
          value={alumnus.salary}
          onChange={handleSalaryChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>LinkedIn</Form.Label>
        <input
          type="text"
          id="add-user-linkedin"
          placeholder="LinkedIn"
          required
          value={alumnus.linkedin}
          onChange={handleLinkedinChange}
        />
      </Form.Group>

      <p></p>

      <Form.Group>
        <Form.Label>Start Date</Form.Label> <p></p>
        {"     "}
        <input
          type="date"
          id="add-user-date"
          placeholder="Date"
          required
          value={alumnus.date}
          onChange={handleDateChange}
        />
      </Form.Group>

      <Form.Check
        type={"checkbox"}
        id={`is_looking`}
        checked={alumnus.is_looking}
        onChange={handleCheckChange}
        label={`I'm currently looking for work and opportunties`}
      />

      <Form.Group>
        <Form.Check
          type={"checkbox"}
          id={`is_converted`}
          checked={alumnus.is_converted}
          onChange={handleConvertedChange}
          label={`I was converted from my Techtonica placement`}
        />
      </Form.Group>

      <Form.Group>
        <Button id="submit" type="submit" variant="outline-success">
          {alumnus.id ? "Edit Alumnus" : "Add Alumnus"}
        </Button>
        {alumnus.id ? (
          <Button type="button" variant="outline-warning" onClick={clearForm}>
            Cancel
          </Button>
        ) : null}
      </Form.Group>
    </Form>
  );
};

export default MyForm;
