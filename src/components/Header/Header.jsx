import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import Logo from '../Header/components/Logo';
import Button from '../../common/Button';

import UserContext from '../../userContext';

import './Header.css';

const Header = () => {
	const navigate = useNavigate();

	const user = useContext(UserContext);

	return (
		<div className='header'>
			<Logo />
			<div>
				{' '}
				<span>{user}</span>
				{user && (
					<Button
						buttonText={'Logout'}
						onClick={() => {
							localStorage.clear();
							navigate('/login');
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Header;
