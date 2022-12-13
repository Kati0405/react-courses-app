import React, { useState } from 'react';

import Button from '../../common/Button';
import CourseCard from '../Courses/components/CourseCard';
import SearchBar from '../../components/Courses/components/Search-bar';

import './Courses.css';

const Courses = ({ onClick, courses, authorsArray }) => {
	const [search, setSearch] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();
		setSearch(search);
	};

	const elements = courses
		.filter((data) => {
			if (search === '') return data;
			else if (data.title.toLowerCase().includes(search.toLowerCase()))
				return data;
			else if (data.id.toLowerCase().includes(search.toLowerCase()))
				return data;
			return false;
		})
		.map((course) => {
			let authorsResult = [];
			authorsArray
				.filter((el) => course.authors.includes(el.id))
				.forEach((el) => {
					authorsResult.push(el.name);
				});
			return (
				<li key={course.id}>
					<CourseCard
						id={course.id}
						title={course.title}
						description={course.description}
						creationDate={course.creationDate}
						duration={course.duration}
						authors={authorsResult.join(', ')}
					/>
				</li>
			);
		});

	return (
		<div className='courses'>
			<div className='action-panel'>
				<SearchBar
					search={search}
					onChange={(e) => setSearch(e.target.value)}
					onClick={(e) => {
						handleSearch(e);
					}}
				/>
				<Button buttonText={'Add new course'} onClick={onClick} />
			</div>
			<ul>{elements}</ul>
		</div>
	);
};

export default Courses;
