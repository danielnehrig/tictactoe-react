export const winning = board => {
  const size = 3
  // Add Winning Logic
  let winner = 0
  let counter = 0
  let init = 0

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
            console.log('winner left 2 right')
          }
        }
      } else {
        break
      }
    }

    if (winner !== 0) break
  }

  // Diagonal check [0][0] [1][1] [2][2]

  // Diagonal check reverse [0][2] [1][1] [2][0]

  // Top Down Check [0][0] [1][0] [2][0]
  // --- ---- ----- [0][1] [1][1] [2][1]
  // --- ---- ----- [0][2] [1][2] [2][2]

  const result = {
    isWinner: winner !== 0,
    player: winner
  }

  return result
}
