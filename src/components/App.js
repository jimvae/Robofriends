import React, { Component, Fragment } from 'react';
import CardList from '../containers/CardList';
import SearchBox from '../containers/SearchBox';
import './App.css';
import Scroll from '../containers/Scroll';

// STATE >> props


class App extends Component {
    constructor() {
        super();
        // something that can change, lives in the parent
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // life cycle function / in built function so do not need arrow keys
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
            return response.json();
        })
        .then(users => {this.setState({ robots: users})});
        // don't need to use {} if one return statement.
        // need to use {} and return statement if multiple lines
    }

    // custom function, so need to use arrows functions
    onSearchChange = (event) => {
        // setState is a standard synthax
        this.setState({ searchfield: event.target.value})
        console.log(event.target.value);
    }
    render() {
        const { robots, searchfield} = this.state;
        
        const filteredRobots = robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            }
        );

        if (!robots.length) {
            return <h1>Loading...</h1>
        } else {
            return (
                <>
                    <div className='tc'>
                        <h1 className='f1'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <CardList robots={filteredRobots}/>
                        </Scroll>
                    </div>
                </>
            );
        }
    }
}

export default App