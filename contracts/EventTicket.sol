// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openZeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import "@openZeppelin/contracts/access/Ownable.sol"

contract EventTicket is ERC721URIStorage, Ownable {

    uint256 public maxSupply;

}