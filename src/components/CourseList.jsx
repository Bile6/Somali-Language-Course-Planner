import React from 'react';
import CourseItem from './CourseItem';

const CourseList = ({ courses, deleteCourse, updateCourse }) => {
  return (
    <div className="p-4">
      {courses.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          deleteCourse={deleteCourse}
          updateCourse={updateCourse}
        />
      ))}
    </div>
  );
};

export default CourseList;
