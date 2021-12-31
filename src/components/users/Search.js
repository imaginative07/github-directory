import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Search = ({searchUsers, setAlert, onReset, showClear}) => {

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            setAlert('Please enter a text to search', 'button_type');
        } else {
            searchUsers(text);
            setText('');
        }
    }

    // If passing the function on click through props
    // onReset = (e) => {
    //     e.preventDefault();
    //     this.props.resetSearch();
    // }


    // This method is correct and we can do this in other way
    // if(this.props.show.length > 0) {
    //     var clearButton = <input type="button" className="btn btn-light btn-block" value="Clear" onClick={this.onReset} />
    // } 

    return (
        <div className="">
            <form onSubmit={onSubmit} className="search">
                <input type="text" className="" placeholder="Search Users" name="text" value={text} onChange={onChange} />
                <input type="submit" className="btn btn-dark btn-block" value="Search" />
                {showClear && <input type="button" className="btn btn-light btn-block" value="Clear" onClick={onReset} />}
            </form>
        </div>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
}

export default Search;