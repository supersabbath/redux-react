import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {

    render(){
        return ( 
        <div className="jumbotron">
            <h1>Fer Canon's version</h1>
            <p> Reac Redux </p>
            <Link to="about" className="btn btn-primary ntn-lg"> Learn Redux</Link>
        </div> );
    }
}

export default HomePage;