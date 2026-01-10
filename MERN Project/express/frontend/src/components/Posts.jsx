import React, { useEffect, useState } from 'react'
import axios from "axios";

// Api Url
const API_URL = "http://localhost:5000/posts";

function Posts() {

    // Create a State to store the posts
    const [posts , setPosts] = useState([]);

    // Create a state to store the values of All Fields.
    const [name , setName] = useState("");

    const [dept , setDept] = useState("");

    const [email , setEmail] = useState("");

    const [phone , setPhone] = useState("");


    // Ceate a state to store the edit Id for Edit feature.
    const [editId , setEditId] = useState(null);


    // useEffect - to fetch API once after the component is rendered.
    useEffect(() => {
        fetchPost();
    },[]);

    const fetchPost = () => {
        axios.get(API_URL)
        .then(res => setPosts(res.data));
    }


    // Post Method - Request to the Express (Server)
    const addPost = () => {
        if(!name || !dept || !email || !phone)
        {
            alert("Fields should not be empty!");
        }
        else{
            axios.post(API_URL , {name , dept , email , phone}) // Request sent to the express
            .then(res => {
                setPosts([...posts , res.data]);
                setName("");
                setDept("");
                setEmail("");
                setPhone("");
            })
        }
    };

    

    // It will execute , When we click Update Button.
    const startEdit = (post) => {
        setEditId(post.id);
        setName(post.name);
        setDept(post.dept);
        setEmail(post.email);
        setPhone(post.phone);
    }



    // Cancel Edit for make it as Previous state.
    const cancelEdit = () =>  {
        setEditId(null);
        setName("");
        setDept("");
        setEmail("");
        setPhone("");
    }

  
    //Update Method Request to the server
    const updatePost= () =>{

        axios.put(`${API_URL}/${editId}`, {name, dept, email, phone}) //Request sent to the server
        .then(() => {
            setPosts(posts.map(p =>
            p.id ===editId ? {...p , name , dept , email, phone} : p
            ));
            cancelEdit();
        })

    }


    // Delete POST - Request method
    const deletePost = (id) => {
        axios.delete(`${API_URL}/${id}`)
        .then(() => {
            setPosts(posts.filter(p => p.id !== id));
        });
    };




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
            <th>Name</th>
            <th>Dept</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className='table-light'>
          {
            posts.map((post) => (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.name}</td>
                    <td>{post.dept}</td>
                    <td>{post.email}</td>
                    <td>{post.phone}</td>
                    <td>
                        {/* Post parameter in Onclick for Select the current Post id. */}
                        <button className='btn btn-warning' onClick={() => startEdit(post)}>Edit</button>
                        <button className='btn btn-danger' onClick={() => deletePost(post.id)}>Delete</button>
                    </td>
                </tr>
            ))
          }
        </tbody>

        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"

                onChange={(e) => { setName(e.target.value)}}
                value={name}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Dept"

                onChange={(e) => { setDept(e.target.value)}}
                value={dept}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"

                onChange={(e) => { setEmail(e.target.value)}}
                value={email}
              />
            </td>
            <td>
              <input
                type="text"
                className="form-control"
                placeholder="Enter phone"

                onChange={(e) => { setPhone(e.target.value)}}
                value={phone}
              />
            </td>
            <td>
                {/* When Edit Button is Clicked, Update and Cancle will Appear. */}
                {/* Otherwise Add Button will appear at table botton for Add new post. */}
                {/* Using Ternary Operater. */}
                {editId ? (
                    <>
                    <button className='btn btn-success' onClick={updatePost} >Update</button>
                    <button className='btn btn-warning' onClick={cancelEdit}>Cancel</button>
                    </>
                    ) 

                    : 

                    // If There is no edit button , This line only Enough.
                    (<button className="btn btn-primary"  onClick={addPost}>Add</button>)
                }
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Posts
