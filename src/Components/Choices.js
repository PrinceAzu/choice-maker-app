import React from 'react';
import Choice from './Choice';

const Choices = (props) => (
  <div className='widget__box' id='wb'>
    {
      props.choices.length > 0 ?
        <div>
          <h3 className="widget__message">Available Choices are</h3>
          {props.choices.map((cho, i) => {
            return (
              <Choice choice={cho} key={i} index={i} removeSelected={props.removeSelected}></Choice>
            )
          }

          )}
        </div>
        :
        <h3 className="widget__message" >Please add some choices</h3>
    }
  </div>
)
export default Choices;