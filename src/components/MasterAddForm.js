import React from "react";

export default function MasterAddForm() {

    const [state, setState] = React.useState({
        name: '',
        description: '',
    })

    function changeName(event) {
        setState({
            ...state,
            name: event.target.value
        })
    }

    function changeDescription(event) {
        setState({
            ...state,
            description: event.target.value
        })
    }

    function sendForm(event) {
        event.preventDefault()
        fetch('http://kaiaman.pythonanywhere.com/masters/', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
    }

    return (
    <form onSubmit={sendForm}>
        <input value={state.name} onChange={changeName} type="text" />
        <input value={state.description} onChange={changeDescription} type="text" />
        <button>Add</button>
    </form>
)
}