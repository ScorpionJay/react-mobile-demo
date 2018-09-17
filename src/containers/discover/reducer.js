import { GET_BANNER } from './action';

const initialState = {
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BANNER:
            return Object.assign({}, state, {data:[ ...action.data] })
        default:
            return state
    }
}


export default reducer