import React from 'react';
import './Visits.css';

const Visits = ({ hystory }) => {
    let count = 0;
    let visits;

    if (hystory.length === 0) {
        visits = <div className="nothing">Нет записей на прием.</div>;
    }
    else {
        visits = hystory.map(item => <div className="visits-item" key={count++}>{item}</div>);
    }

    return (
        <div>
            {visits}
        </div>
    );
}

export default Visits;