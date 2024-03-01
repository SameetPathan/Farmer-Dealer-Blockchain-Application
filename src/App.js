import './App.css';
import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import Navbarcomponent from './components/Navbarcomponent';
import FooterComponent from './components/FooterComponent';
import UserTypeComponent from './components/UserTypeComponent';
import ForceLogin from './components/ForceLogin';
import Loader from './components/Loader';
import FarmerHome from './components/FarmerHome';
import AddProductComponent from './components/AddProductComponent';
import ViewProductComponent from './components/ViewProductComponent';
import DealerHome from './components/DealerHome';
import DealerViewProduct from './components/DealerViewProduct';
import DealerOrder from './components/DealerOrder';
import ViewOrdersFarmer from './components/ViewOrdersFarmer';
import UserProductView from './components/UserProductView';
import Admingov from './components/Admingov';



 
function App() {

  const [currentAccount, setCurrentAccount] = useState(null);

  const [currentBalance, setCurrentBalanace] = useState(null);

  const [fixedbottom, setfixedbottom] = useState(true);



  return <>

    <div className="App">
        
        <Loader></Loader>

          {currentAccount?
            <Router>
            <Navbarcomponent setfixedbottom={setfixedbottom} setCurrentAccount={setCurrentAccount} setCurrentBalanace={setCurrentBalanace} currentAccount={currentAccount} currentBalance={currentBalance}></Navbarcomponent>
            <div className='container-fluid mt-4'>
              <Routes> 
                <Route exact path='/' element={<UserTypeComponent setfixedbottom={setfixedbottom}></UserTypeComponent>}></Route>
                <Route exact path='/farmerhome' element={<FarmerHome setfixedbottom={setfixedbottom}></FarmerHome>}></Route>
                <Route exact path='/dealerhome' element={<DealerHome setfixedbottom={setfixedbottom}></DealerHome>}></Route>
                <Route exact path='/addproduct' element={<AddProductComponent currentAccount={currentAccount}></AddProductComponent>}></Route>
                <Route exact path='/viewproduct' element={<ViewProductComponent isgov={false} setfixedbottom={setfixedbottom}></ViewProductComponent>}></Route>
                <Route exact path='/dealerviewproduct' element={<DealerViewProduct setfixedbottom={setfixedbottom}></DealerViewProduct>}></Route>
                <Route exact path='/dealerorder' element={<DealerOrder isgov={false} setfixedbottom={setfixedbottom}></DealerOrder>}></Route>
                <Route exact path='/vieworders' element={<ViewOrdersFarmer setfixedbottom={setfixedbottom}></ViewOrdersFarmer>}></Route>
              <Route exact path='/userview' element={<UserProductView setfixedbottom={setfixedbottom}></UserProductView>}></Route> 
                <Route exact path='/adminsales' element={<Admingov setfixedbottom={setfixedbottom} isgov={true}></Admingov>}></Route> 
              </Routes>
            </div>
              <FooterComponent fixedbottom={fixedbottom}></FooterComponent>
    
          </Router>
           
          :
          <Router>
              <Navbarcomponent setCurrentAccount={setCurrentAccount} setCurrentBalanace={setCurrentBalanace} currentAccount={currentAccount} currentBalance={currentBalance}></Navbarcomponent>
              <>
                <Routes> 
                  <Route exact path='/' element={<ForceLogin></ForceLogin>}></Route>
                  <Route exact path='*' element={<ForceLogin></ForceLogin>}></Route>
                </Routes>
              </>
                <FooterComponent fixedbottom={fixedbottom}></FooterComponent>
              </Router>
            
        }
        </div>
         
  
  </>;
}

export default App;






