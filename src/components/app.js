import 'materialize-css/dist/css/materialize.min.css';
import { Route } from "react-router-dom";
import React, {Component} from 'react';
import AddItem from './add_item';
import List from './list';

class App extends Component {
    render () {
        // const {list, error} = this.state;

        return (
            <div className="container">
                <Route path="/" exact component={List}/>
                <Route path="/add-item" component={AddItem}/>
            </div>
        );
    }
}

export default App;



