
const {ethers} = require("hardhat");

async function main() {
const whitelistContract = await ethers.getContractFactory("Whitelist");
const deployedWhitelistContract = await whitelistContract.deploy(100);
//100 is the maximum number of whitelisted addresses allowed
await deployedWhitelistContract.deployed();
console.log(
  "Whitelist Contract Address:",
  deployedWhitelistContract.address
);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
