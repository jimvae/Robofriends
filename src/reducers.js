import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants';

const initialState = {
    searchField: ''
}

//  reducer takes in action and modify.returns the new state
// takes in a state and returns a new state
// '=' means default values
export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            // this is returning the new state
            // or
            // return { ...state, searchField:action.payload}
            return  Object.assign({}, state, { searchField: action.payload } );
        default:
            return state;
    }
}

// remember that this is the action
// export const setSearchField = (text) => ({
//     type: CHANGE_SEARCH_FIELD,
//     payload: text
// })

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}


export const requestRobots = (state=initialStateRobots, action={}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true})
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false})
        default:
            return state;
    }
}