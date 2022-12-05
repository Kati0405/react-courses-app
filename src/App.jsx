import React, { useState } from 'react';

import Courses from './components/Courses';
import Header from './components/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';

import constants from './constants';

import './App.css';

const App = () => {
	const [active, setActive] = useState(false);
	const [courses, setCourses] = useState(constants.mockedCoursesList);
	const [authorsArray, setAuthorsArray] = useState(constants.mockedAuthorsList);
	const [courseAuthorsIds, setCourseAuthorsIds] = useState([]);

	return (
		<>
			<Header />
			<div className='courses'>
				{active ? (
					<CreateCourse
						active={active}
						setActive={setActive}
						courses={courses}
						setCourses={setCourses}
						courseAuthorsIds={courseAuthorsIds}
						setCourseAuthorsIds={setCourseAuthorsIds}
						authorsArray={authorsArray}
						setAuthorsArray={setAuthorsArray}
					/>
				) : (
					<Courses
						onClick={() => setActive(!active)}
						courses={courses}
						courseAuthorsIds={courseAuthorsIds}
						authorsArray={authorsArray}
					/>
				)}
			</div>
		</>
	);
};

export default App;
