import { CHAIN_ID, MYNFT_COONTRACT_ADDRESS } from "@/app/utils";
import { transaction } from "frames.js/core";
import { Abi, encodeFunctionData } from "viem";
import { frames } from "../frames";
import { myNFTABI } from "./contracts/myNFT";
 
/**
 * Handles the POST request for the route.
 * @param {Context} ctx - The context object containing the request information.
 * @returns {Promise<any>} - A promise that resolves to the transaction result.
 * @throws {Error} - If the frame message is invalid.
 */
export const POST = frames(async (ctx) => {
  if (!ctx?.message) {
    throw new Error("Invalid frame message");
  }

  const userAddress = ctx.message.connectedAddress;
  console.log("userAddress", userAddress)

  return transaction({
    chainId: `eip155:${CHAIN_ID}`, // Base Sepolia
    method: "eth_sendTransaction", // sendTransaction
    params: {
      abi: myNFTABI as Abi,
      to: MYNFT_COONTRACT_ADDRESS,
      data: encodeFunctionData({
        abi: myNFTABI as Abi,
        functionName: "mint",
        args: [userAddress, 0, 1, "0x"] as const,
      }),
      value: "0"
    },
  });
});