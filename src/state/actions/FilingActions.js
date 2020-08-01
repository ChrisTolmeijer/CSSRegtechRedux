import Axios from "axios";

export const LOAD_FILINGS = 'LOAD_FILINGS';
export const ADD_FILING = 'ADD_FILING';

export const AddFiling = data => ({
    type: ADD_FILING,
    payload: data,
});

export const LoadFilings = () => dispatch => {
    Axios.get('http://localhost:3001').then(r => dispatch({
        type: LOAD_FILINGS,
        payload: r.data,
    }));
};