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