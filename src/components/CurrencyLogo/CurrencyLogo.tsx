import { ChainId, Currency, WNATIVE } from '@core-sdk'
import useHttpLocations from 'app/hooks/useHttpLocations'
import { WrappedTokenInfo } from 'app/state/lists/wrappedTokenInfo'
import React, { FunctionComponent, useMemo } from 'react'

import Logo, { UNKNOWN_ICON } from '../Logo'

const BLOCKCHAIN = {
  [ChainId.ETHEREUM]: 'ethereum',
  [ChainId.BSC]: 'bsc',
  [ChainId.CELO]: 'celo',
  [ChainId.FANTOM]: 'fantom',
  [ChainId.AVALANCHE_TESTNET]: 'fuji',
  [ChainId.FUSE]: 'fuse',
  [ChainId.HARMONY]: 'harmony',
  [ChainId.HECO]: 'heco',
  [ChainId.MATIC]: 'matic',
  [ChainId.MOONRIVER]: 'moonriver',
  [ChainId.OKEX]: 'okex',
  [ChainId.PALM]: 'palm',
  [ChainId.TELOS]: 'telos',
  [ChainId.XDAI]: 'xdai',
  [ChainId.ARBITRUM]: 'arbitrum',
  [ChainId.AVALANCHE]: 'avalanche',
  [ChainId.MOONBEAM]: 'moonbeam',
  [ChainId.KAVA]: 'kava',
  [ChainId.METIS]: 'metis',
  [ChainId.ARBITRUM_NOVA]: 'arbitrum-nova',
  [ChainId.HARDHAT]: 'hardhat',
}

// @ts-ignore TYPE NEEDS FIXING
export const getCurrencyLogoUrls = (currency: Currency): string[] => {
  const urls: string[] = []

  if (currency.chainId in BLOCKCHAIN) {
    urls.push(
      `https://raw.githubusercontent.com/sushiswap/list/master/logos/token-logos/network/${
        // @ts-ignore TYPE NEEDS FIXING
        BLOCKCHAIN[currency.chainId]
      }/${currency.wrapped.address}.jpg`
    )
    urls.push(
      // @ts-ignore TYPE NEEDS FIXING
      `https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/${BLOCKCHAIN[currency.chainId]}/assets/${
        currency.wrapped.address
      }/logo.png`
    )
    urls.push(
      // @ts-ignore TYPE NEEDS FIXING
      `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${BLOCKCHAIN[currency.chainId]}/assets/${
        currency.wrapped.address
      }/logo.png`
    )
  }
  return urls
}

const AvaxLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/avax.svg'
const PeloLogo = 'https://i.imgur.com/6A2slSh.png'
const BartLogo = 'https://i.imgur.com/7oFiXmg.png'
const MemelonLogo = 'https://i.imgur.com/Nshz237.png'
const BnbLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/bnb.svg'
const EthereumLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ethereum.svg'
const FtmLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ftm.svg'
const OneLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/one.svg'
const HtLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/ht.svg'
const MaticLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/matic.svg'
const GlmrLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/glmr.svg'
const OktLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/okt.svg'
const xDaiLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/xdai.svg'
const CeloLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/celo.svg'
const PalmLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/palm.svg'
const MovrLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/movr.svg'
const FuseLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/fuse.svg'
const TelosLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/telos.svg'
const KavaLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/kava.svg'
const MetisLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/metis.svg'
const BobaLogo = 'https://raw.githubusercontent.com/sushiswap/list/master/logos/native-currency-logos/boba.svg'
const ZetaLogo = 'https://i.ibb.co/dLHNfYf/zetachain-icon-4x.png'

