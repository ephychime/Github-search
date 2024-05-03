
import React, { useState } from 'react';

export const RadioButton = () => {


  const SEARCH_TYPES = {
    ORGANIZATIONS: 'organizations',
    USERS: 'users',
  };


  const [searchType, setSearchType] = useState(SEARCH_TYPES.ORGANIZATIONS); 

  const handleSearchType= (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div className="flex mt-8 items-center justify-center">
      <input
        type="radio"
        name="searchType"
        value={SEARCH_TYPES.ORGANIZATIONS}
        checked={searchType === SEARCH_TYPES.ORGANIZATIONS}
        onChange={handleSearchType}
      />
      <p className="ml-2"> Organizations</p>

      <input
        type="radio"
        name="searchType"
        value={SEARCH_TYPES.USERS}
        checked={searchType === SEARCH_TYPES.USERS}
        onChange={handleSearchType}
        className="ml-4"
      />
      <p className="ml-2"> Users</p>
    </div>
  );
}


