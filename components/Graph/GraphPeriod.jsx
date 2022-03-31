import React from 'react'

import graphPeriodStyles from '../../styles/GraphPeriod.module.css'

export const GraphPeriod = ({ label, active, onClick }) => (
  <span
    onClick={onClick}
    className={active ? graphPeriodStyles.activePeriod : graphPeriodStyles.period}
  >
    {label}
  </span>
)
