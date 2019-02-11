import { combineReducers } from 'redux'
import repo from './Repo'
import starred from './Starred'
import user from './User'

const rootReducers = combineReducers({
    repo,
    starred,
    user
})

export default rootReducers