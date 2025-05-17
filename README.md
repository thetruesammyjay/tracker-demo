# Multichain Tracker

![Wormhole Integration](public/logo.svg)

A dashboard for tracking cross-chain assets and transactions using Wormhole's interoperability protocols.

## Features

- **Multi-chain Balance Overview**: View assets across Ethereum, Solana, and Polygon
- **Network Fee Comparison**: Compare gas fees between chains
- **Transaction History**: Track cross-chain transfers with WormholeScan verification
- **Dark/Light Mode**: Tailwind CSS-powered theming

## Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + PostCSS
- **Charts**: Recharts
- **Blockchain**: Wormhole SDK
- **Types**: TypeScript


## Setup
1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Environment variables**:
    Create `.env` file:
    ```ini
    NEXT_PUBLIC_WORMHOLE_ENV=testnet
    NEXT_PUBLIC_ETHEREUM_RPC=https://eth.llamarpc.com
    ```
3. **Run development server**:
    ```bash
    npm run dev
    ```

## Wormhole Integration
This project uses:

- [Wormhole Connect](https://wormhole.com/wormhole-connect) for wallet management

- [Wormhole SDK](https://github.com/wormhole-foundation/wormhole-sdk) for cross-chain data

- [WormholeScan](https://wormholescan.io/) for transaction verification



## Scripts
| Command         | Description               |
|----------------|---------------------------|
| `npm run dev`  | Start development server  |
| `npm run build`| Create production build   |
| `npm run lint` | Run ESLint                |

## Contributing
- Fork the repository

- Create a feature branch (`git checkout -b feature/foo`)

- Commit changes (`git commit -am 'Add foo'`)

- Push to branch (`git push origin feature/foo`)

- Open a Pull Request

## License 📄
This project is licensed under the MIT License

## Contact Us
- **X (Twitter):** [@thatbwoysammyj](https://x.com/thatbwoysammyj)  
- **Telegram:** [t.me/sammyjayisthename](https://t.me/sammyjayisthename)  
- **Email:** [thetruesammyjay@gmail.com](mailto:thetruesammyjay@gmail.com)
