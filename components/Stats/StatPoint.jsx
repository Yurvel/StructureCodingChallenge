import React from 'react'

import statPointStyles from '../../styles/StatPoint.module.css'

export const StatPoint = ({ point }) => {
  const { label, value } = point

  return (
    <div className={statPointStyles.point}>
      <span className={statPointStyles.pointValue}>{value}</span>
      <span className={statPointStyles.pointLabel}>{label}</span>
    </div>
  )
}
