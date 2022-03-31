import React from 'react'

import graphPeriodsStyles from '../../styles/GraphPeriods.module.css'

import { GraphPeriod } from './GraphPeriod'

export const GraphPeriods = ({ periods, activePeriod, switchPeriod }) => (
  <div className={graphPeriodsStyles.periodPanel}>
    {periods.map(({ id, label }) => (
      <GraphPeriod
        key={id}
        label={label}
        active={activePeriod === id}
        onClick={() => switchPeriod(id)}
      />
    ))}
  </div>
)
