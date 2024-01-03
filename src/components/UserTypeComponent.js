import React from 'react'
import { useEffect ,useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import Loader from './Loader';
import OurService from './OurService';

function UserTypeComponent(props) {

  useEffect(() => {
    props.setfixedbottom(true);
  });

  return (
    <>
    <Loader></Loader>
   {/* <OurService to={" To"} text={"F"}></OurService> */ }
  
 <div className='d-lg-flex align-items-lg-center'>
      
    <div className="form-bg">
        <div className="form-container ">
            <img
            src={process.env.PUBLIC_URL + "/farmer.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
            />
            
            <form className="form-horizontal">
                <Link to="/farmerhome" className="btn btn-default">
                Farmer Dashboard <br></br> <br></br> <hr></hr>
                <small className='text-danger text-mute'>Persons who are farmer and want to sale there product directly to customers.</small>

                </Link>

            </form>
            </div>
      </div>

       

    <div className="form-bg">
        <div className="form-container ">
            <img
            src={process.env.PUBLIC_URL + "/dealer.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
            />
           
                <form className="form-horizontal">
                <Link to="/dealerhome" className="btn btn-default">
                        Dealer Dashboard <br></br><br></br> <hr></hr>
                        <small className='text-danger text-mute'>Persons who are dealers and want to connect to farmer directly.</small>
                        <br></br><br></br>
                </Link>
                </form> 
        </div>
      </div>


    <div className="form-bg">
        <div className="form-container "> 
        <strong></strong>
            <img
            src={process.env.PUBLIC_URL + "/govern.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
                />
            
            <form className="form-horizontal">
            <Link to="/adminsales" className="btn btn-default">
                        Government/Admin Dashboard 
                        <hr></hr>
                        <small className='text-danger text-mute'>Only Visible for Authorized Person. Track Sales around the Systems.</small>
                        <br></br><br></br>
            </Link>

            </form>
        </div>
    </div>

    <div className="form-bg">
        <div className="form-container ">

            <img
            src={process.env.PUBLIC_URL + "/crowd.jpg"}
            height="180px"
            className="card-img-top shadow rounded mb-2"
            alt="..."
            />
         
            <form className="form-horizontal">
            <Link to="/userview" className="btn btn-default">
                        end User  <br></br><br></br> <hr></hr>
                        <small className='text-danger text-mute'>Visible for all grocery buyers. You can check Average price of product.</small>
                        <br></br><br></br>
            </Link>

            </form>
        </div>
    </div>

    </div>

    </>
  );
}

export default UserTypeComponent