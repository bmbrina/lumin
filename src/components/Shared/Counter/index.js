import React from 'react'
import './style.scss'

export default function Counter({
  classList, // e.g. 'my-custom-class'
  decreaseEvent,
  increaseEvent,
  count
}) {
	return (
		<div className={`counter ${classList}`}>
      <span className="counter__action" onClick={decreaseEvent}>-</span>
      <span className="counter__text">{count}</span>
      <span className="counter__action" onClick={increaseEvent}>+</span>
		</div>
	)
}

Counter.defaultProps = {
  classList: '',
	quantity: 1,
}