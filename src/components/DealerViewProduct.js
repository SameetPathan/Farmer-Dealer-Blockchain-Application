import React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Loader from "./Loader";

const ProductContractAddress = "0x29b48f6258CDEA3b4e094b536aB4128C48e20dbD";
const abiProductContract = [
  {
    inputs: [
      {
        internalType: "address",
        name: "UserAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "AdditionalInfo",
        type: "string",
      },
      {
        internalType: "string",
        name: "FarmAddress",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "PricePerUnit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "HarvestDate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "Type",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "Quantity",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "ProductName",
        type: "string",
      },
      {
        internalType: "string",
        name: "imagepath",
        type: "string",
      },
    ],
    name: "addProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllProducts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ProductId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "UserAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "AdditionalInfo",
            type: "string",
          },
          {
            internalType: "string",
            name: "FarmAddress",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "PricePerUnit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "HarvestDate",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "Type",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "Quantity",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "ProductName",
            type: "string",
          },
          {
            internalType: "string",
            name: "imagepath",
            type: "string",
          },
        ],
        internalType: "struct ProductContract.ProductData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfRecords",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ProductId",
        type: "uint256",
      },
    ],
    name: "getProduct",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextProductId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "products",
    outputs: [
      {
        internalType: "uint256",
        name: "ProductId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "UserAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "AdditionalInfo",
        type: "string",
      },
      {
        internalType: "string",
        name: "FarmAddress",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "PricePerUnit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "HarvestDate",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "Type",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "Quantity",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "ProductName",
        type: "string",
      },
      {
        internalType: "string",
        name: "imagepath",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ProductId",
        type: "uint256",
      },
    ],
    name: "updateProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];


var arraylist2 = [];
var whole2 = [];

