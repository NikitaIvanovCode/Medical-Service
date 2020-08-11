import React, { Component } from 'react';
import './VisitTime.css';

import Record from '../record/Record';

export default class VisitTime extends Component {
    state = {
        selectedTime: null
    }

    back = () => this.props.back(null);

    selectedTime = item => this.setState({ selectedTime: item });

    render() {
        const { time, day, name, onHystoryAdd, inxDay } = this.props;
        const { selectedTime } = this.state;

        let content = () => {
            return (
                <div>
                    <div className="visit-time__header">
                        <button className="visit-time__btn-back" onClick={this.back}>назад</button>
                        <div>{day}</div>
                    </div>
                    <div className="visit-time__title">Время приема</div>
                    <ul className="visit-time__list">
                        {Object.keys(time).map(item => {
                            if (time[item] === true) {
                                return <li className="visit-time__time hover" key={item} onClick={() => this.selectedTime(item)}>{item}</li>
                            }
                            else {
                                return <li className="visit-time__time reserved" key={item}>{item}</li>
                            }
                        })}
                    </ul>
                </div>
            )
        }

        if (selectedTime !== null) {
            content = () => {
                return <Record day={day} selectedTime={selectedTime} name={name} onHystoryAdd={onHystoryAdd} inxDay={inxDay} />
            }
        }

        return (
            <div className="rec-and-time">
                <div className="rec-and-time__wrapp">
                    {content()}
                </div>
            </div>
        )
    }
}

