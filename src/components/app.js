import 'materialize-css/dist/css/materialize.min.css';
import { Route, Switch } from "react-router-dom";
import React, {Component} from 'react';
import AddItem from './add_item';
import List from './list';
import Details from './details';
import not_found from './not_found';

class App extends Component {
    render () {
        // const {list, error} = this.state;

        return (
            <div className="container">
                <Switch>
                    <Route path="/" exact component={List}/>
                    <Route path="/add-item" component={AddItem}/>
                    <Route path="/item/:itemId" component={Details}/>
                    <Route component={not_found}/>
                </Switch>
            </div>
        );
    }
}

export default App;



