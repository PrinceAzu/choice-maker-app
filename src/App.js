import React from 'react';
import './styles/styles.css';
import Action from './Components/Action';
import Form from './Components/Form';
import Header from './Components/Header';
// import OptionalModal from './Components/OptionalModal';
import Choices from './Components/Choices';

class App extends React.Component {
  state = {
    choices: [],
    selectedChoice: undefined
  }

  componentDidMount = () => {
    try {
      const json = localStorage.getItem('choices');
      const choices = JSON.parse(json)
      if (choices) {
        this.setState(() => ({ choices }))
      }
    } catch (e) {
      console.log(e)
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.choices.length !== this.state.choices.length) {
      const json = JSON.stringify(this.state.choices)
      localStorage.setItem('choices', json)
    }
  }

  chooseOne = () => {
    const randomNum = Math.floor(Math.random() * this.state.choices.length);
    const selectedOne = this.state.choices[randomNum];
    this.setState(() => ({ selectedChoice: selectedOne }))
  }

  removeAll = () => {
    this.setState(() => ({ choices: [] }))
  }

  removeSelected = (e, index) => {
    e.preventDefault();
    const newChoices = this.state.choices.filter((t, i) => i !== index);
    this.setState(() => ({ options: newChoices }))
  }

  handleSaveChoice = (choice) => {
    if (choice.length < 1) {
      return 'Enter a choice to save !!';
    } else if (this.state.choices.includes(choice))
      return 'Enter a unique choice to save !!'

    const updatedChoices = this.state.choice.concat(choice);
    this.setState(() => ({ choices: updatedChoices }))
  }

  handleHideModal = () => {
    this.setState(() => ({ selectedChoice: undefined }))
  }
  render() {
    return (
      <>
        <div>
          <Header />
          <div className="container">
            <Action chooseOne={this.chooseOne} clearAll={this.clearAll} choices={this.state.choices}/>
            <div className="widget">
              <Choices options={this.state.choices} removeSelected={this.removeSelected} />
              <Form handleSaveChoice={this.handleSaveChoice} />
            </div>
            {/* <OptionalModal
              selectedChoice={this.state.selectedChoice}
              handleHideModal={this.handleHideModal}
            /> */}
          </div>
        </div>
      </>
    );
  }
}

export default App;