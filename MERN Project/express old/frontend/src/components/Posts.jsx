import axios from 'axios';
import React, { useEffect, useState } from 'react'

//Express API_URL
const API_URL = "http://localhost:5000/posts";

function Posts() {
    //Create a state for Posts
    const [posts, setPosts] = useState([]);

    //GET - From Posts - Data.json through express
    useEffect(() => {
        axios.get(API_URL)
        .then(res => setPosts(res.data))
    }, []);

    return (
        <div className='container mt-4'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Body</td>
                    </tr>
                </thead>
                <tbody>
                    { posts.map(post =>
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
    }

export default Posts