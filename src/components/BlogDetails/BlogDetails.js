import React from 'react';
import { useHistory } from 'react-router-dom';
import './BlogDetails.css';

const BlogDetails = ({blog}) => {
    const history = useHistory();
    const handleBuy =(_id)=>{
        history.push(`/seeBlogs/${_id}`)
    }
    return (
        <div className="container mt-2 mb-5 col-md-4">
        <div class="card card-design" style={{ width: "18rem", height:"25rem", boxShadow:'5px 10px 5px 10px rgb(33, 100, 255)' }}>
            <div className="card-header text-center">
            {
                blog.image ? <img onClick={() => handleBuy (blog._id)}  style={{height: '200px', width: '200px'}} className="img-animation" src={`data:image/jpeg;base64,${blog.image.img}`}alt=""/>
                :
                <img onClick={() => handleBuy (blog._id)}  style={{height: '200px', width: '200px'}} className="img-fluid mb-3 img-animation" src={`http://localhost:5000//${blog.img}`} alt=""/>
            }
            </div>
            <div style= {{backgroundColor:'#ffb380', color:'white'}} class="card-body fw-bolder">
                <h3 onClick={() => handleBuy (blog._id)}  class="card-title ">{blog.blogTitle}</h3>
                <br />
               

            </div>
        </div>
        </div>
    );
};

export default BlogDetails;