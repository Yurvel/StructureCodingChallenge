import React from 'react'

import graphTimestampStyles from '../../styles/GraphTimestamp.module.css'

export const GraphTimestamp = ({ label }) => (
  <span className={graphTimestampStyles.timestamp}>{label}</span>
)
