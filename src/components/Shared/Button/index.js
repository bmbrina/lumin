import React from 'react'
import './style.scss'

export default function Button({
	classList, // e.g. 'btn-primary my-custom-class'
	text, // e.g. 'Click Me'
	clickEvent
}) {
	return (
		<button
			className={`btn ${classList}`}
			onClick={clickEvent}
		>
		{text}
		</button>
	)
}

Button.defaultProps = {
	classList: "btn-primary",
	text: "Click Me",
}