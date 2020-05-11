import React , {Component} from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component{
  // Using state for storing variable 
   state = {
     persons:[
       {name:'Arbaaz' , age:22},
       {name:'Shazam' , age:25}
     ]
   }

  //  Adding button property 
  switchNameHandler = () =>{
    //console.log("Was Clicked !");
    //Using setstate to get the state 
    this.setState({
      persons:[
        {name:'Joker' , age:22},
        {name:'Batman' , age:25}
      ]
    })
  }
   render(){
     return(
           <div className="App">
                <h1>Hello  I am React Developer!</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                {/* using props  */}
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I will be Fullstack Developer</Person>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I will be Fullstack Developer</Person>
           </div>
     );
   }
}

export default App;
