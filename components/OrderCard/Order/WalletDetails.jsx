import React from 'react'

import walletDetailsStyles from '../../../styles/WalletDetails.module.css'

import CryptoIcon from '../../../assets/icons/cryptoIcon.svg'

export const WalletDetails = () => (
  <div className={walletDetailsStyles.walletDetails}>
    <span className={walletDetailsStyles.walletBalance}>ETH Wallet: $29,778.36</span>
    <div className={walletDetailsStyles.actions}>
      <div className={walletDetailsStyles.action}>
        <CryptoIcon />
      </div>
      <div className={walletDetailsStyles.action}>MAX</div>
    </div>
  </div>
)
