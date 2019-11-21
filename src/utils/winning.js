export const winning = board => {
  const size = 3
  // Add Winning Logic
  let winner = 0
  let counter = 0
  let init = 0
  let wincase = ''

  // Left to Right Horizontal Check [0][0] [0][1] [0][2]
  for (let i = 0; i < board.length; i++) {
    init = 0
    counter = 0
    for (let k = 0; k < board[i].length; k++) {
      const value = board[i][k]

      if (value !== 0) {
        if (init === 0) {
          init = value
        }

        if (value === init) {
          counter++

          if (counter === size) {
            winner = value
            wincase = 'left 2 right'
          }
        }
      } else {
        break
      }
    }

    if (winner !== 0) {
      break
    }
  }

  // Diagonal check [0][0] [1][1] [2][2]
  if (winner === 0) {
    init = 0
    counter = 0
    for (let i = 0; i < board.length; i++) {
      const value = board[i][i]

      if (value !== 0) {
        if (init === 0) {
          init = value
        }

        if (value === init) {
          counter++

          if (counter === size) {
            winner = value
            wincase = 'diag check top left bot right'
          }
        }
      } else {
        break
      }
    }
  }

  // Diagonal check reverse [2][0] [1][1] [0][2]
  if (winner === 0) {
    init = 0
    counter = 0
    for (let i = 0, k = 2; i < board.length; i++, k--) {
      const value = board[k][i]

      if (value !== 0) {
        if (init === 0) {
          init = value
        }

        if (value === init) {
          counter++

          if (counter === size) {
            winner = value
            wincase = 'diag check bot right top left'
          }
        }
      } else {
        break
      }
    }
  }

  // Top Down Check [0][0] [1][0] [2][0]
  // --- ---- ----- [0][1] [1][1] [2][1]
  // --- ---- ----- [0][2] [1][2] [2][2]
  if (winner === 0) {
    for (let i = 0; i < board.length; i++) {
      counter = 0
      init = 0
      for (let k = 0; k < board.length; k++) {
        const value = board[k][i]
        console.log(`[${k}][${i}] = ${value}`)

        if (value !== 0) {
          if (init === 0) {
            init = value
          }

          if (value === init) {
            counter++

            if (counter === size) {
              winner = value
              wincase = 'top down'
              break
            }
          }
        } else {
          break
        }
      }

      if (winner !== 0) {
        break
      }
    }
  }

  const result = {
    isWinner: winner !== 0,
    player: winner,
    wincase: wincase
  }

  return result
}
