// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ClearFlowChain {
    enum Status { Created, InTransit, Delivered }

    struct Product {
        string name;
        string description;
        uint256 timestamp;
        address vendor;
        Status status;
    }

    uint256 public productCount;
    mapping(uint256 => Product) public products;

    event ProductCreated(uint256 indexed productId, string name, address indexed vendor);
    event ProductStatusUpdated(uint256 indexed productId, Status status);

    function createProduct(string memory name, string memory description) public {
        productCount++;
        products[productCount] = Product(name, description, block.timestamp, msg.sender, Status.Created);
        emit ProductCreated(productCount, name, msg.sender);
    }

    function updateStatus(uint256 productId, Status newStatus) public {
        Product storage product = products[productId];
        require(msg.sender == product.vendor, "Only vendor can update");
        product.status = newStatus;
        emit ProductStatusUpdated(productId, newStatus);
    }

    function getProduct(uint256 productId) public view returns (Product memory) {
        return products[productId];
    }
}
