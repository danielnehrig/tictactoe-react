import React, { Component } from 'react'
import Row from 'src/row'
import './App.scss'

class App extends React.Component {
  state = {
    activePlayer: 1,
    board: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ],
    errorMsg: '',
    winner: 0,
    turns: 0
  }

  winner = () => {
    const { turns, board } = this.state
    let theWinner = 0
    // Add Winning Logic
    // this.setState({ winner: theWinner })
  }

  handleClick = (x, y, fieldData) => e => {
    const { board, activePlayer, turns } = this.state
    const newPlayer = activePlayer === 1 ? 2 : 1
    switch (fieldData) {
      case 0:
        board[x][y] = activePlayer
        this.setState({
          board,
          activePlayer: newPlayer,
          errorMsg: '',
          turns: turns + 1
        })
        break
      default:
        this.setState({ errorMsg: 'Choose a empty Field' })
        break
    }

    if (turns > 2) {
      this.winner()
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
      </div>
    )
  }
}

export default App
