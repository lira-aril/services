import React, {useEffect} from 'react';

export default function MasterInfo() {
    const[state, setState] = React.useState({
        master: '',
        description: ''
      })
    
      function getUpdate() {
        fetch("http://kaiaman.pythonanywhere.com/masters/6/")
        .then(response => response.json())
        .then(data => setState({
         master: data
        })
        )
      }

      useEffect(getUpdate, [])

    return (
        <div>
           Name: {state.master.name} 
            <p>Description: {state.master.description}</p> 
        </div>
    )
}
