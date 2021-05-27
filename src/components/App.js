import React, { Fragment, useState, useEffect } from 'react';
import CardList from '../containers/CardList';
import SearchBox from '../containers/SearchBox';
import './App.css';
import Scroll from '../containers/Scroll';
import ErrorBoundary from './ErrorBoundary.js';

// STATE >> props


function App () {
    // constructor() {
    //     super();
    //     // something that can change, lives in the parent
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }

    const [robots, setRobots] = useState([]);
    // [] is the initial state of robots
    const [searchfield, setSearchfield] = useState('');

    // life cycle function / in built function so do not need arrow keys
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
    //         return response.json();
    //     })
    //     .then(users => {this.setState({ robots: users})});
    //     // don't need to use {} if one return statement.
    //     // need to use {} and return statement if multiple lines
    // }

    // useeffect for side effects
    // gets run every time the function App is being run
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
            return response.json();
        })
        .then(users => setRobots(users));
    }, [searchfield]) //only run if searchfield change
    // THE SECOND PARAMETER DETERMINES WHEN THE USEEFFECT RENDERS
    // if search field change then re render,
    // or 
// }, []) ==> this array will never change, so same effect as oncomponentdidmount!

    // custom function, so need to use arrows functions
    const onSearchChange = (event) => {
        // setState is a standard synthax
        setSearchfield(event.target.value)
    }

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
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            </>
        );
    }
}


export default App