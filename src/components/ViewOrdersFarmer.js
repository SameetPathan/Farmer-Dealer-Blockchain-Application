import React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Loader from "./Loader";


const DealerContractAddress = "0xA1d2c6a9839963eCfaeb90D5f2865C20B086Bee1";
const abiDealerContract = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "UserAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dealeraddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ProductName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imagepath",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "negotiatedPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "acceptedStatus",
				"type": "uint256"
			}
		],
		"name": "addProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllProducts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "buyid",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "UserAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dealeraddress",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "phoneNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ProductName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "imagepath",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "Quantity",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "negotiatedPrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "acceptedStatus",
						"type": "uint256"
					}
				],
				"internalType": "struct DealerBuyContract.DealerData[]",
				"name": "",
				"type": "tuple[]"
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
		"inputs": [],
		"name": "nextProductId",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "products",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "buyid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "UserAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dealeraddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ProductName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imagepath",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "negotiatedPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "acceptedStatus",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "buyid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "status",
				"type": "uint256"
			}
		],
		"name": "updateDriver",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

var arraylist2 = [];
var whole2 = [];

function ViewOrdersFarmer(props) {
 
  const [w2, setw2] = useState([]);

  const handleAcceptProduct = async (id,status) => {
    try {

        const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const DealerContract = new ethers.Contract(
            DealerContractAddress,
            abiDealerContract,
            signer
          );
          const accounts = await ethereum.request({ method: "eth_accounts" });
          const UserAddress = accounts[0];
          console.log("Initialize");
          let Txn2 = await DealerContract.updateDriver(id,status);
          console.log("Mining... please wait");
          await Txn2.wait();
      
          console.log("Mined");
          alert("Order Updated Successfully");
        } else {
          alert("Ethereum object does not exist");
        }
      } catch (err) {
        alert(err);
    }
  };

  async function getAllproducts() {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const ProductContract = new ethers.Contract(
            DealerContractAddress,
            abiDealerContract,
          signer
        );
        arraylist2 = await ProductContract.getAllProducts();
        for (var i = 0; i < arraylist2.length; i++) {
          whole2[i] = arraylist2[i];
        }
        setw2(whole2);
      }
    } catch (error) {
    }
  }

  useEffect(() => {
    props.setfixedbottom(false);
    getAllproducts();
  });

  return (
    <div>
      <Loader></Loader>

	  <div class="alert alert-dark" role="alert">
  Farmer Order Dashboard  (Accept / Reject)
</div>

      <div className="container-fluid shadow-lg p-3 mb-5 bg-white rounded mt-3">
        {w2.map((record, index) => (
          <div className="card mb-5">
            <div className="card-header bg-dark text-white">
              Product Information
            </div>
            <div className="card-body d-flex">
              <div className="col-sm-8">
              <dl className="row">
			<dt className="col-sm-3">Dealer Name</dt>
			<dd className="col-sm-9" id="pname">{String(record[2])}</dd>
  
			<dt className="col-sm-3">Dealer Address</dt>
			<dd className="col-sm-9" id="quantity">{String(record[3])}</dd>
  
			<dt className="col-sm-3">Phone Number</dt>
			<dd className="col-sm-9" id="type">{String(record[4])}</dd>
  
			<dt className="col-sm-3">Product Name</dt>
			<dd className="col-sm-9" id="harvestdate">
			{String(record[5])}
			</dd>
  
			<dt className="col-sm-3">Quantity Needed</dt>
			<dd className="col-sm-9" id="priceperunit">{String(record[7])}</dd>
  
			<dt className="col-sm-3">Negotiated Price</dt>
			<dd className="col-sm-9" id="farmaddress">{String(record[8])}</dd>

			<dt className="col-sm-3">Accepted Status</dt>
			<dd className="col-sm-9" id="AdditionalInfo">
            
            {String(record[9]) =="0" && (<span class="badge badge-primary">In process</span>)}
            {String(record[9]) =="1" && (<span class="badge badge-success">Accepted</span>)}
            {String(record[9]) =="2" && (<span class="badge badge-danger">Rejected</span>)}
            </dd>
		  </dl>

                <div className="card-footer">

				{String(record[9]) =="0" && (
              <>
                  <button
                    className="btn btn-primary ml-2"
                    onClick={() => {
                        handleAcceptProduct(String(record[0]),1);
                    }}
                  >
                   Accept
                  </button>
             
               
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() =>  handleAcceptProduct(String(record[0]),2)}
                    >
                      Rejected
                    </button>
					</>
					)}
                  
                </div>

              </div>
              <div className="col-sm-4">
                <img
                  src={String(record[6])}
                  alt="Product Image"
                  className="img-fluid"
                  height={200}
                  width={200}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewOrdersFarmer;
