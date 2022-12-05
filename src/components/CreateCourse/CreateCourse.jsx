import React, { useState } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';

import { v4 as uuidv4 } from 'uuid';

import './CreateCourse.css';

import convertMinutes from '../../helpers/pipeDuration';
import generateDate from '../../helpers/dateGenerator';

const CreateCourse = ({
	active,
	setActive,
	courses,
	setCourses,
	courseAuthorsIds,
	setCourseAuthorsIds,
	authorsArray,
	setAuthorsArray,
}) => {
	const [authorName, setAuthorName] = useState('');
	const [durationInput, setDurationInput] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	let today = new Date();

	const validateForm = () => {
		if (
			title === '' ||
			description.length < 2 ||
			durationInput === 0 ||
			durationInput === '' ||
			courseAuthorsIds.length === 0
		) {
			alert('Please, fill in all fields');
			return false;
		}
		return true;
	};

	const addCourseHandler = () => {
		const valid = validateForm();
		if (valid) {
			setCourses([
				...courses,
				{
					id: uuidv4(),
					title,
					description,
					creationDate: generateDate(today),
					duration: durationInput,
					authors: courseAuthorsIds,
				},
			]);
			setActive(!active);
		}
	};

	const createAuthorHandler = () => {
		if (authorName) {
			setAuthorsArray([...authorsArray, { id: uuidv4(), name: authorName }]);
		}
	};

	const addAuthorToCurrentCourseHandler = (e) => {
		setCourseAuthorsIds([...courseAuthorsIds, e.target.value]);
	};

	const deleteAuthorFromCurrentCourseHandler = (e) => {
		setCourseAuthorsIds(courseAuthorsIds.filter((id) => id !== e.target.value));
	};

	const authors = authorsArray.map((author) => {
		if (courseAuthorsIds.includes(author.id)) return false;
		return (
			<li className='box-item' key={author.id}>
				<p>{author.name}</p>
				<Button
					type={'button'}
					value={author.id}
					buttonText={'Add author'}
					onClick={addAuthorToCurrentCourseHandler}
				/>
			</li>
		);
	});
	return (
		<form className='create-course' id='form' noValidate>
			<div className='form'>
				<div className='form-item'>
					<div className='input'>
						<span>Title</span>
						<Input
							onChange={(e) => {
								setTitle(e.target.value);
							}}
						/>
					</div>
					<Button
						buttonText={'Create course'}
						onClick={addCourseHandler}
						type={'button'}
						form={'form'}
					/>
				</div>
				<div className='textarea'>
					<span>Description</span>
					<textarea
						minLength='2'
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					></textarea>
				</div>
			</div>
			<div className='authors container'>
				<div className='box'>
					<h3>Add author</h3>
					<span>Author name</span>
					<Input
						placeholdetText={'Enter author name...'}
						onChange={(e) => {
							setAuthorName(e.target.value);
						}}
					/>
					<Button
						buttonText={'Create author'}
						onClick={createAuthorHandler}
						type={'button'}
					/>
				</div>
				<div className='box'>
					<h3>Authors</h3>
					<ul className='box-items-list'>{authors}</ul>
				</div>
				<div className='box'>
					<h3>Duration</h3>
					<span>Duration</span>
					<Input
						placeholdetText={'Enter course duration...'}
						value={durationInput}
						onChange={(e) => {
							setDurationInput(e.target.value.replace(/\D/g, ''));
						}}
					/>
					<p>
						Duration:{' '}
						<span className='duration'>{convertMinutes(durationInput)}</span>{' '}
						hours
					</p>
				</div>
				<div className='box'>
					<h3>Course authors</h3>
					<ul className='box-items-list'>
						{courseAuthorsIds.map((authorId) => {
							let author = authorsArray.filter((a) => a.id === authorId)[0];
							return (
								<li className='box-item' key={author.id}>
									<p>{author.name}</p>{' '}
									<Button
										value={author.id}
										buttonText={'Delete author'}
										onClick={deleteAuthorFromCurrentCourseHandler}
										type={'button'}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</form>
	);
};

export default CreateCourse;
