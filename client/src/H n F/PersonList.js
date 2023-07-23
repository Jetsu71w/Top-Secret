import React,  { Component } from "react";
import Person from "./Person";

class PersonList extends Component {
    showpeople(){
        return this.props.people && this.props.people.map(person => (
            <Person key ={person.id} person={person} onDelPerson={this.props.onDelPerson} onEditPerson={this.props.onEditPerson}/>
        )) 
    }

    render() {
        return (
            <div className="row">
                {this.showpeople()}
            </div>
        );
    }
}

export default PersonList;
