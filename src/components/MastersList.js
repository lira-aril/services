import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import MasterAddForm from './MasterAddForm';

export default function MastersList() {

    const [state, setState] = useState({
        items: [],
    })

    function getList() {
        fetch('http://kaiaman.pythonanywhere.com/masters/')
        .then(response => response.json())
        .then(data => setState({
            items: data,
        }))
    }

    useEffect(getList, [])
   
    return (
        <div>
            <MasterAddForm /><br/>
           {state.items.map((item) => (
               <ol key = {item.id}>
                   <Link to={`/master/${item.id}/`} >{item.name}: {item.description}</Link> 
               </ol>
           ))}
        </div>
    )
}
