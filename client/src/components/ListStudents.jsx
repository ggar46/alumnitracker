import React, { useState, useEffect } from "react";
import * as ioicons from "react-icons/io5";
import MyForm from "./Form";
import Alumnus from "./Alumnus";

const ListStudents = () => {
  // this is my original state with an array of alumni from get request
  const [alumni, setAlumni] = useState([]);

  //this is the state needed for the UpdateRequest
  const [editingAlumnus, setEditingAlumnus] = useState(null);

  const loadAlumni = () => {
    // A function to fetch the list of alumni from db that will be load anytime that list change
    fetch("http://localhost:8080/api/alumni")
      .then((response) => response.json())
      .then((alumni) => {
        setAlumni(alumni);
      });
  };

  useEffect(() => {
    loadAlumni();
  }, [alumni]);

  const onSaveAlumnus = (newAlumnus) => {
    setAlumni((alumni) => [...alumni, newAlumnus]);
  };

  //A function to control the update in the parent (card component)
  const updateAlumnus = (savedAlumnus) => {
    loadAlumni();
  };

  //A function to handle the Delete funtionality
  const onDelete = (alumnus) => {
    return fetch(`http://localhost:8080/api/alumni/${alumnus.id}`, {
      method: "DELETE",
    }).then((response) => {
      //console.log(response);
      if (response.ok) {
        loadAlumni();
      }
    });
  };

  //A function to handle the Update functionality
  const onUpdate = (toUpdateAlumnus) => {
    setEditingAlumnus(toUpdateAlumnus);
  };

  return (
    <div className="mybody">
      <div className="list-students">
        <h2>Techtonica Alumni </h2>
        {/* This is placeholder text for the student cards for css planning 
            <p>This is where the mapped cards will go</p>
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
            </ul> */}
        {/* Commented this out in order to be able to view the rest of the page successfully<ul>
                {alumni.map((alumnus) => {
                    return <li key={alumnus.id}> <Alumnus alumnus={alumnus} toDelete={onDelete} toUpdate={onUpdate} /></li>
                })}
            </ul> */}
      </div>
      <MyForm
        key={editingAlumnus ? editingAlumnus.id : null}
        onSaveAlumnus={onSaveAlumnus}
        editingAlumnus={editingAlumnus}
        onUpdateAlumnus={updateAlumnus}
      />
    </div>
  );
};

export default ListAlumnus;
