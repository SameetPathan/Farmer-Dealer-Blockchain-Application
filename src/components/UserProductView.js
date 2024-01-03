import React from 'react'
import { useEffect ,useState} from 'react';
import { ethers } from 'ethers';
import Loader from './Loader';



const ProductContractAddress="0x29b48f6258CDEA3b4e094b536aB4128C48e20dbD";
const abiProductContract=[
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "UserAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "AdditionalInfo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "FarmAddress",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "PricePerUnit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "HarvestDate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Quantity",
				"type": "uint256"
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
						"name": "ProductId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "UserAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "AdditionalInfo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "FarmAddress",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "PricePerUnit",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "HarvestDate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "Type",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "Quantity",
						"type": "uint256"
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
					}
				],
				"internalType": "struct ProductContract.ProductData[]",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ProductId",
				"type": "uint256"
			}
		],
		"name": "getProduct",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
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
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
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
				"name": "ProductId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "UserAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "AdditionalInfo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "FarmAddress",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "PricePerUnit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "HarvestDate",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Quantity",
				"type": "uint256"
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
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ProductId",
				"type": "uint256"
			}
		],
		"name": "updateProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

var arraylist2 = [];
var whole2 = [];

function UserProductView(props) {

	const [account, setAccount] = useState(null);

	const [w2, setw2] = useState([]);

	const setacc=async()=>{

		const { ethereum } = window;
		const accounts = await ethereum.request({ method: 'eth_accounts' });
		setAccount(accounts[0]);
		console.log(account)
 
	  }

      const averagePricesByName = (productsList) => {
        const productsMap = new Map();
        productsList.forEach((product) => {
          const name = product[8]; // Assuming product name is at index 8
          const price = parseFloat(product[4]); // Assuming price is at index 4
          const imagepath = product[9];
          const Type = product[6];
    
          if (productsMap.has(name)) {
            const { totalPrice, count } = productsMap.get(name);
            productsMap.set(name, { totalPrice: totalPrice + price, count: count + 1 ,imagepath,Type});
          } else {
            productsMap.set(name, { totalPrice: price, count: 1,imagepath,Type });
          }
        });
    
        const averagedProducts = [];
        productsMap.forEach((value, key) => {
          const { totalPrice, count,imagepath,Type } = value;
          const averagePrice = totalPrice / count;
          averagedProducts.push({ name: key, averagePrice,imagepath,Type });
        });
        return averagedProducts;
      };

      const averageProducts = averagePricesByName(w2);

	async function getAllproducts() {
		try {
		  const { ethereum } = window;
	
		  if (ethereum) {
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
	
			console.log(2);
			const ProductContract = new ethers.Contract(
				ProductContractAddress,
			  abiProductContract,
			  signer
			);
			arraylist2 = await ProductContract.getAllProducts();
			console.log(arraylist2);
			for (var i = 0; i < arraylist2.length; i++) {
			  whole2[i] = arraylist2[i];
			}
			setw2(whole2);
			console.log(whole2)
		  }
		} catch (error) {
		  console.error(error);
		}
	  }
  
	  useEffect(() => {
        props.setfixedbottom(false);
		getAllproducts();
		setacc();
      });
  
  return (
	<div>
	<Loader></Loader>
	<div class="alert alert-dark" role="alert">
 <b>Keep a track on products ,</b> <hr></hr> 
 1. What products are been sold in market ? <hr></hr>
 2. Checkout at what Avegare price the product must be available in market.<hr></hr>
</div>

	<div className="container-fluid shadow-lg p-3 mb-5 bg-white rounded mt-3">
  {averageProducts.map((record, index) => (
    <div className="card mb-5">
      <div className="card-header bg-dark text-white">
        Product Information
      </div>
      <div className="card-body d-flex">
        <div className="col-sm-8">
		<dl className="row">
			<dt className="col-sm-3">Product Name</dt>
			<dd className="col-sm-9" id="pname">{record.name}</dd>
  
			<dt className="col-sm-3">Type</dt>
			<dd className="col-sm-9" id="type">{record.Type}</dd>

            <dt className="col-sm-3">Average Price</dt>
            <dd className="col-sm-9" id="averageprice">{record.averagePrice}</dd>
  

		  </dl>
        </div>
        <div className="col-sm-4">
          <img
            src={record.imagepath}
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
  
  )
}

export default UserProductView