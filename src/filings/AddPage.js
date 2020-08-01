import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { AddFiling } from '../state/actions/FilingActions';

const filingCategories = ['A', 'B', 'C'];

export const AddPage = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [ name, setName ] = useState('');
    const [ category, setCategory ] = useState(filingCategories[0]);

    const submitForm = e => {
        e.preventDefault();
        Axios.post('http://localhost:3001/', { name, category}).then(() => {
            dispatch(AddFiling({ name, category }));
            history.push('/');
        });
    }

    return <div className="page-width">
        <h1>Add filing</h1>
        <form onSubmit={submitForm}>
            <label>Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <label>Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)}>
                { filingCategories.map(c => <option value="c">{ c }</option>)}
            </select><br/><br/>
            <button type="submit">Add filing</button>
        </form>
    </div>
};