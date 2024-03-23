import React from 'react'
import { useEffect ,useState} from 'react';
import { ethers } from 'ethers';
import Loader from './Loader';



const DealerContractAddress = "0x09C1be1Bc686241636AdAD5bBAc6d2Bf44b01C9d";
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
	  },
	  {
		"internalType": "uint256",
		"name": "productId",
		"type": "uint256"
	  }
	],
	"name": "addProduct",
	"outputs": [],
	"stateMutability": "nonpayable",
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
		  },
		  {
			"internalType": "uint256",
			"name": "productId",
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
	  },
	  {
		"internalType": "uint256",
		"name": "productId",
		"type": "uint256"
	  }
	],
	"stateMutability": "view",
	"type": "function"
  }
];



const ProductContractAddress="0x1A53896aE0281eda0b2793fA8f321F944584D2d5";
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

var arraylist2 = [];
var whole2 = [];

var arraylist3 = [];
var whole3 = [];


function UserProductView(props) {

	const [account, setAccount] = useState(null);

	const [w2, setw2] = useState([]);
	const [w3, setw3] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [averageProducts, setaverageProducts] = useState([]);
	const [acceptedProductNames, setacceptedProductNames] = useState([]);
	const setacc=async()=>{

		const { ethereum } = window;
		const accounts = await ethereum.request({ method: 'eth_accounts' });
		setAccount(accounts[0]);
		console.log(account)
 
	  }

      const averagePricesByName = (productsList) => {
        const productsMap = new Map();
        productsList.forEach((product) => {
          const name = product[7]; // Assuming product name is at index 8
          const price = parseFloat(product[3]); // Assuming price is at index 4
          const imagepath = product[11];
          const Type = product[5];
    
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
		setaverageProducts(averagedProducts)
		setFilteredProducts(averagedProducts)
        return averagedProducts;
      };



	  async function getproducts() {
		try {

		
		  const { ethereum } = window;
	
		  if (ethereum) {
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
	
			console.log(2);
			const ProductContract = new ethers.Contract(
				DealerContractAddress,
                abiDealerContract,
			  signer
			);
			arraylist3 = await ProductContract.getAllProducts();
			console.log(arraylist3);
			for (var i = 0; i < arraylist3.length; i++) {
			  whole3[i] = arraylist3[i];
			}
			setw3(whole3);
			console.log("### Data accepoted:",whole3)
			const acceptedProductNames = whole3
  .filter(record => String(record[9]) ==="1") // Filter accepted products
  .map(record => String(record[5])); // Map to get only the product names

console.log("##acceptedProductNames:",acceptedProductNames);
setacceptedProductNames(acceptedProductNames);
		  }
		} catch (error) {
		  console.error(error);
		}
	  }

      

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
			averagePricesByName(whole2);
			console.log(whole2)
		  }
		} catch (error) {
		  console.error(error);
		}
	  }
  
	  useEffect(() => {
        props.setfixedbottom(false);
		getAllproducts();
		getproducts();
		setacc();
	},[]);


	  const [selecteddata, setSelecteddata] = useState('');
	  
	
	  // ... (other functions)
	

	  const handledataChange = (event) => {
		setSelecteddata(event.target.value);
		updateFilteredProducts(event.target.value);
	  };
	
	
	  const updateFilteredProducts = (data) => {
		const updatedFilteredProducts = averageProducts.filter((record) => {
		  const recordData = String(record).toLowerCase();
		  const dataCondition = data === '' || recordData.includes(data.toLowerCase());
		  return dataCondition;
		});
		setFilteredProducts(updatedFilteredProducts);
	  };


  return (
	<div>
	<Loader></Loader>
	<div class="alert alert-dark" role="alert">
    <p><b>Keep track of products</b></p>
	<hr />
    <p>Monitoring the products available in the market is essential for businesses to stay competitive and informed about consumer preferences and market trends.</p>
    <hr />
    <ol>
        <li><b>What products are being sold in the market?</b></li>
        <p>Identifying the products being sold in the market provides valuable insights into consumer demand and market trends. This information can help businesses tailor their offerings to meet customer needs more effectively.</p>
		<hr />
        <li><b>Checkout at what average price the product must be available in the market.</b></li>
        <p>Determining the average price of a product in the market is crucial for pricing strategies and competitive analysis. It allows businesses to assess their pricing strategy's effectiveness and make adjustments to remain competitive.</p>
    </ol>
</div>


	<div className="container-fluid shadow-lg p-3 mb-5 bg-white rounded mt-3">


	<div class="form-group" style={{width:"40%"}}>
	<label className='mr-3'>Filter Product here</label>
	<input type="text" value={selecteddata} onChange={handledataChange}  id="text" aria-describedby="emailHelp"/>
	<small id="text" class="form-text text-muted">Please enter product name to filter out the product.</small>
  </div>

	


  {filteredProducts.map((record, index) => {
	// Check if the product name is present in the data array
	if (acceptedProductNames.includes(record.name)) {
	  return (
		<div className="card mb-5" key={index}>
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
	  );
	} else {
	  return null; // Return null if product name is not present in data
	}
  })}
  

</div>




	</div>
  
  )
}

export default UserProductView