import React, { Component } from 'react'
import Col from 'src/col'
import './index.scss'

const Row = ({ x, rowData, handleClick }) => (
  <div className="row">
    {rowData.map((el, idx) => (
      <Col
        key={`${idx}`}
        colData={el}
        x={x}
        y={idx}
        handleClick={handleClick}
      />
    ))}
  </div>
)

export default Row
