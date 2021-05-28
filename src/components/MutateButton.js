import React from 'react';
import './MutateButton.css'

const MutateButton = ({changeRobots}) => {
    return (
        <div className="mybutton">
            <button onClick={changeRobots}>MUTATE!</button>
        </div>
    );
};

export default MutateButton;