const hre = require("hardhat");

async function main() {
  const ClearFlowChain = await hre.ethers.getContractFactory("ClearFlowChain");
  const contract = await ClearFlowChain.deploy();

  await contract.waitForDeployment();

  console.log("✅ ClearFlowChain contract deployed at:", await contract.getAddress());

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
