import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MasterPage() {
    const [state, setState] = useState({
        name: "",
        description: ""
    })

    const { id } = useParams()

    function ourRequest() {
        fetch(`http://kaiaman.pythonanywhere.com/masters/${id}`)
            .then(response => response.json())
            .then(data => {
                setState({
                    name: data.name,
                    description: data.description,
                })
            })
    };

    useEffect(ourRequest, [id]);

    return (
        <div>
            Name: {state.name}
            <p>Description: {state.description}</p>
        </div>
    )
}