import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    state = {
        term: ''
    }

    onSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearch(term);
    }

    render() {
        return (
            <div className="search">
                <input className="search__inp" placeholder="поиск специалиста..." value={this.state.term} onChange={this.onSearch} />
            </div>
        )
    }
}