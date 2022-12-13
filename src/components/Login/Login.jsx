import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import './Login.css';

const Login = ({ setToken }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const loginUser = async (credentials) => {
		return fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(credentials),
		}).then((data) => data.json());
	};

	const submitFormHandler = async (e) => {
		e.preventDefault();
		const token = await loginUser({ email, password });
		setToken(token);
		localStorage.setItem('token', token.result.split(' ')[1]);
		localStorage.setItem('username', token.user.name);
		navigate('/courses');
	};

	return (
		<div className='wrapper'>
			<form action='' className='reg-form' onSubmit={submitFormHandler}>
				<h1>Login</h1>
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
				<Button buttonText={'Login'} type={'submit'} onClick={() => {}} />
				<p>
					If you have an account you can{' '}
					<Link to={'/registration'}>Register</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
