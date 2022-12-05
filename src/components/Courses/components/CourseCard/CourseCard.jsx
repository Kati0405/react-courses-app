import React from 'react';
import Button from '../../../../common/Button';

import './CourseCard.css';

import convertMinutes from '../../../../helpers/pipeDuration';

const CourseCard = ({
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
				<Button buttonText={'Show course'} />
			</div>
		</div>
	);
};

export default CourseCard;
