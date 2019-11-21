import React, { Component } from 'react'
import Row from 'src/row'
import './App.scss'
import { winning } from 'src/utils'

const initState = {
  activePlayer: 1,
  errorMsg: '',
  winner: 0,
  turns: 0,
  board: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
}

class App extends Component {
  state = initState

  reset = e => {
    const newBoard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]

    this.setState({
      board: newBoard,
      winner: 0,
      turns: 0,
      activePlayer: 1,
      errorMsg: ''
    })
  }

  handleClick = (x, y, fieldData) => e => {
    const { board, activePlayer, turns, winner } = this.state
    const newPlayer = activePlayer === 1 ? 2 : 1

    switch (fieldData) {
      case 0:
        if (winner === 0) {
          board[x][y] = activePlayer
          this.setState({
            board,
            activePlayer: newPlayer,
            errorMsg: '',
            turns: turns + 1
          })
        }

        if (turns > 3) {
          const win = winning(board)
          if (win.isWinner) {
            this.setState({ winner: win.player })
          }
        }

        if (turns === 8) {
          this.setState({ errorMsg: 'draw' })
        }
        break
      default:
        this.setState({ errorMsg: 'Choose a empty Field' })
        break
    }
  }

  render() {
    const { board, errorMsg, winner, activePlayer, turns } = this.state

    return (
      <div className="App">
        <p>{`Current turn ${turns}`}</p>
        <p>{`Player ${activePlayer} Turn`}</p>
        {board.map((el, idx) => (
          <Row
            key={`${idx}`}
            x={idx}
            rowData={el}
            handleClick={this.handleClick}
          />
        ))}
        <p>{errorMsg && errorMsg}</p>
        <p>{winner !== 0 && `The winner is Player ${winner}`}</p>
        {winner !== 0 && <button onClick={this.reset}>Reset</button>}
        {errorMsg === 'draw' && <button onClick={this.reset}>Reset</button>}
      </div>
    )
  }
}

export default App
