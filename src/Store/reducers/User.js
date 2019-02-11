import { createReducer } from 'reduxsauce'
import { Types } from '../actions/ActionCreators'

export const INITIAL_STATE = {
    isLoading: false,
    user: {},
    error: false,
    errorMessage: {}
}

export const getUserRequest = (state = INITIAL_STATE, action) =>{
    return {
        ...state,
        isLoading: true
    }
}
export const getUserSuccess = (state = INITIAL_STATE, action) =>{
    return {
        ...state,
        isLoading: false,
        user: action.user
    }
}
export const getUserFailure = (state = INITIAL_STATE, action) =>{
    return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
    }
}

export const HANDLERS = {
    [Types.GET_USER_REQUEST]: getUserRequest,
    [Types.GET_USER_SUCCESS]: getUserSuccess,
    [Types.GET_USER_FAILURE]: getUserFailure
}

export default createReducer(INITIAL_STATE, HANDLERS)