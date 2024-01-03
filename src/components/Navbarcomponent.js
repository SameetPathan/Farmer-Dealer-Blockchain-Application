import React from 'react';
import Loader from './Loader';
import Logincomponent from './Logincomponent';
import AlertComponent from './AlertComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Navbarcomponent(props) {


  const handleGoBack = () => {
    window.history.back();
    props.setfixedbottom(true);
  }

  const divStyle = {
    borderBottom: '0.1px solid white',
  };


  return (
    <>
  <Loader></Loader>
  <div className='sticky-top'>


      <nav className="navbar navbar-expand-lg navbar-dark bgd">
      
        <div className="logo-holder logo-3 mr-3">
          <a>
            <h3>Farmer Dealer Communication</h3>
            <p></p>
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mr-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
      
          </ul>
          {props.currentAccount?<button className='btn btn-secondary' onClick={handleGoBack}>Go Back</button>:""}
           
            <Logincomponent setfixedbottom={props.setfixedbottom} setCurrentAccount={props.setCurrentAccount} setCurrentBalanace={props.setCurrentBalanace} currentAccount={props.currentAccount} currentBalance={props.currentBalance} ></Logincomponent>
        </div>
      </nav>
    </div>


  


  
    </>
  );
}

export default Navbarcomponent