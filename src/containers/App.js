import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary.js';
import MutateButton from '../components/MutateButton';

// actions
import { setSearchField, requestRobots, changeRobots } from '../redux/actions';
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

    const { creatureType } = useSelector(
        (state) => state.changeRobots
    )

    const getcreatureString = (creature) => {
        switch (creature) {
            case "alien":
                return '?set=set2';
            case "robot":
                return '?set=set3';
            case "cat":
                return '?set=set4';
            case "human":
                return '?set=set5';
            default:
                return '';
        }
    } 

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value));
    }

    const onRequestRobots = () => {
        dispatch(requestRobots())
    }

    const onChangeRobots = () => {
        dispatch(changeRobots());
    }

    // const randomize = (event) => {
    //     console.log(event);
    // }

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
                <div className='tc'>
                    <h1 className='f1'>{`${creatureType}Friends`}</h1>
                    <MutateButton changeRobots={onChangeRobots} />
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList 
                                robots={filteredRobots}
                                creatureType={getcreatureString(creatureType)}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
        );
    }
}

// can name the parameters but can use this convention
export default App;

// connect is a higher order function, takes in a function and returns a function