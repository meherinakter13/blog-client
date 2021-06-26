import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import './Sidebar.css';

const Side = props => {


    return (
        <>
            <Nav className="d-md-block sidebar " >
                <div className="sidebar-sticky"></div>
                <Nav.Item className="p-3">
                    <Link to="/addBlog"  className="text-white  text-decoration-none ">Add Blog</Link>
                </Nav.Item>
                <Nav.Item className="p-3">
                    <Link to="/manageBlog" className="text-white  text-decoration-none ">Manage Blog</Link>
                </Nav.Item>

            </Nav>
        </>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar