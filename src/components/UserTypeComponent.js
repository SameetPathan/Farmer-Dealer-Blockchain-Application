import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaIndustry, FaBuilding } from 'react-icons/fa'; // Import icons of your choice
import Loader from './Loader';

function UserTypeComponent(props) {
  useEffect(() => {
    props.setfixedbottom(true);
  });

  return (
    <>
      <Loader />
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
                <FaUser size={30} className="mb-1 mr-1" /> Farmer Dashboard <br /> <br /> <hr />
                <small className='text-danger text-mute'>Persons who are farmers and want to sell their products directly to customers.</small>
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
                <FaIndustry size={30} className="mb-1 mr-1" /> Dealer Dashboard <br /><br /> <hr />
                <small className='text-danger text-mute'>Persons who are dealers and want to connect to farmers directly.</small>
                <br /><br />
              </Link>
            </form>
          </div>
        </div>

        <div className="form-bg">
          <div className="form-container ">
            <img
              src={process.env.PUBLIC_URL + "/govern.jpg"}
              height="180px"
              className="card-img-top shadow rounded mb-2"
              alt="..."
            />
            <form className="form-horizontal">
              <Link to="/adminsales" className="btn btn-default">
                <FaBuilding size={30} className="mb-1 mr-1" /> Government/Admin Dashboard <hr />
                <small className='text-danger text-mute'>Only visible for authorized personnel. Track sales around the systems.</small>
                <br /><br />
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
                <FaShoppingCart size={30} className="mb-1 mr-1" /> End User <br /><br /> <hr />
                <small className='text-danger text-mute'>Visible for all grocery buyers. You can check the average price of products.</small>
                <br /><br />
              </Link>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}

export default UserTypeComponent;
