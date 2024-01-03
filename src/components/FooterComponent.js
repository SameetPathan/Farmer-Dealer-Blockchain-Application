import React from 'react';
import '../footer.css';
function FooterComponent(props) {

  return(
<>
{props.fixedbottom?
	<div className="copyright fixed-bottom">
		<div className="container-fluid text-center ">
		<p>Copyrights &copy; 2023 - <a href="#">Farmer Dealer Direct Web App</a>,  All Rights Reserved.<br></br>
		</p>
		</div>
	</div>:
	<div className="copyright">
		<div className="container-fluid text-center ">
		<p>Copyrights &copy; 2023 - <a href="#">Farmer Dealer Direct Web App</a>,  All Rights Reserved.<br></br>
		</p>
		</div>
	</div>}

  </>
  );
}


export default FooterComponent;