function DealerViewProduct(props) {
  const [account, setAccount] = useState(null);

  const [w2, setw2] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductDeatils, setselectedProductDeatils] = useState({
    ProductName: "",
    imagepath: "",
  });
  const [buyerDetails, setBuyerDetails] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    negotiatedPrice: "",
    quantity: "",
  });

  const handleChange2 = (name, imagepath) => {
    setselectedProductDeatils({
      ProductName: name,
      imagepath: imagepath,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyerDetails({
      ...buyerDetails,
      [name]: value,
    });
  };

  const handleChangeClose = (e) => {
    setSelectedProduct(null);
  };

  const handleBuyClick = (productId) => {
    setSelectedProduct(productId);
  };

  const handleBuyProduct = async () => {
    console.log(`Buying product ${selectedProduct}...`, buyerDetails);
    console.log("Dealer Deales", selectedProductDeatils);
    try {

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
       


          let Txn2 = await DealerContract.addProduct(UserAddress,buyerDetails.name,buyerDetails.address,buyerDetails.phoneNumber,selectedProductDeatils.ProductName,selectedProductDeatils.imagepath,buyerDetails.quantity,buyerDetails.negotiatedPrice,0);
          console.log("Mining... please wait");
          await Txn2.wait();
      
          console.log("Mined");
          alert("Order Placed Successfully");
        } else {
          alert("Ethereum object does not exist");
        }
      } catch (err) {
        alert(err);
      }
    setSelectedProduct(null);
    setselectedProductDeatils(null);
    setBuyerDetails(null)
  };

  const setacc = async () => {
    const { ethereum } = window;
    const accounts = await ethereum.request({ method: "eth_accounts" });
    setAccount(accounts[0]);
    //console.log(account)
  };

  async function getAllproducts() {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        //console.log(2);
        const ProductContract = new ethers.Contract(
          ProductContractAddress,
          abiProductContract,
          signer
        );
        arraylist2 = await ProductContract.getAllProducts();
        //console.log(arraylist2);
        for (var i = 0; i < arraylist2.length; i++) {
          whole2[i] = arraylist2[i];
        }
        setw2(whole2);
        //console.log(whole2)
      }
    } catch (error) {
      //console.error(error);
    }
  }

  useEffect(() => {
    props.setfixedbottom(false);
    getAllproducts();
    setacc();
  });

  const [selectedYear, setSelectedYear] = useState('');

  const handleYearChange = (event) => {
		setSelectedYear(event.target.value);
	  };
	
	  const filteredProducts = w2.filter((record) => {
		const harvestDate = new Date(Number(record[5]));
		return selectedYear === '' || harvestDate.getFullYear().toString() === selectedYear;
	  });

  return (
    <div>
      <Loader></Loader>

      <div class="alert alert-dark" role="alert">
  Dealer Products View Dashboard (Buy at Negotiated Price)
</div>

      <div className="container-fluid shadow-lg p-3 mb-5 bg-white rounded mt-3">

      <div className='container m-4'>
          <label className='mr-3' htmlFor="yearFilter">Select Year: </label>
          <select id="yearFilter" value={selectedYear} onChange={handleYearChange}>
            <option value="">All Years</option>
           
            <option value="2020">2020</option>
            <option value="2021">2021</option>
			<option value="2022">2022</option>
			<option value="2023">2023</option>
			<option value="2024">2024</option>
			<option value="2025">2025</option>
			<option value="2026">2026</option>
			<option value="2027">2027</option>
			<option value="2028">2028</option>
			<option value="2029">2029</option>
			<option value="2030">2030</option>
            
          </select>
        </div>


        {filteredProducts.map((record, index) => (
          <div className="card mb-5">
            <div className="card-header bg-dark text-white">
              Product Information
            </div>
            <div className="card-body d-flex">
              <div className="col-sm-8">
                <dl className="row">
                  <dt className="col-sm-3">Product Name</dt>
                  <dd className="col-sm-9" id="pname">
                    {String(record[8])}
                  </dd>

                  <dt className="col-sm-3">Quantity</dt>
                  <dd className="col-sm-9" id="quantity">
                    {String(record[7])}
                  </dd>

                  <dt className="col-sm-3">Type</dt>
                  <dd className="col-sm-9" id="type">
                    {String(record[6])}
                  </dd>

                  <dt className="col-sm-3">Harvest Date</dt>
                  <dd className="col-sm-9" id="harvestdate">
                    {new Date(Number(record[5])).toLocaleDateString()}
                  </dd>

                  <dt className="col-sm-3">Price per Unit</dt>
                  <dd className="col-sm-9" id="priceperunit">
                    {String(record[4])}
                  </dd>

                  <dt className="col-sm-3">Farm Address</dt>
                  <dd className="col-sm-9" id="farmaddress">
                    {String(record[3])}
                  </dd>

                  <dt className="col-sm-3">Additional Info</dt>
                  <dd className="col-sm-9" id="AdditionalInfo">
                    {String(record[2])}
                  </dd>
                </dl>

                <div className="card-footer">
                {selectedProduct != String(record[0]) && (
                  <button
                    className="btn btn-primary ml-2"
                    onClick={() => {
                      handleBuyClick(String(record[0]));
                      handleChange2(String(record[8]), String(record[9]));
                    }}
                  >
                    Buy
                  </button>
                )}
                  {selectedProduct === String(record[0]) && (
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => handleChangeClose()}
                    >
                      Close
                    </button>
                  )}
                </div>

                {selectedProduct === String(record[0]) && (
                  <div className="card-footer">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleBuyProduct();
                      }}
                    >
                      <h4>Dealer Details</h4>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={buyerDetails.name}
                          onChange={handleChange}
                          required
                        />
                        {/* Validation for name */}
                        {buyerDetails.name.length === 0 && (
                          <p className="error">Name is required.</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          value={buyerDetails.address}
                          onChange={handleChange}
                          required
                        />
                        {/* Validation for address */}
                        {buyerDetails.address.length === 0 && (
                          <p className="error">Address is required.</p>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={buyerDetails.phone}
                          onChange={handleChange}
                          pattern="[0-9]{10}"
                          minLength={10}
                          maxLength={10}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="negotiatedPrice">
                          Negotiated Price
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="negotiatedPrice"
                          name="negotiatedPrice"
                          value={buyerDetails.negotiatedPrice}
                          onChange={handleChange}
                          required
                        />
                        {/* Validation for negotiated price */}
                        {buyerDetails.negotiatedPrice <= 0 && (
                          <p className="error">
                            Negotiated price must be greater than 0.
                          </p>
                        )}
                      </div>

                      <div className="form-group">
                        <label htmlFor="quantity">Quantity Want</label>
                        <input
                          type="number"
                          className="form-control"
                          id="quantity"
                          name="quantity"
                          value={buyerDetails.quantity}
                          onChange={handleChange}
                          required
                        />
                        {buyerDetails.quantity <= 0 && (
                          <p className="error">
                            Quantity must be greater than 0.
                          </p>
                        )}
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Place Order
                      </button>
                    </form>
                  </div>
                )}
              </div>
              <div className="col-sm-4">
                <img
                  src={String(record[9])}
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

export default DealerViewProduct;
