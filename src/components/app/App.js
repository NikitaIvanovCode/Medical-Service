import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import specialists from '../../service';
import Header from '../header/Header';
import Home from '../home/Home';
import DoctorsList from '../docList/DoctorsList';
import SelectDoc from '../selectDoc/SelectDoc';
import Visits from '../visits/Visits';
import { Provider } from '../context/Context';

export default class App extends Component {
    state = {
        specialists,
        selected_spec: '',
        hystory: []
    }

    onChangeSpec = selected_spec => {
        this.setState({ selected_spec });
    }

    onHystoryAdd = (item, inxDay) => {
        const arr = item.split(' ');
        this.state.specialists.forEach(item => {
            if (item.key === this.state.selected_spec.key) {
                item.docs.map(item1 => {
                    if (item1.name === arr[5]) {
                        return item1.graph[inxDay][arr[2]] = false;
                    }
                    else {
                        return null;
                    }
                });
            }
        });

        this.setState(({ hystory }) => {
            const newArr = [...hystory, item];
            return { hystory: newArr }
        });
    }

    render() {
        const { specialists, selected_spec: { title, key, docs }, hystory } = this.state;

        return (
            <div className="wrapp">
                <Router>
                    <Header />
                    <main className="main">
                        <Route path="/" component={Home} exact />
                        <Route path="/specialists" exact render={() => <DoctorsList onChangeSpec={this.onChangeSpec} specialists={specialists} />} />
                        <Provider value={title}>
                            <Route path="/specialists/:id" exact render={() => <SelectDoc spec={key} docs={docs} onHystoryAdd={this.onHystoryAdd} />} />
                        </Provider>
                        <Route path="/visits" render={() => <Visits hystory={hystory} />} />
                    </main>
                </Router>
            </div>
        )
    }
}


