import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const PricingTable = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="pricingcard">
          <div className="card mb-4 shadow-sm" >
            <div className="card-header">
              <h1 className="my-0 font-weight-normal"> <strong> Quarterly Segment</strong></h1>
            </div>
            <div className="card-body">
              <h4 className="card-title pricing-card-title text-warning">₹25000 <small className="text-white">/ quarter</small></h4> <br />
              <ul className="list-unstyled mt-3 mb-4">
                <li>➢ Strategy and Planning</li> <br />
                <li>➢ Social Media Advertising</li> <br />
                <li>➢ Daily Post and AD Campaign</li> <br />
                <li>➢ Creative Design</li> <br />
                <li>➢ Reel as Per Your Requirement</li> <br /> <br />
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary ">Buy Now</button>
            </div>
          </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="pricingcard">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h1 className="my-0 font-weight-normal"><strong> Annual Segment</strong></h1>
            </div>
            <div className="card-body">
              <h4 className="card-title pricing-card-title"> <small className="text-warning">negotiable</small></h4> <br />
              <ul className="list-unstyled mt-3 mb-4">
                <li>➢ Profile Optimization</li> <br />
                <li>➢ Posting and Advertising</li> <br />
                <li>➢ Engaging</li> <br />
                <li>➢ Creative Design</li> <br />
                <li>➢ Strategy Planning</li> <br />
                <li>➢ Reels as Per Your Requirement</li>
              </ul>
              <NavLink to='/contact' type="button" className="btn btn-lg btn-block btn-primary ">Contact Us</NavLink>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;