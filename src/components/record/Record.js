import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import InputMask from 'react-input-mask';
import './Record.css';

import { Consumer } from '../context/Context';

export default class Record extends Component {
    state = {
        policyNum: '',
        birthNum: '',
        doRedirect: false,
        warning: false
    }

    policyNum = e => {
        this.setState({ policyNum: e.target.value });
    }

    birthNum = e => {
        this.setState({ birthNum: e.target.value });
    }

    record = (item, inxDay) => {
        if (this.state.policyNum.indexOf('X') > -1 || this.state.birthNum.indexOf('_') > -1 || this.state.policyNum === '' || this.state.birthNum === '') {
            this.setState({ warning: true });
        }
        else {
            this.props.onHystoryAdd(item, inxDay);
            this.setState({ doRedirect: true });
        }
    }

    cancel = () => {
        this.setState({ doRedirect: true });
    }

    render() {
        const { day, selectedTime, name, inxDay } = this.props;
        const { warning, doRedirect } = this.state;

        if (doRedirect) {
            return <Redirect to="/specialists" />
        }

        let error = '';
        if (warning) {
            error = 'Заполните поля';
        }

        return (
            <div className="record">
                <div className="record__item">Дата и время приема: <span>{`${day} ${selectedTime}`}</span></div>
                <div className="record__item">Врач: <span>{name}</span></div>
                <div className="record__form">
                    <div className="record__item">
                        <div>Номер полюса</div>
                        <InputMask className="input" mask="9999999999999999" maskChar="X" placeholder="XXXXXXXXXXXXXXXX" onChange={this.policyNum} />
                    </div>
                    <div className="record__item">
                        <div>Дата рождения</div>
                        <InputMask className="input" mask="99.99.9999" placeholder=" ДД . ММ . ГГГГ " onChange={this.birthNum} />
                    </div>
                    <div className="record__error">{error}</div>
                    <button className="record__btn" onClick={this.cancel}>Отмена</button>
                    <Consumer>
                        {
                            (title) => {
                                return <button className="record__btn" onClick={() => this.record(`${day} ${selectedTime} - ${title} ${name}`, inxDay)}>Подтвердить запись</button>
                            }
                        }
                    </Consumer>
                </div>
            </div>
        )
    }
}
