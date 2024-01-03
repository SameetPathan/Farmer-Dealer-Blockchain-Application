import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { ethers } from "ethers";

const firebaseConfig = {
  apiKey: "AIzaSyAiJf1SDTPpfRHr4NwckDu_1ImNpju6y14",
  authDomain: "jarvis-systems-commons.firebaseapp.com",
  projectId: "jarvis-systems-commons",
  storageBucket: "jarvis-systems-commons.appspot.com",
  messagingSenderId: "383480447879",
  appId: "1:383480447879:web:a8abf0a9d37a6ff4088922",
};

const app = initializeApp(firebaseConfig);

export const uploadImageToFirebase = async (id, imageUrl,Additionalinfo,
    farmaddress,
    priceperunit,
    harvestdate,
    type,
    quantity,
    pname) => {
  const storage = getStorage();
  const filename = id + ".jpg";
  const storageRef = ref(storage, "images/" + filename);
  const metadata = {
    contentType: "image/jpeg",
  };

  const uploadTask = uploadBytesResumable(storageRef, imageUrl, metadata);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {},
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        savedata(Additionalinfo,
            farmaddress,
            priceperunit,
            harvestdate,
            type,
            quantity,
            pname,
            downloadURL);
      });
    }
  );
};

const savedata = async (
  Additionalinfo,
  farmaddress,
  priceperunit,
  harvestdate,
  type,
  quantity,
  pname,
  imagepath
) => {
  try {
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
      const dateObject = new Date(harvestdate);
      harvestdate = dateObject.getTime();

      console.log("Initialize");
      let Txn2 = await ProductContract.addProduct(
        UserAddress,
        Additionalinfo,
        farmaddress,
        priceperunit,
        harvestdate,
        type,
        quantity,
        pname,
        imagepath
      );
      console.log("Mining... please wait");
      await Txn2.wait();

      console.log("Mined");
      alert("Product Added Successfully");
    } else {
      alert("Ethereum object does not exist");
    }
  } catch (err) {
    alert(err);
  }
};
