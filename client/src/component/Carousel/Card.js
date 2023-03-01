import React,{Fragment} from 'react'
import {Link} from 'react-router-dom';
import image from './m1.jpg';
import image1 from './m2.jpg';
import image2 from './m3.jpg';

const Card = () => {
    return (
        <Fragment>
                <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Trending Andriod and IOS Mobile Phones</h5>
                        <img class="d-block w-75 mx-5 mt-5" src={image} alt="First slide" />
                        <p className="card-text">Click here to check out top trending andriod and ios mobile phones.</p>
                        <Link className="btn btn-primary">Check Out</Link>
                    </div>
                    </div>
                </div> 
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Trending Laptops and Pcs</h5>
                        <img class="d-block w-75 mx-5" src={image1} alt="second slide" />
                        <p className="card-text">Click here to check out top trending windows, ubuntu and ios laptops,pcs.</p>
                        <Link className="btn btn-primary">Check Out</Link>
                    </div>
                    </div>
                </div> 
                <div className="col-sm-4">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Trending accessories and Gadgets</h5>
                        <img class="d-block w-75 mx-5" src={image2} alt="third slide" />
                        <p className="card-text">Click here to check out top trending accessories and Gadgets from multiple brands.</p>
                        <Link  className="btn btn-primary">Check Out</Link>
                    </div>
                    </div>
                </div>
                </div>
        </Fragment>
    )
}

export default Card;