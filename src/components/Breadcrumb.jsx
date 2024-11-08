import React from 'react'
import { HiMiniHome } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Breadcrumb = ({currentPage , link}) => {
  return (
    <div className=' mb-3'>
        

<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li className="inline-flex items-center">
      <Link to="/dashboard" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"> 
    
   <HiMiniHome />
      Home
      <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
        </svg>

      </Link>
 
      
    </li>
    {link && link.map( (el  , index) =>      <li key={index} className="inline-flex items-center">
  
      <Link to={el.path} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"> 
    
   {el.name}
   <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
        </svg>
      
      </Link>
 
      
    </li>   )}
    <li>
      <div className="flex items-center">
   
        <p href="#" className="ms-1 text-sm font-medium text-gray-400 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{currentPage}</p>
      </div>
    </li>
  </ol>
</nav>


    </div>
  )
}

export default Breadcrumb