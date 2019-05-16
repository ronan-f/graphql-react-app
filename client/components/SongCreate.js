import React, { Component } from 'react';
import { EventEmitter } from 'events';

class SongCreate extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: ''
        }
    }
    render() {
        return (
            <div>
                <h3>Create a new song</h3>
                <form>
                    <label>Song title:</label>
                    <input onChange={event => this.setState({title: event.target.value})}/>
                </form>
            </div>
        )
    }
}

export default SongCreate;