import axios from 'axios';


//action types
export const FETCH_MTG_TYPES_START = 'FETCH_MTG_TYPES_START';
export const FETCH_MTG_TYPES_SUCCESS = 'FETCH_MTG_TYPES_SUCCESS';
export const FETCH_MTG_TYPES_FAILURE = 'FETCH_MTG_TYPES_FAILURE';



//action creators (async)
export const fetchMTGTypes = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_MTG_TYPES_START });


        //fetch data
        axios  
            .get('https://api.magicthegathering.io/v1/types')
            .then((res) => {
                console.log('res.data from action',res.data)
                dispatch({ type: FETCH_MTG_TYPES_SUCCESS, payload: res.data.types });
            })
            .catch((err) => {
                dispatch({ type: FETCH_MTG_TYPES_FAILURE, payload: err.message })
            })
    
    }
}

///