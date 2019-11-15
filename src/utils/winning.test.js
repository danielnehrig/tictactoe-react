import { winning } from './winning'

const diagWin = [
  [1, 0, 0],
  [2, 1, 0],
  [0, 2, 1]
]

const diagWin2 = [
  [1, 0, 2],
  [0, 2, 0],
  [2, 0, 1]
]

const horWinLR = [
  [1, 1, 1],
  [2, 2, 0],
  [0, 0, 0]
]

const horWinLR2 = [
  [1, 0, 0],
  [2, 2, 2],
  [0, 1, 0]
]

const topDown = [
  [2, 0, 0],
  [2, 1, 0],
  [2, 1, 0]
]

const topDown2 = [
  [0, 1, 0],
  [2, 1, 0],
  [2, 1, 0]
]

test('test diag 1', () => {
  const win = winning(diagWin)
  expect(win.isWinner).toBe(true)
})

// Fail
test('test diag 2', () => {
  const win = winning(diagWin2)
  expect(win.isWinner).toBe(true)
})

// Fail
test('test hor 1', () => {
  const win = winning(horWinLR)
  expect(win.isWinner).toBe(true)
})

test('test hor 2', () => {
  const win = winning(horWinLR2)
  expect(win.isWinner).toBe(true)
})

test('test top down 1', () => {
  const win = winning(topDown)
  expect(win.isWinner).toBe(true)
})

test('test top down 2', () => {
  const win = winning(topDown2)
  expect(win.isWinner).toBe(true)
})
