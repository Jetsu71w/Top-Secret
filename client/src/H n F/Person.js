import React, { Component } from "react";

class Person extends Component {
    constructor(props) {
        super(props)
}

render() {
    const { UserName, Password, personName, personLastname, Sex, Age, personEmail, tell, Address, detail, pic } = this.props.person;
    return(
        <div className="col-md-4 col-sm-6">
            <img className="img=fluid img-thumbnail mt-3" src={pic} />
            <un className="title text-left text-muted"> UserName | {UserName} <br></br> PassWord | {Password} <br></br> Sure Name | {personName} <br></br> Last Name | {personLastname} <br></br> Sex | {Sex} <br></br> Age | {Age} <br></br> Email | {personEmail} <br></br> Tell. | {tell} <br></br> Detail | {detail} <br></br> Address | {Address} </un>

                {(this.props.onDelPerson  ||  this.props.onEditPerson) &&
                <button className="btn butt" onClick={() => this.props.onEditPerson(this.props.person)}>
                    Edit
                </button>
                }
                {(this.props.onDelPerson ||  this.props.onEditPerson) &&
                <button className="btn butt2 col-5 float-right title" onClick={() => this.props.onDelPerson(this.props.person)}>
                    Delete
                </button>
                 }
             </div> 
        )
    }
}
export default Person;