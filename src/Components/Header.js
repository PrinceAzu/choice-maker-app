import React from "react";

const header = (props) => {
    return (
        <div className="header">
            <h2 className="'header__title">{props.title}</h2>
            <h5 className="'header__subtitle">{props.subtitle}</h5>
        </div>
    )
}

header.defaultProps= {
    title: "Choice Marker",
    subtitle: "Make a choice!"
  }
  

export default header;