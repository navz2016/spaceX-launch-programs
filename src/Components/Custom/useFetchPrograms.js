import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const BASE_URL = 'https://api.spacexdata.com/v3/launches';

function reducer(state, action){
    switch(action.type) { 
        case ACTIONS.MAKE_REQUEST:
            return { programs: [], loading: true }

        case ACTIONS.GET_DATA:
            return { ...state, programs: action.payload.programs, loading: false }
        
        case ACTIONS.ERROR:
            return { ...state, programs: [], loading: false, error: action.payload.error }

        default:
            return state;
    }
}

export default function useFetchDetails(params){
    const [state, dispatch] = useReducer(reducer, { programs: [], loading: true}); 

    useEffect(()=>{
        dispatch({ type: ACTIONS.MAKE_REQUEST});
        
        axios.get(BASE_URL, {
            params: {...params}
        }).then(res =>{
            dispatch({ type: ACTIONS.GET_DATA, payload: { programs: res.data }})
        }).catch(err => {
            dispatch({ type: ACTIONS.ERROR, payload: { error : err }})
        });

    }, [params]);

    return state;
}