import React from 'react';

import './Button.css';

const Button = ({ buttonText, onClick, value, type, form }) => {
	return (
		<button
			className='button'
			onClick={onClick}
			value={value}
			type={type}
			form={form}
		>
			{buttonText}
		</button>
	);
};

export default Button;
