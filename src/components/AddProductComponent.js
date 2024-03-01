import React, { useState,useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ethers } from "ethers";
import Loader from "./Loader";
import { app } from '../firebaseConfig';

const ContractAddress = "0x1A53896aE0281eda0b2793fA8f321F944584D2d5";
const abi = [
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
				"internalType": "uint256",
				"name": "PricePerUnit",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "HarvestDate",
				"type": "string"
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
				"name": "FarmerName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "FarmerPhoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "FarmerAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ImageUrl",
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
						"internalType": "uint256",
						"name": "PricePerUnit",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "HarvestDate",
						"type": "string"
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
						"name": "FarmerName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "FarmerPhoneNumber",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "FarmerAddress",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ImageUrl",
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
				"internalType": "uint256",
				"name": "PricePerUnit",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "HarvestDate",
				"type": "string"
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
				"name": "FarmerName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "FarmerPhoneNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "FarmerAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ImageUrl",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const AddProductForm = (props) => {
  const [formValues, setFormValues] = useState({
    UserAddress: '',
    AdditionalInfo: '',
    PricePerUnit: 0,
    HarvestDate: 0,
    Type: '',
    Quantity: 0,
    ProductName: '',
    FarmerName: '',
    FarmerPhoneNumber: '',
    FarmerAddress: '',
    Image: null,
  });
  const [account, setAccount] = useState(null);

  const uploadImageToFirebase = async (image) => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(storageRef, image);
    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setFormValues({ ...formValues, Image: image });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
	

    // Assuming you have a function to upload image to Firebase and get URL
    const imageUrl = await uploadImageToFirebase(formValues.Image);

	const { ethereum } = window;
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    setAccount(accounts[0]);

    try {
		const { ethereum } = window;
		if (ethereum) {
		  const provider = new ethers.providers.Web3Provider(ethereum);
		  const signer = provider.getSigner();
		  const ProductContract= new ethers.Contract(ContractAddress, abi, signer);
  
		  let Txn2 = await ProductContract.addProduct(props.currentAccount,formValues.AdditionalInfo,formValues.PricePerUnit,String(formValues.HarvestDate),formValues.Type,formValues.Quantity
			  ,formValues.ProductName,formValues.FarmerName,formValues.FarmerPhoneNumber,formValues.FarmerAddress,imageUrl);
		  console.log("Mining... please wait");
		  await Txn2.wait();
		  console.log(`Mined`);
		  
		} else {
		  console.log(`Error`);
		}
  
	  } catch (err) {
		console.log(err);
  
	  }

    // Reset form
    // setFormValues({
    //   UserAddress: '',
    //   AdditionalInfo: '',
    //   PricePerUnit: 0,
    //   HarvestDate: 0,
    //   Type: '',
    //   Quantity: 0,
    //   ProductName: '',
    //   FarmerName: '',
    //   FarmerPhoneNumber: '',
    //   FarmerAddress: '',
    //   Image: null,
    // });
  };

  const setacc=async()=>{

   
    //console.log(account)
    //account = accounts[0];
 
  }



  useEffect(() => {
	setacc();
  });


  return (
	<>
	<div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3">
	<div className="alert alert-info" role="alert">
	Product Details
  </div>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>User:</label>
        <input type="text" className="form-control" disabled name="UserAddress" value={props.currentAccount} onChange={handleChange} />
      </div>

	  <div className="form-group">
	  <label>Product Name:</label>
	  <input type="text" className="form-control" name="ProductName" value={formValues.ProductName} onChange={handleChange} />
	</div>

      <div className="form-group">
        <label>Additional Info:</label>
        <input type="text" className="form-control" name="AdditionalInfo" value={formValues.AdditionalInfo} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Price Per Unit:</label>
        <input type="number" className="form-control" name="PricePerUnit" value={formValues.PricePerUnit} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Harvest Date:</label>
        <input type="date" className="form-control" name="HarvestDate" value={formValues.HarvestDate} onChange={handleChange} />
      </div>


	  <div className="form-group">
              <label htmlFor="validationCustom04">Type</label>
              <select className="custom-select" name="Type" id="type" value={formValues.Type} onChange={handleChange} required>
                <option value="Vegetable">Vegetable</option>
                <option value="Fruit">Fruit</option>
                <option value="Grain">Grain</option>
              </select>
        
            </div>

    

      <div className="form-group">
        <label>Quantity:</label>
        <input type="number" className="form-control" name="Quantity" value={formValues.Quantity} onChange={handleChange} />
      </div>

    

      <div className="form-group">
        <label>Farmer Name:</label>
        <input type="text" className="form-control" name="FarmerName" value={formValues.FarmerName} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Farmer Phone Number:</label>
        <input type="text" className="form-control" name="FarmerPhoneNumber" value={formValues.FarmerPhoneNumber} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Farmer Address:</label>
        <input type="text" className="form-control" name="FarmerAddress" value={formValues.FarmerAddress} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="file" className="form-control-file" onChange={handleImageChange} />
      </div>

      <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
	</div>
	</>
  );
};

export default AddProductForm;
