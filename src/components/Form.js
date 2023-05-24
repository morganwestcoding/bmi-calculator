import React from 'react';
import TextInput from './TextInput.js';
import '../styles/Form.css';

class Form extends React.Component {
    render() {
        return(
        <div>
            <div className="row">
                <TextInput label="Height" placeholder="Enter height in meters" />
            </div>
            <div className="row">
                <TextInput label="Weight" placeholder="Enter weight in kg" />
            </div>
        </div>
        )
    }
}

export default Form;