import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Class approach.
class App extends Component{
  state = {
    persons: [
      { id: '987fds', name: 'Danny', age: 26, gender: 'male' },
      { id: '654fds', name: 'Rene', age: 45, gender: 'male' },
      { id: '432hgf', name: 'Florian', age: 32, gender: 'male' },
    ],
    interests: "Don't know for now..",
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inhert',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    // Conditionaly show persons
    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
             click={() => this.deletePersonHandler(index)}
             name={person.name}
             age={person.age}
             gender={person.gender}
             key={person.id}
             change={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    return(
      <div className = "App" >
        <h1>Hi, I'm a React App</h1>
        <p>This is working really well!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  };
}

// Functional approach.
/* const App = (props) => {
  const [personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Danny', age: 26, gender: 'male' },
      { name: 'Rene', age: 45, gender: 'male' },
      { name: 'Florian', age: 32, gender: 'male' },
    ]
  });

  const [interests, setInterests] = useState('Dont know for now!');

  console.log(personsState, interests);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = "Daniel";
    setPersonsState({
      persons: [
        { name: 'Daniel', age: 26, gender: 'male' },
        { name: 'Rene', age: 45, gender: 'male' },
        { name: 'Florian', age: 33, gender: 'male' },
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is working really well!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} gender={personsState.persons[0].gender} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} gender={personsState.persons[1].gender}>
        My Hobbies: Tennis, Voetbal, Curling
      </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} gender={personsState.persons[2].gender} />
    </div>
  );

    // return React.createElement('div', {className:"App"}, React.createElement('h1', null, 'This works!'));

} */

export default App;
