import {
    ADD_FILING,
    LOAD_FILINGS
} from '../actions/FilingActions';

const initialState = {
    filings: [],
};

export const FilingsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FILING: 
            return {
                ...state,
                filings: [ ...state.filings, action.payload ]
            };
        case LOAD_FILINGS: 
            return {
                ...state,
                filings: action.payload,
            };
        default:
            return state;
    }
}