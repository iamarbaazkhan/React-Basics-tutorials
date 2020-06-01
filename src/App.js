import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  // Using state for storing variable
  state = {
    persons: [
      { name: "Arbaaz", age: 22 },
      { name: "Shazam", age: 25 },
    ],
    // using this to hide the div and show on Click
    showPersons:false
  };

  //  Adding button property
  switchNameHandler = (newName) => {
    //console.log("Was Clicked !");
    //Using setstate to get the state
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: "Batman", age: 25 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Arbaaz", age: 22 },
        { name: event.target.value, age: 25 },
      ],
    });
  };

  togglePersonsHandler =()=>{
    const doesShow= this.state.showPersons;
    this.setState({showPersons:!doesShow}); 

  }

  render() {
    //  Using style into javascript code as inline
    const style = {
      backgroundColor: "white",
      font: "inherit",
      padding: "10px",
      border: "1px solid blue",
      cursor: "pointer",
    };


     //declaring variable 

     let persons=null;

     if(this.state.showPersons){
        persons=(
      <div>
      <Person
        name={this.state.persons[0].name}
        click={this.switchNameHandler.bind(this, "Shazam")}
        age={this.state.persons[0].age}
      >
        I will be Fullstack Developer
      </Person>
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}
      >
        I will be Fullstack Developer
      </Person>
      </div>
      )
     }

    return (
      <div className="App">
        <h1>Hello I am React Developer!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >
          Switch Name
        </button>
        {persons}
        {/* using props  and using ternary */}
      </div>
    );
  }
}

export default App;
