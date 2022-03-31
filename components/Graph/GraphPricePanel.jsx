import React from 'react'

import graphPricePanelStyles from '../../styles/GraphPricePanel.module.css'

export const GraphPricePanel = () => (
  <div className={graphPricePanelStyles.pricePanel}>
    <div className={graphPricePanelStyles.price}>
      <span className={graphPricePanelStyles.sign}>$</span>
      <span className={graphPricePanelStyles.integer}>39,391</span>
      <span className={graphPricePanelStyles.decimal}>.20</span>
    </div>
    <div className={graphPricePanelStyles.change}>+2.88%</div>
  </div>
)
