import React from 'react'

function Students(props) {
  return (
    <div>
        <h3>Name : {props.name}</h3>
        <h3>Course : {props.course}</h3>
        <h3>Year : {props.year}</h3>
        <br />
    </div>
  )
}

export default Students