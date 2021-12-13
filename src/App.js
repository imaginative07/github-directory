import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";

// Functional component
// function App() {

// Class based component
class App extends Component {
  state = {
    users: [],
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

  onReset = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, button_type) => { 
    this.setState({ alert: {msg, button_type} });
    setTimeout( () =>  this.setState({ alert: null}), 5000 );
  }

  render() {
    const { loading, users } = this.state;

    return (
      <div className="App">
        <Navbar title="Github Directory" icon="fab fa-github" />
        <div className="container">
          <Alert alert={this.state.alert}/>

          <Search
            searchUsers={this.getUserSearch}
            onReset={this.onReset}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
