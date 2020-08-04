import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LoadFilings } from '../state/actions/FilingActions';

export const Statistics = ({ filings }) => {

    const dispatch = useDispatch();
    const [ grouped, setGrouped ] = useState([]);


    const onRefresh = () => {
        dispatch(LoadFilings());
    };

    useEffect(() => {
        const groups = filings.reduce((obj, f) => {
            obj[f.category] = obj[f.category] ? obj[f.category] + 1 : 1;
            return obj;
        }, {});
        const g = Object.keys(groups).map(group => ({ category: group, count: groups[group] }));
        setGrouped(g);
    }, [filings])

    return <div className="statistics">
        <h1>Statistics</h1>
        <div className="container">
            <div>
                <strong>Total filings:</strong>
                { filings.length }
            </div>
            <div>
                <strong>Total filings:</strong>
                <div>
                    { grouped.map(group => <span>Category { group.category }: { group.count }<br/></span>) }
                </div>
            </div>
            <div>
                <strong>Most recent filing:</strong>
                { filings.length > 0 ? filings[filings.length - 1].name : 'N/A' }
            </div>
            <div>
                <button onClick={onRefresh}>Refresh...</button>
            </div>
        </div>
    </div>;
};