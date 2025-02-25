'use client'

import MonoLabel from 'components/privy/MonoLabel'
import Wrapper from 'components/privy/Wrapper'
import { shorten } from 'lib/utils'
import { useEnsAddress } from 'wagmi'

const EnsAddress = () => {
  const address = 'vitalik.eth'
  const { data, isError, isLoading } = useEnsAddress({ name: address })
  if (isLoading) return <Wrapper title="useEnsAddress">Fetching address…</Wrapper>
  if (isError) return <Wrapper title="useEnsAddress">Error fetching address</Wrapper>
  return (
    <Wrapper title="useEnsAddress">
      Address for vitalik.eth: <MonoLabel label={shorten(data as string)} />
    </Wrapper>
  )
}

export default EnsAddress
