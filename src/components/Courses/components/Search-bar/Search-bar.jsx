import React from 'react';

import Input from '../../../../common/Input';
import Button from '../../../../common/Button';

import './Search-bar.css';

const SearchBar = ({ onChange, onClick, search }) => {
	return (
		<div className='search-bar'>
			<Input
				placeholdetText={'Enter course name or id...'}
				onChange={onChange}
				search={search}
			/>
			<Button buttonText={'Search'} onClick={onClick} />
		</div>
	);
};

export default SearchBar;
