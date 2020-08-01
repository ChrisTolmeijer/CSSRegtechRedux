import React from 'react';

export const FilingsList = ({ filings }) => {

    return <div className="page-width">
        <h1>Filings</h1>
        <table width="100%">
            <thead>
                <td>Name</td>
                <td>Category</td>
                <td>Filing date</td>
            </thead>
            { filings.map(filing => 
            <tr key={`filing-${filing.name}`}>
                <td>{ filing.name }</td>
                <td>{ filing.category }</td>
                <td>{ filing.date }</td>
            </tr>
            )}
        </table>
    </div>;
};
