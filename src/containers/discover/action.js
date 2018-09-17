/**
 * banner action
 */
import Request from '../../utils/request'
import API from '../../utils/api'

export const GET_BANNER = 'GET_BANNER';

export const getBannerAction = () => async dispatch => {

    let data = await Request({
        url: API.banner,
        method: 'get',
        data: {}
    })

    dispatch({
        type: GET_BANNER,
        data
    })
}

