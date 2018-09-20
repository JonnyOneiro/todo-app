import React, {Component} from 'react';

class AddItem extends Component {
    state = {
        title: '',
        details: ''
    }

    handleAddItem = (e) => {
        e.preventDefault();

        this.props.add(this.state);

        this.setState({
            title:'',
            details: ''
        })
    }

    render () {
        const {title, details} = this.state;
        return(
            <form onSubmit={this.handleAddItem}>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <label>Title</label>
                        <input 
                            onChange={(e) => this.setState({title: e.target.value})}
                            type="text"
                            value={title}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col s8 offset-s2">
                        <label>Details</label>
                        <input 
                            onChange={(e) => this.setState({details: e.target.value})}
                            type="text"
                            value={details}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s8 offset-s2 right">
                        <button className="btn #004d40 teal darken-4">Add Item</button>
                    </div>
                </div>
            
            </form>
        )  
    }
}

export default AddItem;
