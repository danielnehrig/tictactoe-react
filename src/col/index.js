import React, { Component } from 'react'
import './index.scss'

const Col = ({ x, y, colData, handleClick }) => (
  <div className="col" onClick={handleClick(x, y, colData)}>
    {colData}
  </div>
)

export default Col
