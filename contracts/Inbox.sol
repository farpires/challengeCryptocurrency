// SPDX-License-Identifier: MIT
pragma solidity >=0.4.24;

contract UsersContract {
    struct User {
        string name;
        string surName;
    }

    mapping(address => User) private users;
    mapping(address => bool) private joinedUsers;

    address[] total;

    function userJoined(address addr) private view returns (bool) {
        return joinedUsers[addr];
    }

    function totalUsers() public view returns (uint256) {
        return total.length;
    }
}
