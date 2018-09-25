import React, { Component } from 'react';
import axios from  'axios';
import config from '../config';
import NavBtn from './nav_btn';

class Details extends Component {
    state = {
        item: null
    }


    componentDidMount() {
        this.getToDoItem();
    }

    async getToDoItem () {
        const { itemId } = this.props.match.params;

        try {
            const resp = await axios.get(`${ config.API_URL }/todos/${ itemId + config.API_KEY }`);

            console.log('response: ',resp);

            this.setState({
                item: resp.data.todo
            });
        } catch(err) {
            this.setState({
                item: {}
            });
        }
    }


    render () {
        const { item } = this.state;

        if (!item) {
            return <h1>LOADING...</h1>;
        }

        if (!item.title) {
            return (
                <div>
                    <h1 className="center">Item Details</h1>
                    <NavBtn to="/" color="cyan darken-3" text="Back To List" />
                    <h2 className="center">No Item to Display</h2>
                </div>
            );
        }

        return (
            <div>
                <h1 className="center">Item Details</h1>
                <NavBtn to="/" color="cyan darken-3" text="Back To List" />
                <h3 className="center">{item.title}</h3>
                <p className="center">{item.created}</p>
                <p className="center">{item.details}</p>


            </div>
        );
    }
}

export default Details;
