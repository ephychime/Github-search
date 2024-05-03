
import github from "../../Assest/github.jpeg"

export const Header = () => {
    return (
      <div>
        <nav className="mt-4 w-3/4 mx-auto">
          <div className='flex justify-between items-center'>
            <img src={github} alt='github-icon' className='w-24 h-16' />
          </div>
        </nav>
        <hr className='border w-3/4 border-gray-300 mx-auto'></hr>
      </div>
    )
  }
  
  