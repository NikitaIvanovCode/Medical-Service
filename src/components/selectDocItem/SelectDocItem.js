import React, { Component } from 'react';
import './SelectDocItem.css';
import VisitTime from '../visitTime/VisitTime';

export default class SelectDocItem extends Component {
    state = {
        name: '',
        date: this.props.days_out,
        day: '',
        time: null,
        inxDay: null
    }

    selectDate = (name, graph, day, inxDay) => {
        this.setState({ name });
        this.setState({ day });
        this.setState({ time: graph });
        this.setState({ inxDay });
    }

    back = time => {
        this.setState({ time });
        this.setState({ day: '' });
    }

    render() {
        const { docs, onHystoryAdd } = this.props;
        const { date, time, day, name, inxDay } = this.state;

        const elements = docs.map(({ name, graph }) => {
            return (
                <li key={name} className="doc">
                    <div className="doc__info">
                        <img src={require('./img/doc-icon.jpg')} alt="doc" className="doc__img" />
                        <div className="doc__name">{name}</div>
                    </div>
                    <div className="doc__date">
                        <div className="doc__date-title">Дата приема</div>
                        <ul className="doc__date-list">
                            {date.map((item, inx) => <li key={item} className="doc__date-day" onClick={() => this.selectDate(name, graph[inx + 1], item, inx + 1)}>{item}</li>)}
                        </ul>
                    </div>
                </li>
            );
        });

        const visitTime = () => {
            return time !== null ? <VisitTime time={time} back={this.back} day={day} name={name} onHystoryAdd={onHystoryAdd} inxDay={inxDay} /> : null;
        }

        return (
            <ul>
                {elements}
                {visitTime()}
            </ul >
        )
    }
}


