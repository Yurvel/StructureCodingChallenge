import React from 'react'

import mainTitleActionsStyles from '../../styles/MainTitleActions.module.css'

import ShareIcon from '../../assets/icons/shareIcon.svg'
import EyeIcon from '../../assets/icons/eyeIcon.svg'

export const MainTitleActions = () => (
  <div className={mainTitleActionsStyles.actions}>
    <div className={mainTitleActionsStyles.action}>
      <ShareIcon />
    </div>
    <div className={mainTitleActionsStyles.action}>
      <EyeIcon />
    </div>
  </div>
)
