import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
    render() {
        return(
            <div class="container">
                <div class="page-header">
                  <h1><Link to="/">React Recipe book</Link></h1>
                </div>
                <div class="container">
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        );
    }
}

export default Main;