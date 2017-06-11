import React from 'react'

require('./style.scss')

class Item extends React.Component {
  constructor () {
    super()

    this.flip = this.flip.bind(this)
  }

  flip () {
    this.props.clicked()
  }

  render () {
    const openClose = this.props.data[1] ? 'open' : 'closed'
    const disabled = this.props.disable ? 'disabled' : ''
    return (
      <div className='item'>
        <div className={`inner-item ${openClose} ${disabled} type${this.props.data[0]}`} onClick={this.flip}>
          { this.props.data[0] }
        </div>
      </div>
    )
  }
}

export default Item
