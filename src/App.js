import React, {Component} from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

// Functional component
// function App() {

// Class based component  
class App extends Component {

  state = {
    users:[],
    loading: false,
  }

  async componentDidMount(){

    this.setState({ loading:true });

    const githubData = await axios.get('https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}');

    this.setState({ loading:false });

    this.setState({ users: githubData.data });

  }

  getUserSearch = async text => {
    
      this.setState({ loading:true });

      // URL with client secret and client id
      const githubData = await axios.get(`https://api.github.com/search/users?q=${text}`);

      // const githubData = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`);      
  
      this.setState({ users: githubData.data.items, loading:false });
  
  }

  onReset = () => {
    this.setState({ users:[], loading:false });
  }


  render() {

    const {loading, users} = this.state;

    return (
      <div className="App">
        <Navbar title="Github Directory" icon="fab fa-github" />
        <div className="container">
          <Search searchUsers={this.getUserSearch} onReset={this.onReset}  showClear={users.length > 0 ? true : false}/>
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }
}

export default App;
