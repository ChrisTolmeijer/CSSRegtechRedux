import React from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {

    const filings = useSelector(s => s.filings);

    return <div className="header">
        <div className="logo">
            CSS Filings
        </div>
        <div className="welcome">
            <strong>John Doe</strong>
            <span>Filings: { filings.length }</span>
        </div>
    </div>
};