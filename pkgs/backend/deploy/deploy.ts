import chalk from "chalk";
import {DeployFunction} from "hardhat-deploy/types";

const hre = require("hardhat");

const func: DeployFunction = async function () {
  const {fhenixjs, ethers} = hre;
  const {deploy} = hre.deployments;
  const [signer] = await ethers.getSigners();

  if ((await ethers.provider.getBalance(signer.address)).toString() === "0") {
    if (hre.network.name === "localfhenix") {
      await fhenixjs.getFunds(signer.address);
    } else {
      console.log(
        chalk.red(
          "Please fund your account with testnet FHE from https://faucet.fhenix.zone"
        )
      );
      return;
    }
  }

  // デプロイ
  const counter = await deploy("Counter", {
    from: signer.address,
    args: [],
    log: true,
    skipIfAlreadyDeployed: false,
  });

  // NFTをデプロイ
  const nft = await deploy("MyNFT", {
    from: signer.address,
    args: [],
    log: true,
    skipIfAlreadyDeployed: false,
  });

  console.log(`Counter contract: `, counter.address);
  console.log(`MyNFT contract: `, nft.address);
};

export default func;
func.id = "deploy_counter";
func.tags = ["Counter"];
