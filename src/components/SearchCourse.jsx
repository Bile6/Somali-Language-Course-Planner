import React from 'react';

const SearchCourse = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Courses"
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SearchCourse;
