import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddBlogs = () => {
    // const { register, handleSubmit, watch, errors } = useForm();
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file)
        formData.append('blogTitle', info.blogTitle)
        formData.append('blogContent', info.blogContent)
        


        fetch("http://localhost:5000/addBlog", {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            e.target.reset();
           
            if(data){
                alert('Blog added successfully')
            }
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <section className="container-fluid row mx-0 px-0" >
        <div className="col-md-2 col-sm-2 px-0">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-10 p-5 pr-5 bg-info ">
            <h2 className="text-brand border-bottom fw-bolder text-light text-center">Add Blog</h2>
            <form class="row g-3 bg-light shadow mt-5 p-5 rounded container shadow" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label class="form-label fw-bolder">Blog Title</label>
                            <input type="text" name="blogTitle" onBlur={handleBlur} class="form-control" placeholder="Enter Blog Title" />
                        </div>
                        <div className="col-md-6">
                            <label class="form-label fw-bolder">Blog Content</label>
                            <input type="text" onBlur={handleBlur} name="blogContent" class="form-control" placeholder="Blog Content" />
                        </div>
                        <div className="col-md-6">
                            <label class="form-label fw-bolder">Image</label>
                            <input class="form-control" onChange={handleFileChange}  type="file" name="image"  />
                        </div>
                        <div className="col-md-12 d-flex align-items-center">
                            <input type="submit" className="mt-3 btn btn-danger" />
                        </div>
                    </form>
        </div>
    </section>
    );
};

export default AddBlogs;