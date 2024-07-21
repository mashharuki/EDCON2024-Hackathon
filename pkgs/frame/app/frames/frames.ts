import { farcasterHubContext } from "frames.js/middleware";
import { createFrames } from "frames.js/next";

 
/**
 * createGrames method
 */
export const frames = createFrames({
  // stateSigningSecret: "my-secret-key", 
  middleware: [farcasterHubContext({
    hubHttpUrl: "https://hub.freefarcasterhub.com:3281",
  })],
});