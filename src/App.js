import React, { Component } from 'react';
import CardList from './components/CardList';
import Form from './components/Form';
import './App.css';


const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "Facbook"},
  {name: "Sophi Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Facbook"},
  {name: "Sebastian Markbage", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facbook"},
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      profiles: testData,
    }
  }



  render() {
    return (
      <div className="App">
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
