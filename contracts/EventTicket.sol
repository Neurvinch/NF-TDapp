// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openZeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import "@openZeppelin/contracts/access/Ownable.sol"

contract EventTicket is ERC721URIStorage, Ownable {

    uint256 public maxSupply;
    uint256 public currentSupply = 0;


    mapping(uint256 => bool) public checkedIn;

    event TicketMinted(address indexed buyer, uint256 indexed tokenId)
   

   event TicketCheckedIn( uint256 indexed tokenId )

   constructor(
    string memory _name ,
    string memory _symbol,
    uint256 _maxSupply 
   ) ERC721(_name , 
   _symbol) Ownable (msg.sender) {
       maxSupply = _maxSupply
   }


   function mintTicket(address to , string memory tokenURI)  public onlyOwner {
      
      require(currentSupply< maxSupply, "All tickets have been sold");

      uint256 tokenId = currentSupply++;

      _safeMint(to, tokenId);

      _setTokenURI(tokenId, tokenURI)

      currentSupply++ ;
   }
}