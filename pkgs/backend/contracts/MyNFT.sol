// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, ERC721Burnable {
  uint256 private _nextTokenId;

  constructor() ERC721("MyNFT", "MNFT") {}

  function safeMint(address to) public {
    uint256 tokenId = _nextTokenId++;
    _safeMint(to, tokenId);
  }
}
