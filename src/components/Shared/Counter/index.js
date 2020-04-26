import React from 'react'
import './style.scss'

export default function Counter({
  classList, // e.g. 'my-custom-class'
  decreaseEvent,
  increaseEvent,
  quantity
}) {
	return (
		<div className={`counter ${classList}`}>
      <span className="counter__action" onClick={decreaseEvent}>-</span>
      <span className="counter__text">{quantity}</span>
      <span className="counter__action" onClick={increaseEvent}>+</span>
		</div>
	)
}

Counter.defaultProps = {
  classList: '',
	quantity: 1,
}