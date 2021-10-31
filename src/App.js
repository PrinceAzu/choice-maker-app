import React, { Component } from 'react';
import Header from './Components/Header';
import Action from './Components/Action';
import Choices from './Components/Choices';
import Form from './Components/Form';
// import Styles from './Styles'


class  App extends Component {
  state = {
    choices: [],
    selectedChoice: undefined
  }
  

  chooseOne = () => {
    const randomNum = Math.floor(Math.random() * this.state.choices.length);
    const selectedOne = this.state.choices[randomNum];
    this.setState(() => ({ selectedChoice: selectedOne }))
  }

  clearALL = () => {
    this.setState(() => ({choices:[]}))
    
  }

  removeSelected = (e, index) => {
    const newChoices = this.state.choices.filter((t,i)=>i!==index)
    this.setState(() => ({choices: newChoices}))

    e.preventDefault();
  }

  // handleSaveOption = (option) => {
  //   if (choice.length < 1) {
  //     return 'Enter a choice to save !!';
  //   } else if (this.state.choices.includes(choice))
  //     return 'Enter a unique choice to save !!'

  //   const updatedOptions = this.state.options.concat(option);
  //   this.setState(() => ({ options: updatedOptions }))
  // }

  handleHideModal = () => {
    this.setState(() => ({ selectedChoice: undefined }))
  }

  render() {
    return(
      <div>
        <Header/>
        <div className="Container">
          <Action chooseOne={this.chooseOne} clearALL={this.clearALL} choices={this.state.choices}/>
          <div className="widget">
            <Choices choices={this.state.choices} removeSelected={this.removeSelected}/>
            <Form/>
          </div>
        
        </div>
        
      </div>
    );
  }
}


export default App;
