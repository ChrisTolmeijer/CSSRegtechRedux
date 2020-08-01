import Axios from "axios";

export const LOAD_FILINGS = 'LOAD_FILINGS';
export const ADD_FILING = 'ADD_FILING';

export const AddFiling = data => dispatch => {
    Axios.post('http://localhost:3001/', data).then(r => dispatch({
        type: ADD_FILING,
        payload: r.data.filing,
    }));
};

export const LoadFilings = () => dispatch => {
    Axios.get('http://localhost:3001').then(r => dispatch({
        type: LOAD_FILINGS,
        payload: r.data,
    }));
};