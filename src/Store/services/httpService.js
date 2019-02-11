import axios from 'axios'

const httpService = base => {
    const client = axios.create({
        baseURL: base
    })
    const get = (endpoint) => client.get(endpoint)

    return{
        getRepo: () => get('/users/sibelius/repos'),
        getStarred: () => get('/users/sibelius/starred'),
        getUser: () => get('/users/sibelius')
    }
}

export default httpService