// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

modifier onlyOwner {
    require msg.sender == owner;
}

contract MyToken is ERC20 {
    constructor() ERC20('MyToken', 'MTK') {
        _mint(msg.sender, 1000000 * 10**18); // Mint 1,000,000 tokens and assign to the contract deployer
    }
}