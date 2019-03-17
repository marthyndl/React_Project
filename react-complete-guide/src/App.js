import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name:'Martin', age:30 },
      { name:'Daniel', age:29 },
      { name:'Sabrina', age:27 }
    ],
    otherState: 'some other value'
  }
  
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS this.state.persons[0].name = 'Martin Daniel';
    this.setState({
      persons: [
        { name: newName, age:30 },
        { name:'Daniel', age:30 },
        { name:'Sabrina', age:27 }
      ] 
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Martin', age:30 },
        { name: event.target.value, age:30 },
        { name:'Sabrina', age:27 }
      ] 
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('Martin Daniel')} >Switch name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this, 'Martin')}
        >My hobbies: Soccer</Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        change={this.nameChangeHandler}/>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
        {/* <Person name='Martin' age='30'>My hobbies: Soccer</Person>
        <Person name='Daniel' age='29' />
        <Person name='Sabrina' age='27' /> */}
      </div>
    )
  }
}

export default App;

