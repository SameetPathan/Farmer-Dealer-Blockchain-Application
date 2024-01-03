// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract ProductContract {

    struct ProductData {
        uint256 ProductId;
        address UserAddress;
        string AdditionalInfo;
        string FarmAddress;
        uint PricePerUnit;
        uint HarvestDate;
        string Type;
        uint Quantity;
        string ProductName;
    }

    ProductData[] public products;
    uint256 public nextProductId = 1;

    function addProduct(
        address UserAddress,
        string memory AdditionalInfo,
        string memory FarmAddress,
        uint PricePerUnit,
        uint HarvestDate,
        string memory Type,
        uint Quantity,
        string memory ProductName
    ) public {
        ProductData memory newProduct = ProductData(
            nextProductId,
            UserAddress,
            AdditionalInfo,
            FarmAddress,
            PricePerUnit,
            HarvestDate,
            Type,
            Quantity,
            ProductName
        );
        products.push(newProduct);
        nextProductId++;
    }

    function updateProduct(uint256 ProductId) public {
        for (uint i = 0; i < products.length; i++) {
            if (products[i].ProductId == ProductId) {
                // Update logic remains the same
                products[i].AdditionalInfo = products[i].AdditionalInfo;
                products[i].FarmAddress = products[i].FarmAddress;
                products[i].PricePerUnit = products[i].PricePerUnit;
                products[i].HarvestDate = products[i].HarvestDate;
                products[i].Type = products[i].Type;
                products[i].Quantity = products[i].Quantity;
                products[i].ProductName = products[i].ProductName;
                return;
            }
        }
    }

    function getProduct(uint256 ProductId) public view returns (
        address,
        string memory,
        string memory,
        uint,
        uint,
        string memory,
        uint,
        string memory
    ) {
        for (uint i = 0; i < products.length; i++) {
            if (products[i].ProductId == ProductId) {
                return (
                    products[i].UserAddress,
                    products[i].AdditionalInfo,
                    products[i].FarmAddress,
                    products[i].PricePerUnit,
                    products[i].HarvestDate,
                    products[i].Type,
                    products[i].Quantity,
                    products[i].ProductName
                );
            }
        }

        return (
            address(0),
            "Not Found",
            "Not Found",
            0,
            0,
            "Not Found",
            0,
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
