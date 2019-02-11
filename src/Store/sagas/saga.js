import { takeLatest, all} from 'redux-saga/effects'
import { Types } from '../actions/ActionCreators'
import httpService from '../services/httpService'
import { Repo, Starred, User} from './User'

const url = 'https://api.github.com'

export default function* rootSaga(){
    const api = new httpService(url)
    yield all([
        takeLatest(Types.GET_USER_REPO_REQUEST, Repo({api})),
        takeLatest(Types.GET_USER_STARRED_REQUEST, Starred({api})),
        takeLatest(Types.GET_USER_REQUEST, User({api}))        
    ])
}

