import React from "react";

const choice = (props) => {
    return (
        <div className="Choice">
            <p className="option__text" id={props.index}>
                {props.index+1}. {props.choice}
            </p>
            <button className="btn btn-link" onClick={(e) => {props.removeSelected(e, props.index)}} >Clear</button>
        </div>
    );
}

export default choice;

// {props.choice && <p>{props.choice} <button onClick={(e) =>props.removeSelected(e, props.index)}>Clear</button></p>}