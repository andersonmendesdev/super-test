import { createReducer } from 'reduxsauce'
import { Types } from '../actions/ActionCreators'

export const INITIAL_STATE = {
    isLoading: false,
    starred: [],
    error: false,
    errorMessage: {}
}

export const getUserStarredRequest = (state = INITIAL_STATE, action) =>{
    return {
        ...state,
        isLoading: true
    }
}
export const getUserStarredSuccess = (state = INITIAL_STATE, action) =>{
    return {
        ...state,
        isLoading: false,
        starred: action.starred
    }
}
export const getUserStarredFailure = (state = INITIAL_STATE, action) =>{
    return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
    }
}

export const HANDLERS = {
    [Types.GET_USER_STARRED_REQUEST]: getUserStarredRequest,
    [Types.GET_USER_STARRED_SUCCESS]: getUserStarredSuccess,
    [Types.GET_USER_STARRED_FAILURE]: getUserStarredFailure
}

export default createReducer(INITIAL_STATE, HANDLERS)