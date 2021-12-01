import React from "react";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
    return(
        <div className="col mb-5">
                        <div className="card h-100">
                       
                            <img className="card-img-top" src={props.game.background_image} alt="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"/>
                       
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">{props.game.name}</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                            
                                </div>
                            </div>
                         
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                 <div className="text-center "><Link className="btn btn-outline-dark mt-auto" to={`/details/${props.game.id}`} >Details</Link></div>
                            </div>
                        </div>
                    </div>
    );
}

export default MovieItem;