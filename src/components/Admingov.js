import React,{useState} from 'react'
import ViewProductComponent from './ViewProductComponent'
import DealerOrder from './DealerOrder'
import ViewOrdersFarmer from './ViewOrdersFarmer'

function Admingov(props) {

  const [fixedbottom, setfixedbottom] = useState(true);
  return (
    <div>
       <div class="alert alert-dark" role="alert">
 <b>Keep a track on products ,</b> <hr></hr> 
 1. What products are been sold in market ? <hr></hr>
 2. For what price the products are been sold ?<hr></hr>
 3. Which products orders are been Accepted/Rejected ?
</div>
<hr />
<hr />

        <ViewProductComponent isgov={props.isgov} setfixedbottom={props.setfixedbottom}></ViewProductComponent>
        <DealerOrder isgov={props.isgov} setfixedbottom={props.setfixedbottom}></DealerOrder>
        
    </div>
  )
}

export default Admingov