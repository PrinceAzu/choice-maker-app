import React from "react";

const action = (props) => {
    const checkDisabled = !props.choices.length;
    return (
        <div className="Action">
            <button className="big-btn" onClick= {props.chooseOne} disabled={checkDisabled}>Choose</button>
            <div className="widget-header">
                <h3>Total Choices <i><u>{props.choices.length}</u></i></h3>
                <button className="btn btn-link" onClick= {props.clearAll} disabled={checkDisabled}>Clear all</button>
            </div>
        </div>
    );
}

export default action;