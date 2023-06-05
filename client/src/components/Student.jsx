import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const Student = ({alumnus, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateAlumnus) => {
        toUpdate(toUpdateAlumnus)
    }

    const onDelete = (toDeleteAlumnus) => {
        toDelete(toDeleteAlumnus)
    }

    return (
        <Card>
            <Card.Body>
            <Card.Title>{alumnus.name} </Card.Title>
            <p> {alumnus.position} </p>
            <p> {alumnus.company} </p>
            <p> {alumnus.salary} </p>
            <p> {alumnus.start_date} </p>
            <p> Open to work? : {alumnus.is_looking} </p>
            <p> {alumnus.linkedin} </p>
            <p> Placement Converted? : {alumnus.is_converted} </p>
            <Button variant="outline-danger" onClick={()=>{onDelete(alumnus)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(alumnus)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
    )

}

export default Student;