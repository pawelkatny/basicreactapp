import React, { Component } from 'react';
import Person from './Person/Person';
import styles from './App.module.css'
import ErrorHandler from './ErrorHandler/ErrorHandler';


class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 60 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Pablo', age: 15 }
    ],
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(prsn => {
      return prsn.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons:persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    let person = null;
    let btnClass = [styles.ButtonApp];

    if (this.state.showPersons) {
      person = (

        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );

        btnClass.push(styles.Black);
    }

      return (
      <div className={styles.App}>
        <h1>Hello, I am React App</h1>
        <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>Toggle Persons List</button>
        {person}
      </div>
    );
  }
}

export default App;
