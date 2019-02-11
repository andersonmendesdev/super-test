import { createActions } from 'reduxsauce'

export const {Types, Creators } = createActions({
    getUserRepoRequest: null,
    getUserRepoSuccess: ['repo'],
    getUserRepoFailure:['error'],

    getUserStarredRequest: null,
    getUserStarredSuccess: ['starred'],
    getUserStarredFailure: ['error'],

    getUserRequest: null,
    getUserSuccess:['user'],
    getUserFailure: ['error']
})

export default Creators