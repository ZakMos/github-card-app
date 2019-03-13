import React, { Component } from 'react';
import CardList from './components/CardList';
import Form from './components/Form';
import './App.css';

class App extends Component {
    state ={
      profiles:[],
    };
    addNewProfile = (profileData) => {
   	this.setState(prevState => ({
     	profiles: [...prevState.profiles, profileData],
     }));
   };
   render() {
   	return (
     	<div>
     	  <div className="header">{this.props.title}</div>
         <Form onSubmit={this.addNewProfile} />
         <CardList profiles={this.state.profiles} />
     	</div>
     );
   }
 }

export default App;
