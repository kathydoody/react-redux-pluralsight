import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render(){
    return (
      <div className="jumbotron">
        <h1>Kathy's Pluralsight Admin</h1>
        <p>Built with React, Redux and React Router in ES6</p>
        <Link to="about" className ="btn btn-primary, btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
