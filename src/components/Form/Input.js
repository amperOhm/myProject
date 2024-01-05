import React from "react";
import '../../App.css';

export default function Input(props) {

    return (
        <div>
            <label>
                <div style={{ textAlign: 'left', marginTop: '10px' }}>{props.label}:</div>
                <input
                    name={props.name}
                    type="text"
                    className="input"
                    value={props.value}
                    onChange={(e) => { props.handleChange(e) }} />
            </label>
        </div>
    );

}