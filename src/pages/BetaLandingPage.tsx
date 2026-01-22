import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"
import { Button } from "@/components/ui/button"
import DotGrid from "@/components/DotGrid"

export default function BetaLandingPage() {
  const navigate = useNavigate()
  const { setVisible: setWalletModalVisible } = useWalletModal()
  const { connected } = useWallet()
  const [isConnecting, setIsConnecting] = useState(false)

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

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(231, 204, 124, 0.05)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: 'rgba(231, 204, 124, 0.05)' }} />
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
            
            {/* Trade Now Button */}
            <Button
              onClick={handleConnectWallet}
              variant="goldSolid"
              size="lg"
              className="text-xs sm:text-sm lg:text-base font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-md px-3 sm:px-4"
              style={{ 
                background: 'rgba(231, 204, 124, 0.15)',
                border: '1px solid rgba(231, 204, 124, 0.3)',
                color: '#E7CC7C',
                boxShadow: '0 8px 32px 0 rgba(231, 204, 124, 0.15)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.background = 'rgba(231, 204, 124, 0.25)'
                  e.currentTarget.style.borderColor = 'rgba(231, 204, 124, 0.5)'
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(231, 204, 124, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(231, 204, 124, 0.3)'
              }}
            >
              Trade Now
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="relative" style={{ zIndex: 10, position: 'relative', isolation: 'isolate' }}>
        {/* Hero Section */}
        <section className="relative overflow-hidden flex items-center justify-center h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] px-3 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 lg:-mt-12">
          <div className="max-w-5xl mx-auto text-center w-full">
            {/* Logo */}
            <div className="mb-2 sm:mb-3 lg:mb-4 flex justify-center items-center">
              <img 
                src="/CAESARX LOGO GOLD.svg" 
                alt="CaesarX Logo" 
                className="h-12 sm:h-16 lg:h-20 xl:h-24 w-auto opacity-90"
              />
            </div>

            {/* Badge */}
            <div className="flex justify-center items-center mb-3 sm:mb-4 lg:mb-5">
              <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold" style={{ color: '#E7CC7C' }}>
                Beta Access
              </span>
            </div>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-zinc-300 max-w-3xl mx-auto mb-3 sm:mb-4 lg:mb-5 leading-relaxed sm:leading-relaxed font-light px-2">
              Deploy across top launchpads with bundler + vanity edge. Auto-snipe with real-time feeds, MEV protection & risk controls.
            </p>

            {/* CTA */}
            <div className="flex justify-center items-center px-2">
              <Button
                onClick={handleConnectWallet}
                variant="goldSolid"
                size="xl"
                className="text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-md w-full sm:w-auto px-4 sm:px-6"
                style={{ 
                  background: 'rgba(231, 204, 124, 0.2)',
                  border: '1px solid rgba(231, 204, 124, 0.4)',
                  color: '#E7CC7C',
                  boxShadow: '0 8px 32px 0 rgba(231, 204, 124, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.disabled) {
                    e.currentTarget.style.background = 'rgba(231, 204, 124, 0.3)'
                    e.currentTarget.style.borderColor = 'rgba(231, 204, 124, 0.6)'
                    e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(231, 204, 124, 0.3)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(231, 204, 124, 0.2)'
                  e.currentTarget.style.borderColor = 'rgba(231, 204, 124, 0.4)'
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(231, 204, 124, 0.2)'
                }}
              >
                Trade Now on Caesar X
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Social Icons - Bottom Right */}
      <div className="fixed right-3 sm:right-4 lg:right-6 bottom-8 sm:bottom-12 lg:bottom-16 flex items-center gap-3 sm:gap-4" style={{ zIndex: 10 }}>
        <a
          href="https://x.com/caesarx"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="X (Twitter)"
        >
          <img
            src="/icons/social/x-logo.svg"
            alt="X (Twitter)"
            className="w-5 h-5 sm:w-6 sm:h-6"
            style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(30%) saturate(2000%) hue-rotate(0deg) brightness(1) contrast(1)' }}
          />
        </a>
        <a
          href="https://discord.gg/caesarx"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Discord"
        >
          <img
            src="/icons/social/discord-icon.svg"
            alt="Discord"
            className="w-5 h-5 sm:w-6 sm:h-6"
            style={{ filter: 'brightness(0) saturate(100%) invert(85%) sepia(30%) saturate(2000%) hue-rotate(0deg) brightness(1) contrast(1)' }}
          />
        </a>
      </div>
    </div>
  )
}
