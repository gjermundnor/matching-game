import React from 'react'

import Header from '../../components/Header/index'
import Item from '../../components/Item/index'
require('./style.scss')

const per1 = [
  ['1', false],
  ['2', false],
  ['3', false],
  ['4', false],
  ['5', false],
  ['6', false],
  ['7', false],
  ['8', false]
]

const per2 = [
  ['1', false],
  ['2', false],
  ['3', false],
  ['4', false],
  ['5', false],
  ['6', false],
  ['7', false],
  ['8', false]
]

class Game extends React.Component {
  constructor () {
    super()

    this.state = {
      tiles: [],
      active: null,
      disable: false,
      matches: 0,
      tries: 0
    }
  }

  componentDidMount () {
    const matching = [...per1, ...per2]
    const shuffleArray = (arr) => arr.sort(() => (Math.random() - 0.5))

    const shuffledArray = shuffleArray(matching)
    this.setState({tiles: shuffledArray})
  }

  match (data, place) {
    const { tiles, active, matches, tries } = this.state

    tiles[place][1] = true
    this.setState({tiles})
    // Set current clicked to true
    // Map over animals
    if (active === null) { // OPEN ONE MORE
      this.setState({active: place})
    } else {
      if (tiles[active][0] === tiles[place][0]) { // MATCH
        this.setState({
          active: null,
          matches: matches + 1,
          tries: tries + 1
        })
      } else { // NO MATCH
        this.setState({disable: true, tries: tries + 1})
        setTimeout(() => {
          tiles[active][1] = false
          tiles[place][1] = false
          this.setState({tiles, active: null, disable: false})
        }, 1000)
      }
    }
  }

  tiles () {
    const { tiles, disable } = this.state

    return tiles.map((d, i) =>
      <Item disable={disable} clicked={(e) => this.match(d, i)} data={d} key={i} />
    )
  }

  header () {
    const { animals } = this.state

    const win = animals.find((item) => item[1] === false)

    if (win === undefined) {
      return <h1>WIN !! CONGRATULATION</h1>
    } else {
      return <h1>Enoy the game</h1>
    }
  }

  render () {
    const { matches, tiles, tries } = this.state

    return (
      <div className='container'>
        <Header matches={matches} total={tiles.length} tries={tries} />
        <div className='game-box'>
          { this.tiles() }
        </div>
      </div>
    )
  }
}

export default Game
