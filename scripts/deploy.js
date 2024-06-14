// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const path = require('path');
const { readJsonSync } = require('fs-extra');
const fs = require("fs");
const fse = require("fs-extra");

async function main() {
  const Portfolio = await hre.ethers.getContractFactory("Portfolio");
  
  const portfolio = await Portfolio.deploy();
  
  await portfolio.waitForDeployment();
  
  console.log("Portfolio deployed to:", portfolio);

  if (fs.existsSync("./client/src")) {
    fs.rmSync("./client/src/components/Wallet/Portfolio.json", { recursive: true, force: true });
    fs.rmSync("./client/src/components/Wallet/Portfolio.dbg.json", { recursive: true, force: true });

    fse.copySync("./artifacts/contracts/Portfolio.sol/", "./client/src/components/Wallet");
    fs.writeFileSync(
      "./client/src/components/utils/contracts-config.js",
      `
      export const contractAddress = "${portfolio.target}"
      export const ownerAddress = "${portfolio.runner.address}"
      export const networkDeployedTo = "${portfolio.runner.provider._networkName}"
    `
    );
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
