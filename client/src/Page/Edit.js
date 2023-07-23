import React, { Component } from "react";
import { connect } from "react-redux";
import { personCreate, personUpdate, personFetch } from "../Fetch";
import Header from "../H n F/Header";
import Footer from "../H n F/Footer";
import PersonForm from "../H n F/PersonForm";

class Edit extends Component {

    componentDidMount() {
        if(this.props.match.params.id) {
            this.props.personFetch(this.props.match.params.id);
        }
    }

    render() {
        const { formValues, match, people, personCreate, personUpdate } = this.props;

        return(
            <div className="bg">
                <Header />
                <div className="container col-md-5 text-muted">
                    {match.path.indexOf("add") > 0 && (
                    <div>
                        <p1 className="font ts text-dark">ADD</p1>
                        {
                            people.saved && (
                            <div className="alert alert-secondary title" role="alert">
                            {people.msg}
                            </div>
                            )
                        }
                    <PersonForm onPersonSubmit={() => personCreate (formValues)}/>
                    </div>
                )}

                    {match.path.indexOf("edit") > 0 && (
                        <div>
                            <h2>Edit Page</h2>
                            {
                                people.saved && (
                                    <div className="alert alert-secondary title" role="alert">
                                    {people.msg}
                                    </div>
                                )
                            }
                        <PersonForm onPersonSubmit={() => personUpdate(people.id,formValues)} />
                        </div>
                    )}
            </div>
            <Footer/>
        </div>
        )
    }
}

function mapStateToProps( {form, people} ) {
    return { formValues: form.personForm ? form.personForm.values : null, people }
}

export default connect(mapStateToProps, {personCreate,personUpdate,personFetch}) (Edit);
