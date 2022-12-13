import React, { useState } from 'react';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { Link, useNavigate } from 'react-router-dom';

import './Registration.css';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [success, setSuccess] = useState(false);

	const navigate = useNavigate();

	const newUser = {
		name,
		password,
		email,
	};

	const submitFormHandler = async (e) => {
		e.preventDefault();

		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();
		if (result.successful) {
			setSuccess(true);
		}
	};

	React.useEffect(() => {
		if (success) {
			navigate('/login');
		}
	});

	return (
		<div className='wrapper'>
			<form action='' className='reg-form' onSubmit={submitFormHandler}>
				<h1>Registration</h1>
				<Input
					labelText={'Name'}
					placeholdetText={'Enter name'}
					required={'required'}
					name={'name'}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					labelText={'Email'}
					placeholdetText={'Enter email'}
					required={'required'}
					name={'email'}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					labelText={'Password'}
					placeholdetText={'Enter password'}
					required={'required'}
					name={'password'}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button buttonText={'Registration'} type={'submit'} />
				<p>
					If you have an account you can <Link to={'/login'}>Login</Link>
				</p>
			</form>
		</div>
	);
};

export default Registration;
