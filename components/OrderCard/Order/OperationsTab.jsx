import React from 'react'

import operationsTabStyles from '../../../styles/OperationsTab.module.css'

export const OperationsTab = ({ label, active, onClick }) => (
  <span
    className={active ? operationsTabStyles.selectedOperation : operationsTabStyles.operation}
    onClick={onClick}
  >
    {label}
  </span>
)
