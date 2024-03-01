import {React,useEffect,} from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import { ethers } from 'ethers';
import Loader from './Loader';
import OurService from './OurService';



function FarmerHome(props) {

  

  useEffect(() => {
	props.setfixedbottom(true);
  }, [])

  return (
    <>
<Loader></Loader>
<div class="alert alert-dark" role="alert">
  Farmer Home Dashboard
</div>


<div className="d-lg-flex align-items-lg-center">

  <div className="form-bg">
        <div className="form-container ">
		

		<img
            src={process.env.PUBLIC_URL + "/addproduct.png"}
            height="180px"
            className="card-img-top shadow rounded mb-3"
            alt="..."
                />
         
            <form className="form-horizontal">
                <Link to="/addproduct" className="btn btn-default">
                Add Products
                </Link>

            </form>
            </div>
      </div>

      <div className="form-bg">
        <div className="form-container ">
		
		<img
            src={process.env.PUBLIC_URL + "/viewproducts.png"}
            height="180px"
            className="card-img-top shadow rounded mb-3"
            alt="..."
                />
        
            <form className="form-horizontal">
                <Link to="/viewproduct" className="btn btn-default">
                View Products
                </Link>

            </form>
            </div>
      </div>

	  <div className="form-bg">
        <div className="form-container ">
		
		<img
            src={process.env.PUBLIC_URL + "/orders.png"}
            height="180px"
            className="card-img-top shadow rounded mb-3"
            alt="..."
                />
        
            <form className="form-horizontal">
                <Link to="/vieworders" className="btn btn-default">
                View Orders
                </Link>

            </form>
            </div>
      </div>

</div>




    </>
  )
}

export default FarmerHome