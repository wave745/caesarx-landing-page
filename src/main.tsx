import React, { useMemo } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'

import '@solana/wallet-adapter-react-ui/styles.css'

const Main = () => {
    const endpoint = useMemo(() => clusterApiUrl('mainnet-beta'), [])
    const wallets = useMemo(() => [new PhantomWalletAdapter()], [])

    return (
        <React.StrictMode>
            <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                    <WalletModalProvider>
                        <App />
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </React.StrictMode>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />)
