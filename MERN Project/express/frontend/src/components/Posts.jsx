import React, { useState } from 'react'

function Posts() {

    // Create a state to store the values of title and body
    const [title , setTitle] = useState("");

    const [body , setBody] = useState("");


  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">
        React JS + Express JS + JSON - CRUD Operation
      </h3>

      {/* Table */}
      <table className="table table-bordered table-striped text-center align-middle">
        {/* Table Head */}
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          <tr>
            <td>1</td>
            <td>BIT</td>
            <td>Pongal Celebrations</td>
            <td>
              <button className="btn btn-warning btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                placeholder="Enter title"

                onChange={(e) => { setTitle(e.target.value)}}
                value={title}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                placeholder="Enter body"

                onChange={(e) => { setBody(e.target.value)}}
                value={body}
              />
            </td>
            <td>
              <button className="btn btn-primary">Add</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Posts