// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract DealerBuyContract {

    struct DealerData {
        uint buyid;
        address UserAddress;
        string name;
        string dealeraddress; 
        string phoneNumber;
        string ProductName;
        string imagepath;
        uint Quantity;
        uint negotiatedPrice;
        uint acceptedStatus;
    }

    DealerData[] public products;
    uint256 public nextProductId = 1;

    function addProduct(
        address UserAddress,
        string memory name,
        string memory dealeraddress, 
        string memory phoneNumber,
        string memory ProductName,
        string memory imagepath,
        uint Quantity,
        uint negotiatedPrice,
        uint acceptedStatus
    ) public {
        DealerData memory newProduct = DealerData(
            nextProductId,
            UserAddress,
            name,
            dealeraddress, 
            phoneNumber,
             ProductName,
            imagepath,
            Quantity,
            negotiatedPrice,
            acceptedStatus 
        );
        products.push(newProduct);
        nextProductId++;
    }

     function updateDriver(uint buyid, uint status) public {
        for (uint i = 0; i < products.length; i++) {
            if (products[i].buyid == buyid) {
                products[i].acceptedStatus = status;
                return;
            }
        }
    }


    function getAllProducts() public view returns (DealerData[] memory) {
        return products;
    }

    function getNumberOfRecords() public view returns (uint) {
        return products.length;
    }
}
