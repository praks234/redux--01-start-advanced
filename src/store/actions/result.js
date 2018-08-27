import * as actionTypes from './actionTypes';

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        rsltElId: id
    }
}

export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    }
}

export const storeResult = (result) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(result));
        },2000)
    }
}