import { useEffect,React } from 'react';
import { ethers } from 'ethers';
import Loader from './Loader';
import { FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const BalanceContractABI=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const BalanceContractAddress="0x97BcA06C815AE57beeeEe96953c6944ea4EDd356";


function Logincomponent(props) {

  const logout=async()=>{
		try {
			props.setCurrentAccount("");
      props.setCurrentBalanace("");
      props.setfixedbottom(true);

      
		  } catch (err) {
			console.log(err);
		  }
	  }

    const checkWalletIsConnected = async () => {
        const { ethereum } = window;
    
        if (!ethereum) {
          console.log("Make sure you have Metamask installed!");
          return;
        } else {
          //console.log("Wallet exists! We're ready to go!")
        }
    
        const accounts = await ethereum.request({ method: 'eth_accounts' });
    
        if (accounts.length !== 0) {
          const account = accounts[0];
          //console.log("Found an authorized account: ", account);

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const BalanceContract= new ethers.Contract(BalanceContractAddress, BalanceContractABI, signer);
          const balance = await BalanceContract.getBalance(account);
          props.setCurrentBalanace(String(balance));


          props.setCurrentAccount(account);
         // console.log("logout IN");
        } else {
          console.log("No authorized account found");
        }
      }

      const connectWalletHandler = async () => {
        const { ethereum } = window;
    
        if (!ethereum) {
          alert("Please install Metamask!");
        }
    
        try {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

         // const name = await ethereum.request({ method: 'eth_getEncryptionPublicKey', params: [accounts[0]] });
          
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const BalanceContract= new ethers.Contract(BalanceContractAddress, BalanceContractABI, signer);
          const balance = await BalanceContract.getBalance(accounts[0]);
          props.setCurrentBalanace(String(balance));

          //console.log("Found an account! Address: ", accounts[0]);
          //console.log("logout IN");
          props.setCurrentAccount(accounts[0]);
          
          
        } catch (err) {
          console.log(err)
        }
      }

 useEffect(() => {
      checkWalletIsConnected();
    }, [])
  return (
    <>
      <Loader />
      {props.currentAccount ? (
        <div className="form-inline">
          <Link to="/">
            <button className="btn btn-danger my-2 my-sm-0 ml-2" onClick={logout}>
              <FaSignOutAlt /> Logout
            </button>
          </Link>
        </div>
      ) : (
        <div className="form-inline">
          <button className="btn btn-success my-2 my-sm-0" onClick={connectWalletHandler}>
            <FaSignInAlt /> Login
          </button>
        </div>
      )}
    </>
  )
}

export default Logincomponent