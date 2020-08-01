import React from 'react';

export const Header = () => {
    return <div className="header">
        <div className="logo">
            CSS Filings
        </div>
        <div className="welcome">
            <strong>John Doe</strong>
            {/* @Todo: Retrieve the filing count with redux */}
            <span>Filings: 0</span>
        </div>
    </div>
};