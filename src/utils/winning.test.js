import { winning } from './winning'
import {
  diagWin,
  diagWin2,
  diagWin3,
  horWinLR,
  horWinLR2,
  horWinLR3,
  topDown,
  topDown2,
  topDown3
} from 'src/mocks'

describe('diagonal tests', () => {
  test('test diag 1', () => {
    const win = winning(diagWin)
    expect(win.isWinner).toBe(true)
  })

  test('test diag 2', () => {
    const win = winning(diagWin2)
    expect(win.isWinner).toBe(true)
  })

  test('test diag 3', () => {
    const win = winning(diagWin3)
    expect(win.isWinner).toBe(true)
  })
})

describe('horizontal tests', () => {
  test('test hor 1', () => {
    const win = winning(horWinLR)
    expect(win.isWinner).toBe(true)
  })

  test('test hor 2', () => {
    const win = winning(horWinLR2)
    expect(win.isWinner).toBe(true)
  })

  test('test hor 3', () => {
    const win = winning(horWinLR2)
    expect(win.isWinner).toBe(true)
  })
})

describe('top down tests', () => {
  test('test top down 1', () => {
    const win = winning(topDown)
    expect(win.isWinner).toBe(true)
  })

  test('test top down 2', () => {
    const win = winning(topDown2)
    expect(win.isWinner).toBe(true)
  })

  test('test top down 3', () => {
    const win = winning(topDown3)
    expect(win.isWinner).toBe(true)
  })
})
