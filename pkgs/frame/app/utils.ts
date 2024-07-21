import { headers } from "next/headers";

export const CHAIN_ID = "84532";
export const MYNFT_COONTRACT_ADDRESS = "0xFEbf942Ce0f403a48a01D4757710289E0458bca9";
export const OPENSEA_URL = "https://testnets.opensea.io/collection/unidentified-contract-fe1625d2-95bf-4cff-bc65-756c";
export const LOGO_URL = "https://bafybeib5qpd75kzjzkk4iko5ul72lm2yxhkdximeutfafkw3x2jqotfldi.ipfs.w3s.link/UNCHAIN_logo.png";
export const UNCHAIN_PAGE_URL = "https://buidl.unchain.tech/";

/**
 * currentURL method
 * @param pathname 
 * @returns 
 */
export function currentURL(pathname: string): URL {
  try {
    const headersList = headers();
    const host = headersList.get("x-forwarded-host") || headersList.get("host");
    const protocol = headersList.get("x-forwarded-proto") || "http";

    return new URL(pathname, `${protocol}://${host}`);
  } catch (error) {
    console.error(error);
    return new URL("http://localhost:3000");
  }
}

/**
 * appURL method
 * @returns 
 */
export function appURL() {
  if (process.env.APP_URL) {
    return process.env.APP_URL;
  } else {
    const url = process.env.APP_URL || vercelURL() || "http://localhost:3000";
    console.warn(
      `Warning: APP_URL environment variable is not set. Falling back to ${url}.`
    );
    return url;
  }
}

/**
 * vercelURL method
 * @returns 
 */
export function vercelURL() {
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined;
}