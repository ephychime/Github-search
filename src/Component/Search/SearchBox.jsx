
export const SearchBox = () => {
  
    const textColor = "font-bold"

    return (
      <div>
        <div className='mx-auto mt-8 flex justify-between gap-4 items-center sm:w-1/2 md:w-2/3 lg:w-1/3'>
          <input type='text' className="rounded border-2 border-blue-500 lg:w-full sm:w-64 text-sm p-2 h-10" placeholder='Type here' />
          <button className='rounded bg-green-600 w-24 text-sm text-white p-2'>Search</button>
        </div>
  
        <div className="text-sm flex gap-1 text-sm text-gray-500 justify-center py-2 mt-10 text-center">
          <p className={textColor}>461,445</p> projects,
          <p className={textColor}>1,009,348</p> branches,
          <p className={textColor}>77,528</p> Git repositories,
          <p className={textColor}>807,406 </p><p>answers and counting...</p>
        </div>
      </div>
    );
  };
  

  