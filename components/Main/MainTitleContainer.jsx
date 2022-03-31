import React from 'react'

import mainTitleContainerStyles from '../../styles/MainTitleContainer.module.css'

import { MainTitle } from './MainTitle'
import { MainTitleActions } from './MainTitleActions'

export const MainTitleContainer = () => (
  <div className={mainTitleContainerStyles.titleContainer}>
    <MainTitle />
    <MainTitleActions />
  </div>
)
