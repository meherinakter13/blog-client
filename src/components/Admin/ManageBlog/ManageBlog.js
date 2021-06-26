import React, { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    const handleDelete = (id) => {

        fetch(`http://localhost:5000/deleteBlog/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data=>{
            if(data){
                deleteBlogs ();
                alert('Blog Deleted')
            }
        })
    }
    const deleteBlogs  = () =>{
        fetch(`http://localhost:5000/blogs`)
        .then(res =>res.json())
        .then(data => setBlogs(data))
       }
    return (
        <div className="fluid-container">
            <div className="row mx-0">
                <div className='col-md-2 p-0'>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto bg-info">
                    <h2 className="border-bottom mb-2 fw-bolder text-light text-center">Manage Blog</h2>
                        <div className="col-md-12">

                            <table className="table table-sm table-info text-center table-bordered " >
                                <thead>
                                    <tr>
                                        <th className="w-25">Blog Title</th>
                                        <th className="w-25">Blog Content</th>
                                        <th className="w-25">Image</th>
                                        <th className="w-25">Action</th>
                                    </tr>
                                </thead>
                            {
                                blogs.map(blog =>
                                    
                                                    <tbody className="bg-secondary">
                                                        <td className="w-25 text-light">{blog.blogTitle}</td>
                                                        <td className="w-25 text-light">{blog.blogContent}</td>
                                                        <td className="w-25 text-light">
                                                            {
                                                                blog.image ? <img style={{ width: "8rem", height: "8rem" }} src={`data:image/png;base64,${blog.image.img}`} alt="" />
                                                                    :
                                                                    <img style={{ width: "8rem", height: "8rem" }} className="img-fluid mb-3" src={`http://localhost:5000/${blog.img}`} alt="" />
                                                            }
                                                        </td>
                                                        <td className="w-25 btn-style">
                                                            <button className="btn  btn-danger"
                                                                onClick={() => handleDelete(blog._id)} >Delete</button>
                                                        </td>
                                                    </tbody>
                                )
                            }
                        </table>
                    </div>
                
            </div>
        </div>
    </div>
    );
};

export default ManageBlog;