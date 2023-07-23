import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PersonList from "./PersonList";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { peopleFetch, personDelete } from "../Fetch";
import "../App.css";

class Personal extends Component {

    constructor(props) {
        super(props);

        this.delPerson=this.delPerson.bind(this);
        this.editPerson=this.editPerson.bind(this);
    }
componentDidMount() {
    this.props.peopleFetch();
}

editPerson(person) {
    this.props.history.push('people/edit/' + person.id);
}

delPerson(person){
    this.props.personDelete(person.id);
}
    render() {
        return (
            <div className='bg'>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 text-muted">
                        <e1>Edit</e1>
                    </div>
                    <div className="col-6">
                        <button className="btn butt3 btn-info title float-right" onClick={() => this.props.history.push('people/add')}>Add Here</button>
                     </div>
                </div>
                {this.props.people && Array.isArray(this.props.people) &&
                <PersonList people={this.props.people}
                    onDelPerson={this.delPerson} onEditPerson={this.editPerson}
                />}
            </div>
            <Footer />
        </div>
        )
    }
}
function mapStateToProps({people}) {
    return { people };
}

export default withRouter( connect(mapStateToProps, {peopleFetch,  personDelete}) (Personal));