export const LOAD_FILINGS = 'LOAD_FILINGS';
export const ADD_FILING = 'ADD_FILING';

export const AddFiling = data => ({
    type: ADD_FILING,
    payload: data,
});

export const LoadFilings = () => {
    return {
        type: LOAD_FILINGS,
        /* @Todo: load filings from API */
        payload: [],
    };
};