import React, { Component } from 'react';
// import logo from './logo.svg';
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
  
  switchNameHandler = () => {
    console.log('Was clicked!');
    // this.state.persons[0].name = 'Martin Daniel';
    this.setState({
      persons: [
        { name:'Martin Daniel', age:30 },
        { name:'Daniel', age:30 },
        { name:'Sabrina', age:27 }
      ] 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler} >Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons.age[0]} >My hobbies: Soccer</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons.age[1]} />
        <Person name={this.state.persons[2].name} age={this.state.persons.age[2]} />
        {/* <Person name='Martin' age='30'>My hobbies: Soccer</Person>
        <Person name='Daniel' age='29' />
        <Person name='Sabrina' age='27' /> */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'));
  }
}

export default App;
