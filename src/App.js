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
    winner: 0
  }

  winner = () => {
    console.log('winner logic')
  }

  handleClick = (x, y, fieldData) => e => {
    console.log('clicked')
  }

  render() {
    const { board, errorMsg, winner, activePlayer } = this.state

    return (
      <div className="App">
        {`Player ${activePlayer} Turn`}
        {board.map((el, idx) => (
          <Row
            key={`${idx}`}
            x={idx}
            rowData={el}
            handleClick={this.handleClick}
          />
        ))}
        {errorMsg && errorMsg}
        {winner !== 0 && `The winner is ${winner}`}
      </div>
    )
  }
}

export default App
