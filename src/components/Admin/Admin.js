import React from 'react';
import Sidebar from '../Admin/Sidebar/Sidebar.js'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AddBlogs from'./AddBlogs/AddBlogs'


const Admin = () => {
    return (
        <div className="row">
            {/* <Router> */}
            <div className="col-md-5">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-7">
                    {/* <Switch>
                        <Route path="/manageProduct"> */}
                            {/* <ManageProduct></ManageProduct> */}
                        {/* </Route>
                        <Route path="/addBlog">
                            <AddBlogs></AddBlogs>
                        </Route>
                    </Switch> */}
            </div>
            {/* </Router> */}
        </div>
    );
};
export default Admin;