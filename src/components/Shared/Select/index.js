import React from 'react';
import './style.scss';

export default function Select({
  classList, // e.g. 'select--no-border'
	text, // e.g. 'Select an option'
  changeEvent,
  options
}) {
	return (
		<select
			className={`select ${classList}`}
			onChange={changeEvent}
		>
      {text &&
        <option
          value=''
          key={0}
        >
          {text}
        </option>
      }
      {options.map((option, index) => {
        return (
          <option
            value={option}
            key={index + 1}
          >
            {option}
          </option>
        );
      })}
		</select>
	);
}

Select.defaultProps = {
  options: ['a', 'b', 'c']
};