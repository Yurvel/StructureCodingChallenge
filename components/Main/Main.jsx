import React from 'react'

import commonStyles from '../../styles/Common.module.css'
import mainStyles from '../../styles/Main.module.css'

import { MainTitleContainer } from './MainTitleContainer'
import { Graph } from '../Graph/Graph'
import { Stats } from '../Stats/Stats'
import { News } from '../News/News'
import { OrderCard } from '../OrderCard/OrderCard'
import { Trending } from '../Trending/Trending'

export const Main = () => (
  <div className={commonStyles.appContainer}>
    <MainTitleContainer />
    <din className={mainStyles.componentsGrid}>
      <div className={mainStyles.leftColumn}>
        <Graph />
        <Stats />
        <News />
      </div>
      <div className={mainStyles.rightColumn}>
        <OrderCard />
        <Trending />
      </div>
    </din>
  </div>
)
