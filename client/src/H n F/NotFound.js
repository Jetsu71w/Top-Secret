import React, { Component } from "react";
import Header from "../H n F/Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const NotFound =() => {
    return (
            <div className="bg">
                <Header />
                <div className="container col-md-8 text-center">
                <br></br><br></br><br></br><br></br><br></br>
                    <h1 className="font3 ts">404</h1>
                    <h2 className="mb-4 text-muted">Can't Found this page</h2>
                    <p className="title mb-5 text-muted ">Sorry for inconvenience</p>
                    <button className="butt3"><Link className="text-muted ts2" to="/">Home Page</Link></button>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <Footer />
            </div>
        )
    }
    
    export default NotFound;