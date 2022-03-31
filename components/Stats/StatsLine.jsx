import React from 'react'

import statsLineStyles from '../../styles/StatsLine.module.css'

import { StatPoint } from './StatPoint'

export const StatsLine = ({ stats }) => (
  <div className={statsLineStyles.statsLine}>
    {stats.map(point => (
      <StatPoint key={point.id} point={point} />
    ))}
  </div>
)
