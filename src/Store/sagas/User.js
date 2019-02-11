import ActionCreators from '../actions/ActionCreators'
import { put, call } from 'redux-saga/effects'

export const User = ({ api }) => function*(){
    try {
        const data = yield call(api.getUser)
        yield put(ActionCreators.getUserSuccess(data.data))
        
    } catch (error) {
        yield put(ActionCreators.getUserFailure(error.message))
    }
}
export const Repo = ({ api }) => function*(){
    try {
        const data = yield call(api.getRepo)
        yield put(ActionCreators.getUserRepoSuccess(data.data))
        
    } catch (error) {
       yield put(ActionCreators.getUserRepoFailure(error.message)) 
    }
}

export const Starred = ({ api }) => function*(){
    try {
        const data = yield call(api.getStarred)
        yield put(ActionCreators.getUserStarredSuccess(data.data))
        
    } catch (error) {
       yield put(ActionCreators.getUserStarredFailure(error.message)) 
    }
}