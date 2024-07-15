import React, { useState } from 'react';
import CourseList from '../components/CourseList';
import AddCourseForm from '../components/AddCourseForm';
import SearchCourse from '../components/SearchCourse';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addCourse = (course) => {
    setCourses([...courses, { id: courses.length + 1, ...course }]);
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const updateCourse = (id, updatedCourse) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, ...updatedCourse } : course
      )
    );
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 container mx-auto p-4 border rounded">
      <SearchCourse searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <AddCourseForm addCourse={addCourse} />
      <CourseList courses={filteredCourses} deleteCourse={deleteCourse} updateCourse={updateCourse} />
    </div>
  );
};

export default Home;
