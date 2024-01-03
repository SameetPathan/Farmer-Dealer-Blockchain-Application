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

const FarmerContractAddress="0xA08169A7267f47422e9aFd5deD66B2774342e252";
const abiFarmerContract=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Farmerid",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "HospitalName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "FarmerName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Speciality",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "PhoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "CertificateNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "HospitalID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "addFarmer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllFarmer",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "Farmerid",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "HospitalName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "FarmerName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Address",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "Speciality",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "PhoneNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "CertificateNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "HospitalID",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "status",
						"type": "uint256"
					}
				],
				"internalType": "struct FarmerContract.FarmerData[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Farmerid",
				"type": "address"
			}
		],
		"name": "getFarmer",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getNumberOfRecords",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Farmerid",
				"type": "address"
			}
		],
		"name": "getStatus",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "Farmerid",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "updateFarmer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];


function DealerHome(props) {

  const getstatusdoc = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const account = accounts[0];

    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const FarmerContract= new ethers.Contract(FarmerContractAddress,abiFarmerContract, signer);
        let Txn = await FarmerContract.getStatus(account);
        let flag=String(Txn);
        
        console.log(String(Txn))
        if(flag==="0"){
          props.setDocStatus(true);
        }else{
          props.setDocStatus(false);
        }
        
      } else {
        console.log("Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getstatusdoc();
	props.setfixedbottom(true);
  }, [])

  return (
    <>
<Loader></Loader>

<div class="alert alert-dark" role="alert">
  Dealer Home Dashboard
</div>

<div className="d-lg-flex align-items-lg-center">

  <div className="form-bg">
        <div className="form-container ">
		
		<img
            src={process.env.PUBLIC_URL + "/orders.png"}
            height="180px"
            className="card-img-top shadow rounded mb-3"
            alt="..."
                />
         
            <form className="form-horizontal">
                <Link to="/dealerorder" className="btn btn-default">
               Orders
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
                <Link to="/dealerviewproduct" className="btn btn-default">
                View Products
                </Link>

            </form>
            </div>
      </div>
</div>




    </>
  )
}

export default DealerHome