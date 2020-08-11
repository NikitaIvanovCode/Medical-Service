import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './SelectDoc.css';

import DescriprionSpecialist from '../descriprionSpecialist/DescriprionSpecialist';
import SelectDocItem from '../selectDocItem/SelectDocItem';

export default class SelectDoc extends Component {
    state = {
        week: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        allMonthDays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    }

    render() {
        const { spec, docs, onHystoryAdd } = this.props;
        const { week, allMonthDays } = this.state;

        if (spec === undefined) {
            return <Redirect to="/specialists" />
        }

        const days_out = () => {
            const days = [];
            const date = new Date();
            let year = date.getFullYear() / 4;
            if (year === parseInt(year)) {
                allMonthDays[1] = 29;
            }
            let month = date.getMonth();
            let limitMonthDays = allMonthDays[month];
            let count_weekDay = date.getDay();
            let count_monthDay = date.getDate();
            for (let i = 0; i < 7; i++) {
                if (month.toString().length === 1) {
                    days.push(`${week[count_weekDay]} ${count_monthDay}.0${month}`);
                }
                else {
                    days.push(`${week[count_weekDay]} ${count_monthDay}.${month}`);
                }
                count_weekDay === 6 ? count_weekDay = 0 : count_weekDay++;
                if (count_monthDay === limitMonthDays) {
                    count_monthDay = 1;
                    month++;
                    limitMonthDays = allMonthDays[month];
                }
                else {
                    count_monthDay++;
                }
            };
            return days;
        }
        return (
            <div>
                <DescriprionSpecialist spec={spec} />
                <SelectDocItem docs={docs} days_out={days_out()} onHystoryAdd={onHystoryAdd} />
            </div>
        )
    }
}

