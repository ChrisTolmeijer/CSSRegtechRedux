import React from 'react';
import { FilingsList } from './List';
import { Statistics } from './Statistics';
import { useSelector } from 'react-redux';

export const IndexPage = () => {
    
    const filings = useSelector(s => s.filings);

    return <div className="page-width">
        <Statistics filings={filings}></Statistics>
        <FilingsList filings={filings}></FilingsList>
    </div>;
};