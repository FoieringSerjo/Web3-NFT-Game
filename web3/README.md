# Fireblocks Hardhat Project

Create .env file with Fireblocks Path SECRET_KEY and API_KEY
Run the following commands inside the web3 folder if you want to deploy the contract and replace the deployed contract address inside folder "client" --> "src" --> "contract" ---> "index.js":

```shell
npx hardhat clean
npx hardhat compile
npx hardhat run scripts/deploy.ts --network goerli
```

Run the following command from client:

```
npm run dev
```
