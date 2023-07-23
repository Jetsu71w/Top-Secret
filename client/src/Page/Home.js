import React, { Component } from "react";
import Header from "../H n F/Header";
import Footer from "../H n F/Footer";
import { connect } from "react-redux";
import { peopleFetch } from "../Fetch";
import PersonList from "../H n F/PersonList";
import "../App.css"

class Home extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.peopleFetch();
}
    render () {
        return (
            <div className="bg">
                <Header className="bgpic"/>
                <div className="container">
                <div className="bg3">
                {this.props.people && Array.isArray(this.props.people) &&
                <PersonList people={this.props.people}/>
                }
            </div>      
            </div>
            <Footer Nm = "Wittayakorn Thongkum" Email="wittayakorn.t@ku.th"/>
            </div>
        )
    }
}

function mapStateToProps({people}){
    return { people } ;
}

export default connect(mapStateToProps, { peopleFetch }) (Home);