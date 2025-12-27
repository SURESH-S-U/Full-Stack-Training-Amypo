import React from 'react'

function Student(props) {
  return (
    <div>
        <p>Name : {props.name}</p>
        <p>Dept : {props.dept}</p>
        <p>Age : {props.age}</p>

        <br /><br /><br /><br /><br />
    </div>
  )
}

export default Student