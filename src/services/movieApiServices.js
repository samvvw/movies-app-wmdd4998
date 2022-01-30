import axios from 'axios'
import qs from 'qs'
import { MOVIES_API_KEY, MOVIES_API_URL } from '../config/config'
export const fetchMovieApi = async (type, subtype, query) => {
    const params = {
        api_key: MOVIES_API_KEY,
    }

    if (query) {
        params.query = query
    }

    try {
        // const url = MOVIES_API_URL + type + subtype + '?'
        const url = `${MOVIES_API_URL}${type}/${subtype}`

        const requestConfig = axios.create({
            paramsSerializer: (params) =>
                qs.stringify(params, { arrayFormat: 'repeat' }),
        })

        const response = await requestConfig.get(url, { params })

        const results = response.data

        return results
    } catch (error) {
        console.log(error)
        throw error
    }
}
