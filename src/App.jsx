import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import Courses from './components/Courses';
import Header from './components/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import CourseInfo from './components/CourseInfo/CourseInfo';

import constants from './constants';

import './App.css';

import { UserProvider } from './userContext';

const App = () => {
	const [courses, setCourses] = useState(constants.mockedCoursesList);
	const [authorsArray, setAuthorsArray] = useState(constants.mockedAuthorsList);
	const [courseAuthorsIds, setCourseAuthorsIds] = useState([]);
	const [token, setToken] = useState();

	const navigate = useNavigate();

	const user = localStorage.getItem('username');

	return (
		<>
			<UserProvider value={user}>
				<Header />
			</UserProvider>
			<Routes>
				{!user ? (
					<>
						<Route path='/registration' element={<Registration />} />
						<Route
							path='/login'
							element={<Login setToken={setToken} token={token} />}
						/>
						<Route path='*' element={<Navigate to='/login' replace />} />
					</>
				) : (
					<>
						<Route path='/courses'>
							<Route
								index
								element={
									<Courses
										onClick={() => navigate('/courses/add')}
										courses={courses}
										courseAuthorsIds={courseAuthorsIds}
										authorsArray={authorsArray}
									/>
								}
							/>
							<Route
								path=':courseId'
								element={
									<CourseInfo courses={courses} authorsArray={authorsArray} />
								}
							/>
							<Route
								path='add'
								element={
									<CreateCourse
										courses={courses}
										setCourses={setCourses}
										courseAuthorsIds={courseAuthorsIds}
										setCourseAuthorsIds={setCourseAuthorsIds}
										authorsArray={authorsArray}
										setAuthorsArray={setAuthorsArray}
									/>
								}
							/>
						</Route>
						<Route path='*' element={<Navigate to='/courses' replace />} />
					</>
				)}
			</Routes>
		</>
	);
};

export default App;
