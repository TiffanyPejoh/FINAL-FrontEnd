import React from "react";
import { Link } from "react-router-dom";

const GameDetail = (props) => {
    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={props.games.background_image} alt="..." /></div>
                    <div className="col-md-6">

                        <h1 className="display-5 fw-bolder">{props.games.name}</h1>
                        <div className="fs-5 mb-5">
                            <div className="text-decoration">rating : {props.games.rating}</div>
                            <div className="text-decoration">Released : {props.games.released}</div>
                            <div className="text-decoration">Website : {props.games.website}</div>
                            
                        </div>
                        <div className="d-flex">
                            <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                                <i className="bi-cart-fill me-1"></i>
                                Back To Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GameDetail;