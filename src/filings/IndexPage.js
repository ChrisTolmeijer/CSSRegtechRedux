import React, { useEffect, useState } from 'react';
import { FilingsList } from './List';
import { Statistics } from './Statistics';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

export const IndexPage = () => {

    const history = useHistory();
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
        <hr />
        <button onClick={() => {
            history.push('/add');
        }}>Add filing</button>
    </div>;
};