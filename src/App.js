import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/Users/Users";
import axios from "axios";
import Search from "./components/Users/Search";
import Alert from "./components/layouts/Alert";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/Pages/About";
import User from "./components/Users/User";

// Functional component
// function App() {

// Class based component
class App extends Component {

  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const githubData = await axios.get(
      //`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`
      "https://api.github.com/users"
    );

    this.setState({ loading: false });

    this.setState({ users: githubData.data });
  }

  getUserSearch = async (text) => {
    this.setState({ loading: true });

    // URL with client secret and client id
    const githubData = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    // const githubData = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: githubData.data.items, loading: false });
  };

  // Get user info
  getUser = async (username) => {
    //this.setState({ loading: true });
    const userDetails = await axios.get(`https://api.github.com/users/${username}`);
    this.setState({ user: userDetails.data, loading: false });
  };

  onReset = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, button_type) => { 
    this.setState({ alert: {msg, button_type} });
    setTimeout( () =>  this.setState({ alert: null}), 5000 );
  }

  render() {

    const { loading, users, user } = this.state;

    return (
      <Router>
      <div className="App">
        <Navbar title="Github Directory" icon="fab fa-github" />
        <div className="container">
          <Routes >
            <Route exact path="/" element={<><Alert alert={this.state.alert}/>
                <Search
                  searchUsers={this.getUserSearch}
                  onReset={this.onReset}
                  showClear={users.length > 0 ? true : false}
                  setAlert={this.setAlert}
                />
                <Users loading={loading} users={users} />   
            </>}/>

            <Route exact path="/about" element={<About />} />

            {/* <Route exact path="/user/:login" render={({ props }) => {
              <User {...props} user={this.state.user} getUser={this.getUser} loading={loading} />
            }} /> */}

            <Route exact path="/user/:login" element={<User getUser={this.getUser} user={user} />} />

            {/* <Route exact path="/user/:login" render={ user => (
              <User {...user} user={user} getUser={this.getUser} loading={loading} />
            )}  /> */}

          </Routes >
        </div>
      </div>
      </Router>
    );

  }
  
}

export default App;
