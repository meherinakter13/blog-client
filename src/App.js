import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Login from './components/Login/Login.js';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Admin from './components/Admin/Admin.js';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import AddBlogs from './components/Admin/AddBlogs/AddBlogs';
import ManageBlog from './components/Admin/ManageBlog/ManageBlog';
import Blogs from './components/Blogs/Blogs';
import FullBlogs from './components/FullBlogs/FullBlogs';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/seeBlogs/:id">
            <FullBlogs></FullBlogs>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/addBlog">
            <AddBlogs></AddBlogs>
          </PrivateRoute>
          <PrivateRoute path="/manageBlog">
            <ManageBlog></ManageBlog>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
