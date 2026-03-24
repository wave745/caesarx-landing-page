import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"
import { Button } from "@/components/ui/button"
import DotGrid from "@/components/DotGrid"

export default function BetaLandingPage() {
  const navigate = useNavigate()
  const { setVisible: setWalletModalVisible } = useWalletModal()
  const { connected, publicKey, disconnect } = useWallet()
  const [isConnecting, setIsConnecting] = useState(false)

  const formatAddress = (address?: string) => {
    if (!address) return ""
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  const handleConnectWallet = () => {
    setIsConnecting(true)
    setWalletModalVisible(true)
    setTimeout(() => setIsConnecting(false), 500)
  }

  const handleLaunchToken = () => {
    if (connected) {
      navigate("/deployer")
    } else {
      handleConnectWallet()
    }
  }

  const handleStartSniping = () => {
    if (connected) {
      navigate("/sniper")
    } else {
      handleConnectWallet()
    }
  }

  return (
    <div className="h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white relative overflow-hidden">
      {/* DotGrid Background */}
      <div className="fixed inset-0" style={{ zIndex: 1, pointerEvents: 'none' }}>
        <DotGrid
          dotSize={4}
          gap={12}
          baseColor="#38311f"
          activeColor="#E7CC7C"
          proximity={80}
          speedTrigger={100}
          shockRadius={150}
          shockStrength={5}
          maxSpeed={5000}
          resistance={750}
          returnDuration={1.5}
          style={{ width: '100%', height: '100%' }}
        />
      </div>



      {/* Header */}
      <header className="relative w-full" style={{ zIndex: 10, position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/caesarXlogo3d2.gif" 
                alt="CaesarX Logo" 
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="relative" style={{ zIndex: 10, position: 'relative', isolation: 'isolate' }}>
        {/* Hero Section */}
        <section className="relative overflow-hidden flex items-center justify-center h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] px-3 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 lg:-mt-12">
          <div className="max-w-[380px] mx-auto w-full p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-2xl shadow-2xl flex flex-col items-center justify-center text-center">
            {/* Logo */}
            <div className="mb-4 flex justify-center items-center">
              <img 
                src="/CAESARX LOGO MAIN.svg" 
                alt="CaesarX Logo" 
                className="h-20 sm:h-24 w-auto drop-shadow-lg"
              />
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight tracking-tight">
              Connect your wallet to<br />Start Trading
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-zinc-400 mb-6 font-medium">
              Get Started with CaesarX!
            </p>

            {/* Select Wallet Button */}
            <Button
              onClick={connected ? () => navigate("/app") : handleConnectWallet}
              variant="goldSolid"
              size="lg"
              className="w-full text-sm sm:text-base font-bold flex items-center justify-center gap-2 rounded-2xl transition-all duration-300 py-5"
              style={{ 
                background: '#E7CC7C',
                color: '#18181b', // zinc-900
              }}
              onMouseEnter={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.transform = 'scale(1.02)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {/* Wallet Icon */}
              {!connected && (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                </svg>
              )}
              {connected ? "Launch App" : "Select Wallet"}
            </Button>
          </div>
        </section>
      </div>

      {/* Social Icons - Bottom Right */}
      <div className="fixed right-3 sm:right-4 lg:right-6 bottom-4 sm:bottom-6 lg:bottom-8 flex items-center gap-4 sm:gap-5" style={{ zIndex: 10 }}>
        <a
          href="https://x.com/caesarx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-[#E7CC7C] transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="X (Twitter)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 21l7.5-7.5m3-3L21 3M8 3H3l13 18h5Z"/>
          </svg>
        </a>
        <a
          href="https://discord.gg/caesarx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-[#E7CC7C] transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Discord"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 100 100">
            <path fill="none" stroke="currentColor" strokeWidth="6" strokeMiterlimit="10" d="M75,27.6L75,27.6c-4.7-2.2-9.6-3.7-14.7-4.6c-0.1,0-0.2,0-0.2,0.1c-0.6,1.1-1.3,2.5-1.8,3.7
              c-5.5-0.8-11-0.8-16.5,0c-0.5-1.3-1.2-2.5-1.9-3.7c0-0.1-0.1-0.1-0.2-0.1c-5.1,0.9-10.1,2.4-14.7,4.5l-0.1,0.1
              C15.6,41.3,13,54.7,14.3,67.9l0.1,0.2c5.4,4,11.5,7,18,8.9c0.1,0,0.2,0,0.3-0.1c1.4-1.9,2.6-3.8,3.7-5.9c0.1-0.1,0-0.2-0.1-0.3l0,0
              c-1.9-0.7-3.8-1.6-5.6-2.6c-0.1-0.1-0.1-0.2-0.1-0.3l0.1-0.1c0.4-0.3,0.8-0.6,1.1-0.9l0.2,0c11.8,5.3,24.5,5.3,36.2,0l0.2,0
              c0.4,0.3,0.7,0.6,1.1,0.9c0.1,0.1,0.1,0.2,0,0.3l-0.1,0.1c-1.8,1-3.7,1.9-5.6,2.6c-0.1,0-0.2,0.2-0.1,0.3l0,0c1.1,2.1,2.3,4,3.7,5.9
              c0.1,0.1,0.2,0.1,0.3,0.1c6.5-1.9,12.6-5,18-8.9l0.1-0.2C87.2,52.6,83.2,39.3,75,27.6z M38.1,59.8c-3.5,0-6.5-3.2-6.5-7.1
              c0-3.9,2.9-7.1,6.5-7.1c3.6,0,6.5,3.2,6.5,7.1C44.5,56.6,41.7,59.8,38.1,59.8z M62,59.8c-3.5,0-6.5-3.2-6.5-7.1
              c0-3.9,2.9-7.1,6.5-7.1c3.6,0,6.5,3.2,6.5,7.1C68.5,56.6,65.6,59.8,62,59.8z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
