import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // return {
            //     ...state,
            //     results: state.results.concat({id: new Date().getMilliseconds(), val: action.result})
            // }
            //We can use utility function for the above return -->
            return updatedObject(state,{results: state.results.concat({id: new Date().getMilliseconds(), val: action.result})});
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.rsltElId)
            // return {
            //     ...state,
            //     results: updatedArray
            // }
            //We can use utility function for the above return -->
            return updatedObject(state,{results: updatedArray});
    }
    return state;
}

export default resultReducer;