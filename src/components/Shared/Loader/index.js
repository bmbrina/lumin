import React from 'react'
import './style.scss'

export default function Loader({
	classList, // e.g. error
	show, // true/false
	text // e.g. Loading products
}) {
	return (
		<div className={`loader ${classList} ${show ? 'loader--show' : ''}`}>
			<div className="loader__spinner"></div>
			<p className="loader__text">{text}</p>
    </div>
	)
}

Loader.defaultProps = {
	classList: '',
	show: false,
	text: ''
}