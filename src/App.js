import React, { Component, Fragment } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

// STATE >> props


class App extends Component {
    constructor() {
        super();
        // something that can change, lives in the parent
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    // custom function
    onSearchChange = (event) => {
        // setState is a standard synthax
        this.setState({ searchfield: event.target.value})
        console.log(event.target.value);
    }
    render() {
        
        const filteredRobots = this.state.robots.filter(
            robots => {
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            }
        );
        return (
            <>
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            </>
        );
    }

}

export default App