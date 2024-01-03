import React from "react";
import { useEffect } from "react";
import { ethers } from "ethers";
import { useState } from "react";
import Loader from "./Loader";
import { uploadImageToFirebase } from "./uploaddata";


const ProductContractAddress = "0x29b48f6258CDEA3b4e094b536aB4128C48e20dbD";
const abiProductContract = [
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


function AddProductComponent(props) {
  const [account, setAccount] = useState(null);
  const [namef,setfilename]=useState("");
  const [imageUrl, setImageUrl] = useState("");


  const setacc = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_accounts" });
    setAccount(accounts[0]);
  };

  const clear = () => {
    document.getElementById("myForm").reset();
	setImageUrl("");
	setfilename("")
  };

  const handleImageChange = (event) => {
	const file = event.target.files[0];
	if (file) {
	  setImageUrl(file);
	  setfilename(file.name)
	 // alert("Image Saved")
	}
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const savedata = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const ProductContract = new ethers.Contract(
          ProductContractAddress,
          abiProductContract,
          signer
        );

        const accounts = await ethereum.request({ method: "eth_accounts" });

        const UserAddress = accounts[0];
        const pname = document.getElementById("pname").value;
        const quantity = document.getElementById("quantity").value;
        const type = document.getElementById("type").value;
        let harvestdate = document.getElementById("harvestdate").value;
        const dateObject = new Date(harvestdate);
        harvestdate = dateObject.getTime();
        const priceperunit = document.getElementById("priceperunit").value;
        const farmaddress = document.getElementById("farmaddress").value;
        const Additionalinfo = document.getElementById("Additionalinfo").value;
		let id =  getRandomInt(100,900)
		uploadImageToFirebase(id,imageUrl,Additionalinfo,
			farmaddress,
			priceperunit,
			harvestdate,
			type,
			quantity,
			pname)
        clear();

      } else {
        alert("Ethereum object does not exist");
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    setacc();
  });

  return (
    <>
      <Loader></Loader>

      <div className="container shadow-lg p-3 mb-5 bg-white rounded mt-3">
        <form className="needs-validation" id="myForm" noValidate>
          <div className="alert alert-info" role="alert">
            Product Details
          </div>

          <div className="form-row">
            <div className="col-lg-2 col-md-6 mb-3">
              <label htmlFor="validationCustom01">Product Name</label>
              <input type="text" className="form-control" id="pname" required />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-lg-2 col-md-6 mb-3">
              <label htmlFor="validationCustom02">Quantity</label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-md-3 mb-3">
              <label htmlFor="validationCustom04">Type</label>
              <select className="custom-select" id="type" required>
                <option value="Vegetable">Vegetable</option>
                <option value="Fruit">Fruit</option>
                <option value="Grain">Grain</option>
              </select>
              <div className="invalid-feedback">Please select a valid Type</div>
            </div>

            <div className="col-lg-2 col-md-6 mb-3">
              <label htmlFor="validationCustom02">Harvest Date</label>
              <input
                type="date"
                className="form-control"
                id="harvestdate"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>

            <div className="col-lg-2 col-md-6 mb-3">
              <label htmlFor="validationCustom02">Price per Unit</label>
              <input
                type="number"
                className="form-control"
                id="priceperunit"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-lg-6 form-group">
              <label htmlFor="inputAddress">Farm Address</label>
              <input
                type="text"
                className="form-control"
                id="farmaddress"
                placeholder="Farm Name, Street, Area"
              />
            </div>
            <div className="col-lg-6 form-group">
              <label htmlFor="inputAddress2">Additional Info</label>
              <input
                type="text"
                className="form-control"
                id="Additionalinfo"
                placeholder="Landmark, Region, Product info"
              />
            </div>

			<div className="col-md-6 mb-3">
             
              <div className="input-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    onChange={handleImageChange}
                    id="customFile"
                    aria-describedby="inputGroupFileAddon03"
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose file
                  </label>
                </div>
              
              </div>
              <strong className="m-1 text-success m-1">
                {namef ? `Uploaded File: ${namef}` : ""}
              </strong>
            </div>
      

          </div>
        </form>
        <button onClick={savedata} className="btn bt2 btn-success mb-5">
          Add Product
        </button>
      </div>
    </>
  );
}

export default AddProductComponent;
