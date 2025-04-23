# Hello Blockchain

A simple Ethereum smart contract project written in Solidity, deployed using Hardhat, and interacted with using ethers.js. The contract allows users to store and update a message on the Ethereum blockchain.

## Overview

This project contains a smart contract called `helloblockchain` that enables users to store a string message on the Ethereum blockchain and update it later. The smart contract emits an event whenever the message is updated, so it can be tracked in real-time by applications listening for the event.

## Files and Folders

### **helloblockchain.sol**
This is the main Solidity contract that contains the logic for storing and updating the message. 

### **Folder Structure**

- `artifacts/` - Contains compiled contract artifacts.
- `cache/` - Cache files generated during the compilation process.
- `contracts/` - Solidity source code files.
- `node_modules/` - Project dependencies installed via npm.
- `scripts/` - Deployment and interaction scripts.
- `.env` - Contains environment variables, such as private keys and API URLs.
- `hardhat.config.js` - Hardhat configuration file.
- `package.json` - Project dependencies and scripts.
- `package-lock.json` - Exact versions of dependencies.

## Technologies Used

- **Solidity**: Smart contract programming language used to create the `helloblockchain` contract.
- **Hardhat**: Ethereum development framework for compiling, deploying, testing, and interacting with smart contracts.
- **Ethers.js**: A library for interacting with the Ethereum blockchain.
- **dotenv**: To manage environment variables securely.
- **Sepolia Testnet**: Deployed the contract on Sepolia, an Ethereum test network.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/) for deploying and managing Ethereum smart contracts.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Hemavathy040726/Blockchain-Projects.git
   cd Blockchain-Projects

2. Install dependencies:

   ```bash
   npm install

3. Create a .env file in the root of your project and add your environment variables:

   ```bash
   API_URL=<your-infura-or-alchemy-api-url>
   PRIVATE_KEY=<your-ethereum-wallet-private-key>
   CONTRACT_ADDRESS=<deployed-contract-address>
   ETHERSCAN_API_KEY=<your-etherscan-api-key>
   

### Compile the Contract

To compile the Solidity contract, use:
     ```bash
   npx hardhat compile


### Deploy the Contract
To deploy the smart contract to the Sepolia test network, run:
    ```bash
   npx hardhat run scripts/deploy.js --network sepolia

After a successful deployment, the contract address will be logged in the console.


### Interact with the Contract
To interact with the deployed contract (read the message and update it), run:
    ```bash
   node scripts/interact.js

The script will read the current message from the contract, update it, and then log the new message.


## Contract Functions
### Constructor
constructor(string memory initMessage):
Initializes the contract with an initial message.
Example: Hello World blockchain !

### update()
function update(string memory newMessage) public:
Updates the stored message with a new string.
Emits the UpdatedMessages event when the message is updated.

### Events
event UpdatedMessages(string oldStr, string newStr):
Emitted when the update function is called. It logs the old and new message values.

## Configuration
### Hardhat Configuration (hardhat.config.js)

    ```bash
    module.exports = {
      solidity: "0.8.28",
      defaultNetwork: "sepolia",
      networks: {
        hardhat: {},
        sepolia: {
          url: process.env.API_URL,
          accounts: [`0x${process.env.PRIVATE_KEY}`]
        }
      },
      etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY
      }
    };



### package.json
Contains the project's dependencies, including:
    - @nomicfoundation/hardhat-verify: For verifying contracts on Etherscan.
    - @nomiclabs/hardhat-ethers: For integrating ethers.js with Hardhat.
    - hardhat: The Hardhat framework for managing smart contracts.

## Troubleshooting
    - If you encounter issues deploying or interacting with the contract, ensure that your API URL and private key in the .env file are correct.
    - Check that the network configuration in hardhat.config.js is properly set to sepolia or another network you're using.

## License
This project is licensed under the ISC License.





