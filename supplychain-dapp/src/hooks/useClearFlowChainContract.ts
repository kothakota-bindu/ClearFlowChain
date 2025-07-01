import { usePublicClient, useWalletClient } from 'wagmi'
import { getContract } from 'viem'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/constants/contract'

export function useClearFlowChainContract() {
  const publicClient = usePublicClient()
  const { data: walletClient } = useWalletClient()

  const contract = getContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    client: {
      public: publicClient,
      wallet: walletClient!
    }
  })

  return contract
}
