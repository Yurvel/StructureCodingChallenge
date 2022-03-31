import React from 'react'

import submitButtonStyles from '../../../styles/SubmitButton.module.css'

export const SubmitButton = ({ onClick }) => (
  <button className={submitButtonStyles.darkButton} onClick={onClick}>
    Buy BTC
  </button>
)
