import React from 'react'

import graphTimestampsStyles from '../../styles/GraphTimestamps.module.css'

import { GraphTimestamp } from './GraphTimestamp'

export const GraphTimestamps = ({ timestamps }) => (
  <div className={graphTimestampsStyles.graphTimestamps}>
    {timestamps.map(({ id, label }) => (
      <GraphTimestamp key={id} label={label} />
    ))}
  </div>
)
