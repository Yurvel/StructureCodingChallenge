import React from 'react'

import commonStyles from '../../styles/Common.module.css'
import headerStyles from '../../styles/Header.module.css'

import Logo from '../../assets/logo.svg'

import { HeaderActions } from './HeaderActions'

export const Header = () => (
  <>
    <div className={commonStyles.appContainer}>
      <div className={headerStyles.header}>
        <div className={headerStyles.logo}>
          <Logo />
        </div>
        <HeaderActions />
      </div>
    </div>
    <div className={commonStyles.fullWidthDivider} />
  </>
)
