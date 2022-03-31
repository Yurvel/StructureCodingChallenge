import React from 'react'

import trendingAssetStyles from '../../styles/TrendingAsset.module.css'

import UpTrendIcon from '../../assets/icons/upTrendIcon.svg'
import DownTrendIcon from '../../assets/icons/downTrendIcon.svg'

export const TrendingAsset = ({ asset }) => {
  const { label, amount, growth, change } = asset

  return (
    <div className={trendingAssetStyles.asset}>
      <div className={trendingAssetStyles.leftPanel}>
        <div className={trendingAssetStyles.mockRadio} />
        <div className={trendingAssetStyles.assetInfo}>
          <span className={trendingAssetStyles.assetLabel}>{label}</span>
          <span className={trendingAssetStyles.assetAmount}>{amount}</span>
        </div>
      </div>
      <div className={trendingAssetStyles.changeInfo}>
        {growth ? <UpTrendIcon /> : <DownTrendIcon />}
        <span className={trendingAssetStyles.change}>{change}</span>
      </div>
    </div>
  )
}
