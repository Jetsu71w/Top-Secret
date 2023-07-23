import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { personField } from "./Fields";
import FormFields from "./FormFields";
import Fields from "./Fields";

class PersonForm extends Component {
    renderFields (Fields) {

        return Fields.map(({ label, name, type, required }) => {
            return (
                <Field
                key={name}
                label={label}
                type={type}
                required={required}
                component ={FormFields}
                name={name}
                />
            )
        } )
    }

    render() {
        const { onPersonSubmit } =this.props;
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(onPersonSubmit) }>
                    <div>{this.renderFields(personField)}</div>
                        <button className="btn butt3" type="submit" name="action" >
                            Save
                        </button>
                </form>
            </div>
        );
    }
}

function validate (values){
    const errors = {};
    personField.forEach(({ name, required }) => {
    if(!values[name] && required) {
        errors[name] = "Please insert data";
    }
});
    return errors;
}

function mapStateToProps({people}){
    if(people && people.id) {
         return {initialValues : people};
    }else { 
         return{};
    }
}

PersonForm = reduxForm({ validate, form : "personForm" })(PersonForm);
export default connect(mapStateToProps)(PersonForm);