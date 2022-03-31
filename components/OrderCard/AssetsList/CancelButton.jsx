import React from 'react'

import cancelButtonStyles from '../../../styles/CancelButton.module.css'

export const CancelButton = ({ onClick }) => (
  <button className={cancelButtonStyles.lightButton} onClick={onClick}>
    Cancel
  </button>
)
