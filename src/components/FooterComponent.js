import React from 'react';
import { FaHeart } from 'react-icons/fa';
import '../footer.css';
function FooterComponent(props) {

  return(
<>
<div className={`copyright ${props.fixedbottom ? '' : ''}`}>
      <div className="container-fluid text-center">
        <p>
          Copyrights &copy; 2023 - <a href="#">Farmer Dealer Direct Web App</a>, All Rights Reserved.
          <br />
          Made with <FaHeart />
        </p>
      </div>
    </div>

  </>
  );
}


export default FooterComponent;
