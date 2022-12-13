import React from 'react';

import './Input.css';

const Input = ({
	labelText,
	placeholdetText,
	onChange,
	value,
	required,
	name,
}) => {
	return (
		<>
			<label htmlFor={name}>{labelText}</label>
			<input
				type='text'
				placeholder={placeholdetText}
				onChange={onChange}
				value={value}
				required={required}
				name={name}
			/>
		</>
	);
};

export default Input;
