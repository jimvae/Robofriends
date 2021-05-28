import React, { Fragment, useState, useEffect } from 'react';
import CardList from '../containers/CardList';
import SearchBox from '../containers/SearchBox';
import './App.css';
import Scroll from '../containers/Scroll';
import ErrorBoundary from './ErrorBoundary.js';

// actions
import { setSearchField, requestRobots } from '../actions';
import { useDispatch, useSelector } from 'react-redux';


function App () {

    const dispatch = useDispatch();

    // the states

    const { searchField } = useSelector(
        (state) => state.searchRobots
    );
    
    const { robots, isPending, error } = useSelector(
        (state) => state.requestRobots
    );

    const onSearchChange = (event) => {
        // setState is a standard synthax
        dispatch(setSearchField(event.target.value));
    }

    const onRequestRobots = () => {
        dispatch(requestRobots())
    }

    // Replaces componentDidMount
    useEffect(() => {
        onRequestRobots()
    }, [])


    const filteredRobots = robots.filter(
        robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        }
    );

    if (isPending) {
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

// can name the parameters but can use this convention
export default App;

// connect is a higher order function, takes in a function and returns a function