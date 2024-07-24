# EDCON2024-Hackathon

This repo for EDCON2024-Hackathon

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/edcon-2024-hackathon-frame)

## live demo

[https://edcon-2024-hackathon-frame.vercel.app/](https://edcon-2024-hackathon-frame.vercel.app/)

## アイディア

Web3 版 チェキ - Onchain チェキ

何気ない日常
頑張っているビルダーの姿

そんな風景をブロックチェーンに刻んで共有したくはありませんか？？

私達は、そんな思いを実現させる cast を開発します。

撮影した写真を加工したりサインを入れたりして思い出をfarcaster上に投稿します。

気に入ったらNFTとしてもミントできます。

チェキのように撮った人通しで思い出としてNFTをミントしておくこともできます！！

## Ideas

Web3 version of Cheki - Onchain Cheki

An ordinary day in the life of a builder
A builder working hard.

Wouldn't you like to share such scenes by engraving them on the blockchain?

We are developing a cast that will make such a thought a reality.

You take a photo with a browser application and process the photo afterwards.

The idea is that the processed photos can be published as NFT within Farcaster.

If you like it, you can mint it as NFT.

You can also mint the NFT as a memory through the person who took the picture, just like a Cheki!

## 機能

- PWA
- 写真を撮る機能
- 写真にサインを入れられる機能
- 写真を NFT としてミントできる機能
- その NFT を Farcaster に流せる機能

## Functions

- PWA (Progressive Web App)
- Photo-taking feature
- Feature to add signatures to photos
- Feature to mint photos as NFTs
- Feature to post these NFTs on Farcaster

## Tech

- BaseSepolia
- Fhenix
- frame.js
- Nextjs
- hardhat
- TypeScript

## How to work

- install

  ```bash
  yarn
  ```

- run on localhost

  ```bash
  yarn frames dev
  ```

  [http://localhost:3010](http://localhost:3010)にアクセスする。

- compile smartcontract

  ```bash
  yarn backend compile
  ```

- test smartContract

  ```bash
  yarn backend test
  ```

- deploy smartContract

  ```bash
  yarn backend task:deploy --network testnet
  ```

  ```bash
  deploying "Counter" (tx: 0xe8e1b7fcf2d38d7e983993e76e54abab9f728d881a544b3be8f89d86a2fa3c93)...: deployed at 0xAa363921A48Eac63F802C57658CdEde768B3DAe1 with 77929365 gas
  Counter contract:  0xAa363921A48Eac63F802C57658CdEde768B3DAe1
  ✨  Done in 9.99s.
  ```

  [deployed contract - 0xAa363921A48Eac63F802C57658CdEde768B3DAe1](https://explorer.helium.fhenix.zone/address/0xAa363921A48Eac63F802C57658CdEde768B3DAe1)

- task:getCount

  ```bash
  yarn backend task:getCount --network testnet
  ```

- task:addCount

  ```bash
  yarn backend task:addCount --network testnet
  ```

### Reference

1. [FarHack](https://farhack.xyz/hackathons/edcon-2024)
2. [fabricjs](http://fabricjs.com/freedrawing)
3. [GitHub - purikura](https://github.com/Jun0908/purikura/tree/main)
4. [Connecting to Fhenix Helium Testnet](https://docs.fhenix.zone/docs/devdocs/Fhenix%20Testnet/Connecting-To)
5. [bridge.helium.fhenix.zone](https://bridge.helium.fhenix.zone/)
6. [GitHub - fhenix-hardhat-example](https://github.com/fhenixprotocol/fhenix-hardhat-example)
7. [Testnet BlockExplorer](https://explorer.helium.fhenix.zone)
