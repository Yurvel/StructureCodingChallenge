import React from 'react'

import commonStyles from '../../styles/Common.module.css'
import breadcrumbsStyles from '../../styles/Breadcrumbs.module.css'

import RightArrowIcon from '../../assets/icons/rightArrowIcon.svg'

export const Breadcrumbs = () => (
  <div className={commonStyles.appContainer}>
    <div className={breadcrumbsStyles.breadcrumbs}>
      <span className={breadcrumbsStyles.breadcrumb}>All Assets</span>
      <RightArrowIcon />
      <span className={breadcrumbsStyles.breadcrumb}>Bitcoin</span>
    </div>
  </div>
)
