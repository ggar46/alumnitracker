import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const Alumnus = ({alumnus, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateAlumnus) => {
        toUpdate(toUpdateAlumnus)
    }

    const onDelete = (toDeleteAlumnus) => {
        toDelete(toDeleteAlumnus)
    }

    return (
        <Card>
            <Card.Body>
            <Card.Title> {alumnus.name} </Card.Title>
            <p> Job Title: {alumnus.position} </p>
            <p> Company: {alumnus.company} </p>
            <p> Current Salary: {alumnus.salary} </p>
            <p> Start Date: {alumnus.start_date ? (alumnus.start_date.toString().slice(0, 10)): ""} </p>
            <p> Open to work? : { alumnus.is_looking ? "Yes":"No"} </p>
            <p> LinkedIn : {alumnus.linkedin} </p>
            <p> Placement Converted? : {alumnus.is_converted ? "Yes" : "No"} </p>
            <Button variant="outline-danger" onClick={()=>{onDelete(alumnus)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(alumnus)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
    )

}

export default Alumnus;