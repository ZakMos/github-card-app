import React, { Component } from 'react';



class Card extends Component {
  render() {
    return (
      <div className= "github-profile">
        <img src="https://placehold.it/75" alt="user-info"/>
          <div className="info">
            <div className="name">Name Here...</div>
            <div className="company">Company Here...</div>
          </div>
      One GitHub Profile...
      </div>
    );
  }
}

export default Card;
