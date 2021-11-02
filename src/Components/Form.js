import React, { useState } from 'react';


const Form = (props) => {
  const[error, setError] = useState('');
  
  const handleSave =(e)=>{
    const choice = e.target.elements.choice.value.trim()
    const error = props.handleSaveOption(choice)
    if(!error){
      e.target.elements.choice.value=''
    }
    setError(error);

    e.preventDefault();
  }

  return (
    <form onSubmit={handleSave} className="form">
      <input
        name='choice'
        className="form__input"
        placeholder='Enter your Choice'
        autoFocus
      />
      <button className='btn'>Save</button>
      {error && <p className="form-error" >{error}</p>}
    </form>
  )
}

export default Form;