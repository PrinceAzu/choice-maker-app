import React from "react";

const Form = (props) => {

    return (
        <form onSubmit={props.saveChoiceHandler}>
            <input name="choice" className="form-input" value="" placeholder="Enter your choice"/>
            <button className="btn">Save</button>
        </form>
        
    )
}

export default Form;