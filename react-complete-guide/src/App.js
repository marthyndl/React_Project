import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name:'Martin', age:30 },
      { name:'Daniel', age:29 },
      { name:'Sabrina', age:27 }
    ],
    otherState: 'some other value'
  });
  
  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS this.state.persons[0].name = 'Martin Daniel';
    setPersonsState({
      persons: [
        { name:'Martin Daniel', age:30 },
        { name:'Daniel', age:30 },
        { name:'Sabrina', age:27 }
      ] 
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler} >Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} >My hobbies: Soccer</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      {/* <Person name='Martin' age='30'>My hobbies: Soccer</Person>
      <Person name='Daniel' age='29' />
      <Person name='Sabrina' age='27' /> */}
    </div>
  )
}

export default app;

