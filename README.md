# nft.storage dropdown
Component sketch

## Build steps
```sh
yarn
```
```sh
cp .env.example .env
```
Insert your API key on .env file.
```sh
yarn start
```

## Usage
Upload file to nft.storage, check response from /get endpoint to receive cid and image name so you can mount the image endpoint following this standard:
```javascript
"https://" + {cid} + ".ipfs.dweb.link/" + {filename.extension}
```

## Minting NFTs
In order to mint a correctly formatted NFT with Metadata, you'll need to pass down a .json link containing a file such as:
```sh
{
  "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
  "external_url": "https://openseacreatures.io/3", 
  "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png", 
  "name": "Dave Starbelly",
  "attributes": [ ... ], 
}
```
Observe that, in order to get a complete .json we already need to have a image url. Using a centralized way to store image so then .json is sent to Filecoin or the other around really defeats the purpose of it all right?

So, when you're minting an art NFT the complete flow will go as:

- get input from FE 
- upload art file to nft.storage API 
- get CID + Filename 
- build image endpoint 
- create .json file from FE data + image IPFS endpoint 
- upload .json to nft.storage 
- build .json file endpoint 
- interact with NftFactory smart contract to mint a new NFT with Metadata