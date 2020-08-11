import React, { Component } from 'react';
import './DoctorsList.css';

import DocListItem from '../docListItem/DocListItem';
import Search from '../search/Search';

export default class DoctorsList extends Component {
    state = {
        term: ''
    }

    onDocChange = key => {
        const spec = this.props.specialists.filter(item => key === item.key);
        this.props.onChangeSpec(spec[0]);
    }

    onSearch = term => {
        this.setState({ term });
    }

    render() {
        const { term } = this.state;
        const { specialists } = this.props;
        let specialists_out = null;

        if (term.length === 0) {
            specialists_out = specialists.map(({ title, key }) => <DocListItem title={title} key={key} way={key} onDocChange={this.onDocChange} />);
        }
        else {
            specialists_out = specialists.map(({ title, key }) => {
                return title.toLowerCase().indexOf(term.toLowerCase()) > -1 ? <DocListItem title={title} key={key} way={key} onDocChange={this.onDocChange} /> : null;
            });
        }

        return (
            <div>
                <Search onSearch={this.onSearch} />
                <div className="specialist" >
                    {specialists_out}
                </div>
            </div>
        )
    }
}




