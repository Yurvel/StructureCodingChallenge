import React, { useState } from 'react'

import graphStyles from '../../styles/Graph.module.css'

import MockGraph from '../../assets/mockGraph.svg'

import { GraphPricePanel } from './GraphPricePanel'
import { GraphPeriods } from './GraphPeriods'
import { GraphTimestamps } from './GraphTimestamps'

const timestamps = [
  {
    id: 0,
    label: '1:30 PM',
  },
  {
    id: 1,
    label: '5:40 PM',
  },
  {
    id: 2,
    label: '9:50 PM',
  },
  {
    id: 3,
    label: '2:50 AM',
  },
  {
    id: 4,
    label: '6:50 AM',
  },
  {
    id: 5,
    label: '10:50 AM',
  },
]

const periods = [
  {
    id: 0,
    label: '1H',
  },
  {
    id: 1,
    label: '1D',
  },
  {
    id: 2,
    label: '1W',
  },
  {
    id: 3,
    label: '1M',
  },
  {
    id: 4,
    label: '1Y',
  },
  {
    id: 5,
    label: 'All',
  },
]

export const Graph = () => {
  const [activePeriod, setActivePeriod] = useState(1)

  return (
    <div className={graphStyles.graph}>
      <div className={graphStyles.graphHeader}>
        <GraphPricePanel />
        <GraphPeriods
          periods={periods}
          activePeriod={activePeriod}
          switchPeriod={setActivePeriod}
        />
      </div>
      <div className={graphStyles.graphBody}>
        <MockGraph />
      </div>
      <div className={graphStyles.graphFooter}>
        <GraphTimestamps timestamps={timestamps} />
      </div>
    </div>
  )
}
