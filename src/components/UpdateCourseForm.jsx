import React, { useState, useEffect } from 'react';

const UpdateCourseForm = ({ course, updateCourse, cancelUpdate }) => {
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);

  useEffect(() => {
    setTitle(course.title);
    setDescription(course.description);
  }, [course]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCourse(course.id, { title, description });
    cancelUpdate();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
        Update Course
      </button>
      <button type="button" onClick={cancelUpdate} className="bg-gray-500 text-white py-2 px-4 rounded">
        Cancel
      </button>
    </form>
  );
};

export default UpdateCourseForm;
