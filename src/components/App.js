import React , { PropTypes } from 'react';
import Header from './common/Header.js';


class App extends React.Component{
    render(){
        return (
            <div id="container-fuid">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};
export default App;