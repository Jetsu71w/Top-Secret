import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../App.js";

class Header extends Component {
    constructor(props) {
        super(props);
}
render(){
    return (
        <div className="container-fluid bgpic">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="ts font"><img src="/images/logo/logo.png" alt="" />TOP SECRET</h1>
                    <ul className="list-inline">
                        <li className="list-inline-item title"><Link className="text-muted ts2" to="/">Home Page</Link></li>
                        <li className="list-inline-item title">|</li>
                        <li className="list-inline-item title"><Link className="text-muted ts2" to="/people">Edit Page</Link></li>
                        <li className="list-inline-item title">|</li>
                        <li className="list-inline-item title"><Link className="text-muted ts2" to="/About">About Page</Link></li>
                    </ul>
                </div>
            </div>     
            <hr />         
        </div> 
        );
    }
}

export default Header;