import { ChainId, Token } from '@core-sdk'

export const WETH = new Token(
  ChainId.ZETA_TESTNET,
  '0x5f0b1a82749cb4e2278ec87f8bf6b618dc71a8bf',
  18,
  'WZETA',
  'Wrapped ZETA'
)
export const EMMET = new Token(ChainId.ZETA_TESTNET, '0xc03B1253770a34289f8Aa44b694b190dF9bb69b8', 18, 'EMMET', 'EMMET')
export const ZNT = new Token(ChainId.ZETA_TESTNET, '0x17ff5320C6fE629730dEAC6Ff0FD795246cfdD06', 18, 'ZNT', 'ZNS Token')
export const GETH = new Token(ChainId.ZETA_TESTNET, '0x13A0c5930C028511Dc02665E7285134B6d11A5f4', 18, 'gETH', 'gETH')