const LOGO: Record<number, string> = {
  [ChainId.ETHEREUM]: EthereumLogo,
  [ChainId.KOVAN]: EthereumLogo,
  [ChainId.RINKEBY]: EthereumLogo,
  [ChainId.ROPSTEN]: EthereumLogo,
  [ChainId.GÖRLI]: EthereumLogo,
  [ChainId.FANTOM]: FtmLogo,
  [ChainId.FANTOM_TESTNET]: FtmLogo,
  [ChainId.MATIC]: MaticLogo,
  [ChainId.MATIC_TESTNET]: MaticLogo,
  [ChainId.XDAI]: xDaiLogo,
  [ChainId.BSC]: BnbLogo,
  [ChainId.BSC_TESTNET]: BnbLogo,
  [ChainId.AVALANCHE]: AvaxLogo,
  [ChainId.AVALANCHE_TESTNET]: AvaxLogo,
  [ChainId.HECO]: HtLogo,
  [ChainId.HECO_TESTNET]: HtLogo,
  [ChainId.HARMONY]: OneLogo,
  [ChainId.HARMONY_TESTNET]: OneLogo,
  [ChainId.OKEX]: OktLogo,
  [ChainId.OKEX_TESTNET]: OktLogo,
  [ChainId.ARBITRUM]: EthereumLogo,
  [ChainId.ARBITRUM_TESTNET]: EthereumLogo,
  [ChainId.CELO]: CeloLogo,
  [ChainId.PALM]: PalmLogo,
  [ChainId.PALM_TESTNET]: PalmLogo,
  [ChainId.MOONRIVER]: MovrLogo,
  [ChainId.FUSE]: FuseLogo,
  [ChainId.TELOS]: TelosLogo,
  [ChainId.HARDHAT]: EthereumLogo,
  [ChainId.MOONBEAM]: GlmrLogo,
  [ChainId.OPTIMISM]: EthereumLogo,
  [ChainId.KAVA]: KavaLogo,
  [ChainId.ARBITRUM_NOVA]: EthereumLogo,
  [ChainId.METIS]: MetisLogo,
  [ChainId.BOBA_AVAX]: BobaLogo,
  // [ChainId.ZETA]: ZetaLogo,
  // [ChainId.ZETA_TESTNET]: ZetaLogo,
}

export interface CurrencyLogoProps {
  currency?: Currency
  size?: string | number
  style?: React.CSSProperties
  className?: string
}

const CurrencyLogo: FunctionComponent<CurrencyLogoProps> = ({ currency, size = '24px', className, style }) => {
  const uriLocations = useHttpLocations(
    currency instanceof WrappedTokenInfo ? currency.logoURI || currency.tokenInfo.logoURI : undefined
  )
  const srcs: string[] = useMemo(() => {
    if (currency?.isNative || currency?.equals(WNATIVE[currency.chainId])) {
      // @ts-ignore TYPE NEEDS FIXING
      return [LOGO[currency.chainId], UNKNOWN_ICON]
    }

    if (currency?.isToken) {
      const defaultUrls = [...getCurrencyLogoUrls(currency)]
      // console.log({ defaultUrls })

      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, ...defaultUrls, UNKNOWN_ICON]
      }
      if (currency.symbol == 'BART') {
        return ['https://i.imgur.com/7oFiXmg.png']
      }

      if (currency?.symbol == 'PELO') {
        return ['https://i.imgur.com/6A2slSh.png']
      }
      if (currency?.symbol == 'BSP') {
        return [
          'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_32,q_auto/https://i.ibb.co/9W3cL3m/uniswap-uni-logo.png',
        ]
      }
      if (currency?.symbol == 'MEMELON') {
        return ['https://i.imgur.com/Nshz237.png']
      }
      if (currency?.symbol == 'BTB') {
        return ['https://i.ibb.co/vPmV0dV/229-CA986-2-E7-D-46-C4-A5-AF-D86-A88-E0207-F.png']
      }

      if (currency?.symbol == 'BTRS') {
        return ['https://etherscan.io/token/images/bitballtreasure_32.png']
      }

      if (currency?.symbol == 'WZETA') {
        return [ZetaLogo]
      }
      if (currency?.symbol == 'gETH') {
        return [EthereumLogo]
      }
      if (currency?.symbol == 'EMMET') {
        return ['https://i.ibb.co/mvLQxBS/Emmet-Logo-Green.png']
      }
      if (currency?.name === 'ZNS Token') {
        return ['https://i.ibb.co/rs7C7TR/ZNS-token-Logo.png']
      }
      if (currency?.symbol === 'ZNT') {
        return ['https://i.ibb.co/rs7C7TR/ZNS-token-Logo.png']
      }
      return defaultUrls
    }

    return [UNKNOWN_ICON]
  }, [currency, uriLocations])

  return <Logo srcs={srcs} width={size} height={size} alt={currency?.symbol} className={className} style={style} />
}

export default CurrencyLogo
