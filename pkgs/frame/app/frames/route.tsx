/* eslint-disable react/jsx-key */
import { Button } from 'frames.js/next';
import { LOGO_URL, OPENSEA_URL, UNCHAIN_PAGE_URL } from '../utils';
import { frames } from "./frames";
 
/**
 * Handles the frame request and returns the frame data.
 * @param {object} ctx - The context object containing the request data.
 * @returns {object} - The frame data object.
 */
const handler = frames(async (ctx) => {
  if (!ctx) {
    throw new Error("Invalid frame ctx");
  }
 
  return {
    image: LOGO_URL,
    buttons: [
      <Button action="link" target={OPENSEA_URL}>
        View NFT
      </Button>,
      <Button action="tx" target="/frames/txdata" post_url="/frames">
        Mint
      </Button>,
      <Button action="link" target={UNCHAIN_PAGE_URL}>
        UNCHAIN Page
      </Button>
    ]
  };
});
 
export const GET = handler;
export const POST = handler;