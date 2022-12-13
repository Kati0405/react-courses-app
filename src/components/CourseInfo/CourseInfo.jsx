import React from 'react';
import { useParams, Link } from 'react-router-dom';

import convertMinutes from '../../helpers/pipeDuration';

import './CourseInfo.css';

const CourseInfo = ({ courses, authorsArray }) => {
	const { courseId } = useParams();

	const getCurrentCourse = () => {
		const course = courses.find((el) => {
			if (el.id === courseId) {
				return el;
			}
			return false;
		});
		return course;
	};

	const currentCourse = getCurrentCourse();

	const getAuthorsNames = () => {
		let authorsResult = [];
		authorsArray
			.filter((el) => currentCourse.authors.includes(el.id))
			.forEach((el) => {
				authorsResult.push(el.name);
			});
		return authorsResult;
	};

	const currentCourseAuthors = getAuthorsNames();

	const authorItem = currentCourseAuthors.map((el) => {
		return <li key={el}>{el}</li>;
	});

	return (
		<div className='course-info'>
			<button className='back-btn'>
				<Link to='/courses'>Back to courses</Link>
			</button>
			<h1>{currentCourse.title}</h1>
			<div className='course-info-card'>
				<div className='column flex-item'>
					<p>{currentCourse.description}</p>
				</div>
				<div className='column raw-item'>
					<div className='description-item'>
						<span>ID</span>
						<p>{courseId}</p>
					</div>
					<div className='description-item'>
						<span>Duration</span>
						<p>{`${convertMinutes(currentCourse.duration)} hours`}</p>
					</div>
					<div className='description-item'>
						<span>Created</span>
						<p>{currentCourse.creationDate}</p>
					</div>
					<div className='description-item'>
						<span>Authors</span>
						<ul>{authorItem}</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
