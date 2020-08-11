import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DocListItem.css';

export default class DocListItem extends Component {

    onChange = key => {
        this.props.onDocChange(key);
    }

    render() {
        const { title, way } = this.props;

        return (
            <Link to={`specialists/${way}`} className={`specialist__block ${way}`} onClick={() => this.onChange(way)}>
                <div className="specialist__item">{title}</div>
            </Link >
        )
    }
}
