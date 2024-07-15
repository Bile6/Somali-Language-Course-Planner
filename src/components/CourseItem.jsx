import React, { useState } from 'react';
import UpdateCourseForm from './UpdateCourseForm';

const CourseItem = ({ course, deleteCourse, updateCourse }) => {
  const [isEditing, setIsEditing] = useState(false);

  const cancelUpdate = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 p-4 my-2 rounded shadow-md">
      {isEditing ? (
        <UpdateCourseForm course={course} updateCourse={updateCourse} cancelUpdate={cancelUpdate} />
      ) : (
        <>
          <h2 className="text-xl font-bold">{course.title}</h2>
          <p>{course.description}</p>
          <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white py-1 px-2 rounded mr-2">
            Edit
          </button>
          <button onClick={() => deleteCourse(course.id)} className="bg-red-500 text-white py-1 px-2 rounded">
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default CourseItem;
