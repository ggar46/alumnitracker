import React, { useState, useEffect } from "react";
import MyForm from "./Form";
import Alumnus from "./Alumnus";

const ListAlumni = () => {
  const [alumni, setAlumni] = useState([]);
  const [editingAlumnus, setEditingAlumnus] = useState(null);

  const loadAlumni = () => {
    fetch("http://localhost:8080/api/alumni")
      .then((response) => response.json())
      .then((alumni) => {
        setAlumni(alumni);
      });
  };

  useEffect(() => {
    loadAlumni();
  }, []);

  const onSaveAlumnus = (newAlumnus) => {
    setAlumni((alumni) => [...alumni, newAlumnus]);
  };
  const updateAlumnus = () => {
    loadAlumni();
  };
  const onDelete = (alumnus) => {
    return fetch(`http://localhost:8080/api/alumni/${alumnus.id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        loadAlumni();
      }
    });
  };

  const onUpdate = (toUpdateAlumnus) => {
    setEditingAlumnus(toUpdateAlumnus);
  };

  return (
    <div className="mybody">
      <div className="list-students">
        <h2>Alumni List </h2>
        <div className="scrollable-list">
          <ul>
            {alumni.map((alumnus) => {
              return (
                <li key={alumnus.id}>
                  {" "}
                  <Alumnus
                    alumnus={alumnus}
                    toDelete={onDelete}
                    toUpdate={onUpdate}
                  />
                </li>
              );
            })}
          </ul>
        </div>
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

export default ListAlumni;
