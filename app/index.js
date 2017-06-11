import React from 'react'
import { render } from 'react-dom'

// Include components
import Game from './containers/Game/index'

require('./global.scss')

render(
  <Game />,
  document.getElementById('root')
)
