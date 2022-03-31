import React from 'react'

import headerActionsStyles from '../../styles/HeaderActions.module.css'

export const HeaderActions = () => (
  <div className={headerActionsStyles.headerMenu}>
    <button className={headerActionsStyles.lightButton}>Deposit</button>
    <button className={headerActionsStyles.lightButton}>Withdraw</button>
    <button className={headerActionsStyles.darkButton}>Trade</button>
    <div className={headerActionsStyles.userAvatar}>TE</div>
  </div>
)
