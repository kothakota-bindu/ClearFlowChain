import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultConfig, RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import {
  WagmiProvider,
  cookieStorage,
  createStorage,
  createConfig,
  http
} from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: false,
})

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
