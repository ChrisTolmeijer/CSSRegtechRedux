import React from 'react';
import { FilingsList } from './List';
import { Statistics } from './Statistics';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const IndexPage = () => {
    
    const history = useHistory();
    const filings = useSelector(s => s.filings);

    return <div className="page-width">
        <Statistics filings={filings}></Statistics>
        <FilingsList filings={filings}></FilingsList>
        <hr />
        <button onClick={() => {
            history.push('/add');
        }}>Add filing</button>
    </div>;
};