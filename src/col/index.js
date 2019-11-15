import React, { Component } from 'react'
import './index.scss'

const Col = ({ x, y, colData, handleClick }) => (
  <div className="col" onClick={handleClick(x, y, colData)}>
    {colData === 1 ? 'O' : colData === 2 ? 'X' : '?'}
  </div>
)

export default Col
