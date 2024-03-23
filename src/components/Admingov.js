import React,{useState} from 'react'
import ViewProductComponent from './ViewProductComponent'
import DealerOrder from './DealerOrder'
import ViewOrdersFarmer from './ViewOrdersFarmer'

function Admingov(props) {

  const [fixedbottom, setfixedbottom] = useState(true);
  return (
    <div>
    <div class="alert alert-dark" role="alert">
    <p><b>Keep a track on products</b></p>
    <hr />
    <p>Tracking products in the market is crucial for any business. It allows you to stay updated on what is currently available and in demand, enabling informed decision-making and strategizing.</p>
    <hr />
    <ol>
        <li><b>What products are being sold in the market?</b></li>
        <p>Knowing which products are being sold in the market helps in understanding consumer preferences and trends. It aids in adjusting inventory levels and introducing new products to meet market demands.</p>
        <hr />
        <li><b>For what price are the products being sold?</b></li>
        <p>Understanding the pricing of products provides insights into market competitiveness and helps in setting competitive prices for your own products. Monitoring price fluctuations also assists in identifying potential opportunities or threats in the market.</p>
        <hr />
        <li><b>Which products' orders are being accepted/rejected?</b></li>
        <p>Tracking the acceptance or rejection of orders for different products is essential for managing inventory and customer satisfaction. It helps in identifying popular products with high demand as well as those that may require adjustments in pricing or marketing strategies.</p>
    </ol>
</div>
<hr />
<hr />

        <ViewProductComponent isgov={props.isgov} setfixedbottom={props.setfixedbottom}></ViewProductComponent>
        <DealerOrder isgov={props.isgov} setfixedbottom={props.setfixedbottom}></DealerOrder>
        
    </div>
  )
}

export default Admingov