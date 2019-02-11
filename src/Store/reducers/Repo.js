import { createReducer } from 'reduxsauce'
import { Types } from '../actions/ActionCreators'

export const INITIAL_STATE = {
    isLoading: false,
    repositories: [],
    error: false,
    errorMessage: {}
}

export const getUserRepoRequest = (state = INITIAL_STATE, action) =>{
    return {
        ...state,
        isLoading: true
    }
}
export const getUserRepoSuccess = (state = INITIAL_STATE, action) =>{
    return {
        ...state,
        isLoading: false,
        repositories: action.repo
    }
}
export const getUserRepoFailure = (state = INITIAL_STATE, action) =>{
    return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.error
    }
}

export const HANDLERS = {
    [Types.GET_USER_REPO_REQUEST]: getUserRepoRequest,
    [Types.GET_USER_REPO_SUCCESS]: getUserRepoSuccess,
    [Types.GET_USER_REPO_FAILURE]: getUserRepoFailure
}

export default createReducer(INITIAL_STATE, HANDLERS)