# DigiCertify(DApp)

The **DigiCertify(DApp)** is a decentralized application that allows the issuance and verification of certificates securely on the blockchain. This DApp leverages **Ethereum** blockchain technology and **smart contracts** to ensure the integrity and authenticity of issued certificates. Built using **React** for the frontend and **Solidity** for the smart contract, this project ensures that certificate data remains tamper-proof and accessible to everyone.

## ✨ Features

- **Issue Certificates:** One who deployed the smart contract can issue new certificates by connecting to MetaMask.
- **View Certificates:** View issued certificates by connecting their MetaMask wallet.
- **Blockchain Storage:** All certificate details are stored on the blockchain, ensuring they are secure, immutable, and verifiable.
- **MetaMask Integration:** Connect your MetaMask wallet to interact with the DApp. Ensure you're on the correct network to interact with the deployed smart contract.

## 🚀 Getting Started

To get the DigiCertify(DApp) up and running on your local machine, follow these steps:

### Prerequisites

Ensure you have **Node.js**, **MetaMask**, and a preferred smart contract deployment tool installed.

### Smart Contract Deployment

1. **Deploy the Smart Contract:**

   - Deploy the `Cert.sol` smart contract located in the `contracts` folder using your preferred deployment application (e.g., **Hardhat**, **Truffle**, **Remix**, etc.).

   - After deploying, copy the contract ABI from the generated `Cert.json` file. Depending on your deployment tool, this file will be generated in the corresponding `artifacts` or `build` folder.

   - Paste the ABI into the `Cert.json` file located in the `src/scdata` folder of your project.

   - Copy the deployed contract address and paste it into the `deployed_addresses.json` file in the `src/scdata` folder.

### Installation

2. **Clone the repository:**

   ```bash
   git clone git@github.com:akshaj-22/DigiCertify-DApp.git
   cd certificate-dapp
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Connect MetaMask:**
   - Open MetaMask in your browser.
   - Connect to the correct network where the smart contract is deployed.

6. **Done!** Now you can start issuing and viewing certificates on the blockchain.

## 🔗 Connecting to MetaMask

- Before issuing or viewing certificates, make sure to connect your MetaMask wallet.
- The account that deployed the smart contract can issue certificates.
- Any connected user can view the issued certificates.

## 📜 Smart Contract Details

- **Technology Used:** React, Solidity
- **Smart Contract Deployment:** Can be deployed using **Hardhat**, **Truffle**, **Remix**, or any preferred application.
- **Smart Contract ABI and Address:** 
  - ABI: Stored in `src/scdata/Cert.json`.
  - Address: Stored in `src/scdata/deployed_addresses.json`.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Blockchain:** Ethereum
- **Smart Contract Language:** Solidity
- **Wallet Integration:** MetaMask

## 📝 Usage

1. **Issue Certificate:**
   - Navigate to the "Issue Certificate" page.
   - Fill in the certificate details and click "Issue".

2. **View Certificate:**
   - Navigate to the "View Certificate" page.
   - Connect to MetaMask with any account.
   - Enter the certificate ID to view its details on the blockchain.

## 🎥 Demo Video

[![DigiCertify](https://img.youtube.com/vi/jkg8eO6DJy4/0.jpg)](https://www.youtube.com/watch?v=jkg8eO6DJy4)

## 📧 Contact

For any questions or issues, please contact [akshajbabu21@gmail.com](mailto:akshajbabu21@gmail.com).

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/akshaj-22/certiapp/blob/main/License.txt) file for more details.

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

---

## ![DApp](https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif)

