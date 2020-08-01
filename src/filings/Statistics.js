import React from 'react';

export const Statistics = ({ filings }) => {
    return <div className="stastics">
        <h1>Statistics</h1>
        <div>
            <strong>Total filings:</strong>
            { filings.length }
        </div>
    </div>;
};