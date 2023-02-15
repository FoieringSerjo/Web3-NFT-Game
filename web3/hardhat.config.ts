import '@nomicfoundation/hardhat-toolbox';
import '@fireblocks/hardhat-fireblocks';

import dotenv from 'dotenv';
dotenv.config();

export default {
  solidity: {
    version: '0.8.16',
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    // fuji: {
    //   url: 'https://api.avax-test.network/ext/bc/C/rpc',
    //   gasPrice: 225000000000,
    //   chainId: 43113,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    goerli: {
      url: 'https://rpc.ankr.com/eth_goerli',
      chainId: 5,
      accounts: [process.env.PRIVATE_KEY_METAMASK],
    },
    // goerli: {
    //   url: 'https://rpc.ankr.com/eth_goerli',
    //   fireblocks: {
    //     privateKey: process.env.API_SECRET,
    //     apiKey: process.env.API_KEY,
    //     vaultAccountIds: 0,
    //   },
    // },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
    },
    // subnet: {
    //   url: process.env.NODE_URL,
    //   chainId: Number(process.env.CHAIN_ID),
    //   gasPrice: 'auto',
    //   accounts: [process.env.PRIVATE_KEY],
    // },
  },
};
