// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract ProductContract {

    struct ProductData {
        uint256 ProductId;
        address UserAddress;
        string AdditionalInfo;
        uint PricePerUnit;
        string HarvestDate;
        string Type;
        uint Quantity;
        string ProductName;
        string FarmerName;
        string FarmerPhoneNumber;
        string FarmerAddress;
        string ImageUrl; 
    }

    ProductData[] public products;
    uint256 public nextProductId = 1;

    function addProduct(
        address UserAddress,
        string memory AdditionalInfo,
        uint PricePerUnit,
        string memory HarvestDate,
        string memory Type,
        uint Quantity,
        string memory ProductName,
        string memory FarmerName,
        string memory FarmerPhoneNumber,
        string memory FarmerAddress,
          string memory ImageUrl 
    ) public {
        ProductData memory newProduct = ProductData(
            nextProductId,
            UserAddress,
            AdditionalInfo,
            PricePerUnit,
            HarvestDate,
            Type,
            Quantity,
            ProductName,
            FarmerName,
            FarmerPhoneNumber,
            FarmerAddress,
            ImageUrl  
        );
        products.push(newProduct);
        nextProductId++;
    }

    

    function getProduct(uint256 ProductId) public view returns (
        address,
        string memory,
        uint,
        string memory,
        string memory,
        uint,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory
    ) {
        for (uint i = 0; i < products.length; i++) {
            if (products[i].ProductId == ProductId) {
                return (
                    products[i].UserAddress,
                    products[i].AdditionalInfo,
                    products[i].PricePerUnit,
                    products[i].HarvestDate,
                    products[i].Type,
                    products[i].Quantity,
                    products[i].ProductName,
                    products[i].FarmerName,
                    products[i].FarmerPhoneNumber,
                    products[i].FarmerAddress,
                    products[i].ImageUrl
                );
            }
        }

        return (
            address(0),
            "Not Found",
            0,
            "Not Found",
            "Not Found",
            0,
            "Not Found",
            "Not Found",
            "Not Found",
            "Not Found",
            "Not Found"
        );
    }

    function getAllProducts() public view returns (ProductData[] memory) {
        return products;
    }

    function getNumberOfRecords() public view returns (uint) {
        return products.length;
    }
}
