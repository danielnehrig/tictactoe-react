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
  topDown3,
  failCase,
  failCase2,
  failCase3
} from 'src/mocks'

const DIAG1 = 'diag check top left bot right'
const DIAG2 = 'diag check bot right top left'
const HOR = 'left 2 right'
const TOPDOWN = 'top down'
const FAILCASE = ''

describe('diagonal tests', () => {
  test('test diag 1', () => {
    const win = winning(diagWin)
    console.log(win.wincase)
    expect(win.wincase).toBe(DIAG1)
    expect(win.isWinner).toBe(true)
  })

  test('test diag 2', () => {
    const win = winning(diagWin2)
    console.log(win.wincase)
    expect(win.wincase).toBe(DIAG2)
    expect(win.isWinner).toBe(true)
  })

  test('test diag 3', () => {
    const win = winning(diagWin3)
    console.log(win.wincase)
    expect(win.wincase).toBe(DIAG2)
    expect(win.isWinner).toBe(true)
  })
})

describe('horizontal tests', () => {
  test('test hor 1', () => {
    const win = winning(horWinLR)
    console.log(win.wincase)
    expect(win.wincase).toBe(HOR)
    expect(win.isWinner).toBe(true)
  })

  test('test hor 2', () => {
    const win = winning(horWinLR2)
    console.log(win.wincase)
    expect(win.wincase).toBe(HOR)
    expect(win.isWinner).toBe(true)
  })

  test('test hor 3', () => {
    const win = winning(horWinLR2)
    console.log(win.wincase)
    expect(win.wincase).toBe(HOR)
    expect(win.isWinner).toBe(true)
  })
})

describe('top down tests', () => {
  test('test top down 1', () => {
    const win = winning(topDown)
    console.log(win.wincase)
    expect(win.wincase).toBe(TOPDOWN)
    expect(win.isWinner).toBe(true)
  })

  test('test top down 2', () => {
    const win = winning(topDown2)
    console.log(win.wincase)
    expect(win.wincase).toBe(TOPDOWN)
    expect(win.isWinner).toBe(true)
  })

  test('test top down 3', () => {
    const win = winning(topDown3)
    console.log(win.wincase)
    expect(win.wincase).toBe(TOPDOWN)
    expect(win.isWinner).toBe(true)
  })
})

describe('fail case tests', () => {
  test('fail 1', () => {
    const win = winning(failCase)
    console.log(win.wincase)
    expect(win.wincase).toBe(FAILCASE)
    expect(win.isWinner).toBe(false)
  })

  test('fail 2', () => {
    const win = winning(failCase2)
    console.log(win.wincase)
    expect(win.wincase).toBe(FAILCASE)
    expect(win.isWinner).toBe(false)
  })

  test('fail 3', () => {
    const win = winning(failCase3)
    console.log(win.wincase)
    expect(win.wincase).toBe(FAILCASE)
    expect(win.isWinner).toBe(false)
  })
})
