// contracts/Reward.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Reward {
    event RewardSent(address indexed to, uint256 amount);

    function sendReward(address to, uint256 amount) public {
        // just a dummy function for now
        emit RewardSent(to, amount);
    }
}
