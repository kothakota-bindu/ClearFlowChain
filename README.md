# Status: This project is currently in progress and undergoing active development. Code modifications are expected.
# ClearFlowChain - Decentralized AI-Powered Supply Chain DApp
 A production-grade, mobile-friendly, decentralized supply chain management platform leveraging Blockchain, AI, and Progressive Web App technologies.
 
 **Project Overview:**
ClearFlowChain is a decentralized application (DApp) that enables transparent, tamper-proof product tracking across the supply chain.

*Features:*
- Automated Product ID creation
- Role-based access (Manufacturer, Supplier, Vendor, Distributor, Consumer)
- Product status tracking & transfer of ownership
- Batch management support
- GPS/location hashing & QR/IPFS metadata
- AI Assistant for smart queries & insights
- Fully responsive Progressive Web App (PWA) for mobile access
- Secure, auditable, event-driven architecture
- Future-ready: Extensible for ZK proofs, multi-chain support, dispute resolution

**Tech Stack**
- Smart Contract: Solidity 0.8.21 (ClearFlowChain.sol)
- Blockchain: Ethereum Sepolia Testnet
- Frontend: React + Vite + TypeScript
- UI: TailwindCSS + ShadCN Components
- Web3 Integration: wagmi + viem
- AI: OpenAI API / NLP (Optional)
- Storage: IPFS (Optional)
- PWA: Manifest, Service Worker

**Project Structure:**
```
supplychain-dapp/
├─ src/
│  ├─ pages/               # Role-based pages (Dashboard, Vendor, Supplier, etc.)
│  ├─ components/          # Reusable UI components
│  ├─ hooks/               # Custom blockchain & contract hooks
│  ├─ constants/           # Contract address & ABI
│  ├─ App.tsx              # Route & Layout management
├─ contracts/
│  ├─ ClearFlowChain.sol   # Full-featured smart contract
├─ public/
│  ├─ manifest.json        # PWA configuration
├─ package.json
├─ vite.config.ts
├─ README.md
```
# How to Run:
 1. npm install
 2. Deploy ClearFlowChain.sol to Sepolia
 3. Update src/constants/contract.ts with contract details
 4. npm run dev
 # Live Features:
- Product creation & transfer
- Role-based pages (Vendor, Supplier, etc.)
- Batch tracking
# Future Enhancements: 
- QR/IPFS metadata
- AI query interface
- Mobile-friendly PWA
- Event-driven updates
- ZK privacy
- DAO integration
- Multi-chain support
- AI-powered predictions
