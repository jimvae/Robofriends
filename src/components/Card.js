import React, { Fragment } from 'react';
import './Card.css'

// const Card = (props) => {
//     return (
//         <div className='bg-light-green dib hr3 pa3 ma2 grow bw2 shadow-5'>
//             <img alt='robot' src={`https://robohash.org/${props.id}?200x200`}/>
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// }
// export default Card;


// or


const Card = ({ id, name, email, randomize, creatureType}) => {

    return (
        <Fragment>
            <div 
                className='tc bg-light-green dib hr3 pa3 ma2 grow bw2 shadow-5'
                >
                <img alt='robot' src={`https://robohash.org/${id + creatureType}`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </Fragment>
    );
}
export default Card;