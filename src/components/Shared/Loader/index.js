import React from 'react'
import './style.scss'

export default function Loader({
	show // true/false
}) {
	return (
		<div className={`loader ${show ? 'loader--show' : ''}`}>

    </div>
	)
}

Loader.defaultProps = {
	show: false
}