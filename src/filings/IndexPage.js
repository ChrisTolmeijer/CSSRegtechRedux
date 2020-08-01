import React, { useEffect, useState } from 'react';
import { FilingsList } from './List';
import { Statistics } from './Statistics';
import Axios from 'axios';

export const IndexPage = () => {

    const [ filings, setFilings ] = useState([]);

    const fetchFilings = () => {
        return Axios.get('http://localhost:3001');
    }

    useEffect(() => {
        fetchFilings().then(response => {
            setFilings(response.data)
        })
    }, []);

    return <div className="page-width">
        <Statistics filings={filings}></Statistics>
        <FilingsList filings={filings}></FilingsList>
    </div>;
};