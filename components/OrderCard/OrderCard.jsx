import React, { useState } from 'react'

import { Order } from './Order/Order'
import { AssetsList } from './AssetsList/AssetsList'

const STEP_NAMES = {
  order: 'Order',
  assetsList: 'AssetsList',
}

const StepView = ({ active, children }) => (active ? children : null)

export const OrderCard = () => {
  const [activeStep, setActiveStep] = useState(STEP_NAMES.order)

  const steps = [
    {
      name: STEP_NAMES.order,
      component: <Order onStepChange={() => setActiveStep(STEP_NAMES.assetsList)} />,
    },
    {
      name: STEP_NAMES.assetsList,
      component: <AssetsList onStepChange={() => setActiveStep(STEP_NAMES.order)} />,
    },
  ]

  return (
    <>
      {steps.map(({ name, component }) => (
        <StepView key={name} active={activeStep === name}>
          {component}
        </StepView>
      ))}
    </>
  )
}
