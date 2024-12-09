### Team Members:
1. Reethu Ravichandran 
CWID: 833689169 
Email: reethuravi2001@csu.fullerton.edu

2. Sonika Meka 
CWID: 884477845 
Email: sonikam@csu.fullerton.edu

3. Bhavya Meghana Chippada 
CWID:829341148 
Email: meghanachb@csu.fullerton.edu 

4. Sri Varshika Pitchika 
CWID: 814812558 
Email: psrivarshika00@csu.fullerton.edu

5. Safdar Ibadh Shaik 
CWID: 875437477 
Email: ibadh@csu.fullerton.edu

 
### Project Description: 

**NFTSTORE - Recipe NFT Marketplace**

The **NFTSTORE - Recipe NFT Marketplace** is an innovative platform that leverages blockchain technology to revolutionize the way recipes are shared, monetized, and preserved. The platform allows creators such as food bloggers and chefs to tokenize their original recipes as **Non-Fungible Tokens (NFTs)**, ensuring authenticity, ownership, and secure monetization. 

For secure storage and seamless transactions, bridging culinary creativity with cutting-edge technology. Users can mint, sell, and trade recipe NFTs while maintaining ownership rights and receiving fair compensation for their work.

---

### Key Features:
- **Decentralized Marketplace:** Secure and trustless platform for buying, selling, and trading recipe NFTs.
- **Recipe Tokenization:** Mint recipes as NFTs with proof of ownership and authenticity.
- **Blockchain Integration:** Utilizes Ethereum blockchain for contract deployment and transactions.
- **IPFS Storage:** Decentralized storage for recipe content, ensuring data integrity and accessibility.
- **User-Friendly Interface:** A seamless frontend for creators and buyers to interact with the platform.

---

### Technologies Used:
- **Frontend:** next.js (for an intuitive and responsive user interface).
- **Smart Contracts:** Solidity (for defining NFT creation and transfer rules).
- **Blockchain Framework:** Hardhat (for smart contract development and testing).
- **Storage:** IPFS (for decentralized recipe storage).
- **Network:** Sepoila

This project showcases how blockchain technology can be used to create a secure ecosystem that values and compensates creators for their intellectual property in innovative ways.



### Instructions on how to execute the project:

Step 1:First,install all the packages required for tis project ( Node.js (v14 or higher),
npm or yarn,
Hardhat and
MetaMask or other Ethereum wallet for interacting with the app) 

Step 2:We will clone the app 
git clone https://github.com/SonikaMeka/AdvanceBlockChainFinalProject.git
cd NFTSTORE

STEP 3: Now, we will install all the dependencies required for the project

npm imstall
cd client
npm install

Step 4:

We have already have a .env file in this project you just need to update the necessary environment variables (e.g., Alchemy API URL, Private Key).


Deployment:
1.compiling the contracts
npx hardhat compile

2.Deploying the contracts
npx hardhat ignition deploy ./ignition/modules/Token.js --network sepolia

3.Running the frontend:
cd client
npm run dev

Result:

Then open https://localhost:3000 with your browser 
Connect your MetaMask wallet.
Mint, buy, and sell NFTs directly from the application.
