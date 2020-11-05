import {
    FETCH_MTG_TYPES_START,
    FETCH_MTG_TYPES_SUCCESS,
    FETCH_MTG_TYPES_FAILURE,
} from '../actions'

const initialState = {
    isLoading: false,
    mtgTypesData: [],
    error: '',
}

export const mtgReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MTG_TYPES_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_MTG_TYPES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                mtgTypesData: action.payload
            }
        case FETCH_MTG_TYPES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}
