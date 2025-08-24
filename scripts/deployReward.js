import { ethers } from "hardhat"; // <-- use this import AFTER plugin is installed

async function main() {
  const [deployer] = await ethers.getSigners(); // now works

  console.log("Deploying contracts with account:", deployer.address);

  const Reward = await ethers.getContractFactory("Reward");
  const reward = await Reward.deploy(); // add args if needed
  await reward.deployed();

  console.log("Reward contract deployed to:", reward.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
