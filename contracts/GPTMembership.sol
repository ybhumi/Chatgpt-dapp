// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract GPTMembership is ERC721 {
    address public owner;
    uint256 public membershipTypes;
    uint256 public totalMemberships;

    string public MY_CONTRACT = "BHUMI Y";

struct Membership{
    uint id;  //membership ID
    string name;
    uint cost;
    string date;

}

struct UserMembership{
    uint id;
    uint membershipId;
    address adressUser;
    uint cost;
    string expireDate; 
}

mapping(address => UserMembership) public userMemberships;
mapping (uint=> Membership) memberships;
mapping(uint => mapping(address => bool)) public hasBought;
mapping(uint => mapping(uint => address)) public membershipTaken;
mapping(uint => uint[]) membershipSTaken;

modifier onlyOwner {
    require(msg.sender == owner,"only owner can call this function");
     _;
     }

     constructor(
        string memory _name, string memory _symbol
     )ERC721(_name, _symbol){
        owner = msg.sender;
     }
    
    function list(string memory _name, uint _cost, string memory _date) public onlyOwner(){
        membershipTypes++;
        memberships[membershipTypes] = Membership(
            membershipTypes,
        _name,
        _cost,
        _date);
    }
 
 function mint(uint _membershipId, address _user, string memory _expiredDate) public payable{
require(_membershipId != 0);
require(_membershipId<= membershipTypes);

require(msg.value >= memberships[_membershipId].cost,"Insufficent Balance" );
totalMemberships++;
userMemberships[_user] = UserMembership(  
    totalMemberships,
    _membershipId, 
    _user,
    memberships[_membershipId].cost,
    _expiredDate
);

hasBought[_membershipId][msg.sender] = true;
membershipTaken[_membershipId][totalMemberships] = msg.sender;
membershipSTaken[_membershipId].push(totalMemberships);
 
 _safeMint(msg.sender, totalMemberships);

 }

 function getMemberships(uint _membershipId)public view returns(Membership memory){
return memberships[_membershipId];
 }
 function getMembershipsTaken(uint _membershipId) public view returns(uint[] memory){
return membershipSTaken[_membershipId];
 }
 function withdrwal() public onlyOwner(){
    (bool success,) = owner.call{value: address(this).balance}("");
    require(success);

 }
 function getUsermembership(address _address) public view returns(UserMembership memory){
    return userMemberships[_address];

 }


    
}