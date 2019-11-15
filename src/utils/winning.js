export const winning = board => {
  // Add Winning Logic
  let winner = 0
  let counter = 0
  let init = 0

  // Left to Right Horizontal Check [0][0] [0][1] [0][2]
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
      let init = init || board[i][k]
      if (init === board[i][k]) {
        counter++
        if (counter === 3) {
          winner = init
        }
      } else {
        init = 0
        counter = 0
        break
      }
    }
  }

  // Diagonal check [0][0] [1][1] [2][2]
  for (let i = 0; i < board.length; i++) {
    let init = init || board[i][i]
    if (init === board[i][i]) {
      counter++
      if (counter === 3) {
        winner = init
      }
    } else {
      init = 0
      counter = 0
      break
    }
  }

  // Top Down Check [0][0] [1][0] [2][0]
  // --- ---- ----- [0][1] [1][1] [2][1]
  // --- ---- ----- [0][2] [1][2] [2][2]
  for (let i = 0, k = 0; i < board.length; i++) {
    let init = init || board[i][k]
    if (init === board[i][k]) {
      counter++
      if (counter === 3) {
        winner = init
      }
    } else {
      init = 0
      counter = 0
      k++
      break
    }

    if (i === 3) k++
  }

  const result = {
    isWinner: winner !== 0,
    player: winner
  }

  return result
}
