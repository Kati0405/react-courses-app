import React from 'react';
import Button from '../../../../common/Button';

import { Link } from 'react-router-dom';

import './CourseCard.css';

import convertMinutes from '../../../../helpers/pipeDuration';

const CourseCard = ({
	id,
	title,
	description,
	creationDate,
	duration,
	authors,
}) => {
	return (
		<div className='course-card'>
			<div className='column flex-item'>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className='column raw-item'>
				<div className='description-item cut-text'>
					<span>Authors: </span>
					{authors}
				</div>
				<div className='description-item'>
					<span>Duration: </span>
					{`${convertMinutes(duration)} hours`}
				</div>
				<div className='description-item'>
					<span>Created: </span>
					{creationDate}
				</div>
				<Link to={`/courses/${id}`}>
					<Button buttonText={'Show course'} />
				</Link>
			</div>
		</div>
	);
};

export default CourseCard;
