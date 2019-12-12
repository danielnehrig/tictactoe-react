import React, { Component } from 'react'
import io from 'socket.io-client'
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
  socket = io('ws://localhost:3001')

  reset = e => {
    const newBoard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]

    this.socket.emit('reset', newBoard)
  }

  componentWillMount() {
    this.socket.on('reset', board => {
      this.setState({
        board,
        winner: 0,
        turns: 0,
        activePlayer: 1,
        errorMsg: ''
      })
    })

    this.socket.on('winLogic', winner => {
      console.log(winner)
      this.setState({ winner: winner })
    })

    this.socket.on('errorMsg', draw => {
      console.log(draw)
      this.setState({ errorMsg: draw })
    })

    this.socket.on('placed', ({ activePlayer, board, turns }) => {
      const newPlayer = activePlayer === 1 ? 2 : 1

      this.setState({
        board,
        activePlayer: newPlayer,
        errorMsg: '',
        turns: turns + 1
      })
    })
  }

  handleClick = (x, y, fieldData) => e => {
    const { board, activePlayer, turns, winner } = this.state
    const newPlayer = activePlayer === 1 ? 2 : 1

    switch (fieldData) {
      case 0:
        if (winner === 0) {
          board[x][y] = activePlayer
          const socketData = {
            x,
            y,
            fieldData,
            board,
            turns,
            activePlayer
          }

          this.socket.emit('placed', socketData)
        }

        if (turns > 3) {
          const win = winning(board)
          if (win.isWinner) {
            this.socket.emit('winLogic', win.player)
            // this.setState({ winner: win.player })
          }

          if (turns === 8 && !win.isWinner) {
            this.socket.emit('errorMsg', 'draw')
            // this.setState({ errorMsg: 'draw' })
          }
        }

        break
      default:
        this.setState({ errorMsg: 'Choose a empty Field' })
        break
    }
  }

  render() {
    const { board, errorMsg, winner, activePlayer, turns } = this.state

    if (this.socket) {
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
    } else {
      return <h1>woot</h1>
    }
  }
}

export default App
