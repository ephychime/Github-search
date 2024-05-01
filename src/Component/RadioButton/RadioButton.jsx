
import React, { useState } from 'react';

export const RadioButton = () => {

  const [searchType, setSearchType] = useState('organizations'); 

  const handleSearchType= (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div className="flex mt-8 items-center justify-center">
      <input
        type="radio"
        name="searchType"
        value="organizations"
        checked={searchType === 'organizations'}
        onChange={handleSearchType}
      />
      <p className="ml-2"> Organizations</p>

      <input
        type="radio"
        name="searchType"
        value="users"
      
        onChange={handleSearchType}
        className="ml-4"
      />
      <p className="ml-2"> Users</p>
    </div>
  );
}


