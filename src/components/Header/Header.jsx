import React from 'react';

import './Header.css';

import Logo from '../Header/components/Logo';
import Button from '../../common/Button';

const Header = () => {
	return (
		<div className='header'>
			<Logo />
			<div>
				<span>Kati</span>
				<Button buttonText={'Logout'} />
			</div>
		</div>
	);
};

export default Header;
