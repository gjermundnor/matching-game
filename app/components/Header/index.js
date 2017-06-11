import React from 'react'

require('./style.scss')

class Header extends React.Component {
  status () {
    const { matches, total } = this.props

    return (
      <div className='box'>
        <span>Found</span>
        <span className='number'>{matches}/{total / 2}</span>
      </div>
    )
  }

  tries () {
    const { tries } = this.props

    return (
      <div className='box'>
        <span>Tries</span>
        <span className='number'>{tries}</span>
      </div>
    )
  }

  render () {
    return (
      <div className='header'>
        <h1>The matching game</h1>
        <div className='stats'>
          { this.tries() }
          { this.status() }
        </div>
      </div>
    )
  }
}

export default Header
