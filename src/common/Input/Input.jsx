import React from 'react';

import './Input.css';

const Input = ({ labelText, placeholdetText, onChange, value }) => {
	return (
		<>
			<label htmlFor={labelText}></label>
			<input
				type='text'
				placeholder={placeholdetText}
				onChange={onChange}
				value={value}
			/>
		</>
	);
};

export default Input;
