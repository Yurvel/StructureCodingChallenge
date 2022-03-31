import React from 'react'

import operationsTabsStyles from '../../../styles/OperationsTabs.module.css'

import { OperationsTab } from './OperationsTab'

export const OperationsTabs = ({ tabsList, activeTab, onChange }) => (
  <div className={operationsTabsStyles.operations}>
    {tabsList.map(tab => (
      <OperationsTab
        key={tab}
        label={tab}
        active={activeTab === tab}
        onClick={() => onChange(tab)}
      />
    ))}
  </div>
)
