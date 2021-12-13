import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text:""
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        onReset: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === '') {
            
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    }

    // If passing the function on click through props
    // onReset = (e) => {
    //     e.preventDefault();
    //     this.props.resetSearch();
    // }

    render() {

        // This method is correct and we can do this in other way
        // if(this.props.show.length > 0) {
        //     var clearButton = <input type="button" className="btn btn-light btn-block" value="Clear" onClick={this.onReset} />
        // } 

        return (
            <div className="">
                <form onSubmit={this.onSubmit} className="search">
                    <input type="text" className="" placeholder="Search Users" name="text" value={this.state.text} onChange={this.onChange} />
                    <input type="submit" className="btn btn-dark btn-block" value="Search" />
                    {this.props.showClear && <input type="button" className="btn btn-light btn-block" value="Clear" onClick={this.props.onReset} />}
                </form>
            </div>
        )
    }
}

export default Search;