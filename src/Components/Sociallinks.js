import React from 'react'
 
export const Sociallinks = () => {
  return (
    <div className=' hidden md:flex flex-col absolute    md:top-[35%]'> 

        
              <ul> 
                 <li className='flex ml-[-100px] hover:ml-[-5px] items-center h-10 rounded-md  duration-300 w-40  px-4 bg-gray-500 hover:bg-gradient-to-r from-indigo-500 via-pink-600 to-cyan-500'> <a href='https://github.com/vineethkumar12'rel="noreferrer" target="_blank" className=' flex justify-between items-center w-full  text-white' > Github<i className="fa-brands fa-github  fa-lg"></i></a></li>

                 <li className='flex ml-[-100px] hover:ml-[-5px] items-center h-10 rounded-md  duration-300 w-40  px-4 bg-gray-500 hover:bg-gradient-to-r from-sky-500 via-orange-600 to-indigo-500'> <a href='https://www.linkedin.com/in/vineeth-kumar-6358a2231/'rel="noreferrer" target="_blank" className='flex justify-between items-center w-full  text-white'>Linkedin<i className="fa-brands fa-linkedin-in fa-lg"></i> </a>  </li> 
                 <li className='flex ml-[-100px] hover:ml-[-5px] items-center h-10 rounded-md  duration-300 w-40  px-4 bg-gray-500 hover:bg-gradient-to-r from-green-500 via-gray-600 to-cyan-500'> <a href='https://www.facebook.com/adepuvineeth.vini'rel="noreferrer" target="_blank" className='flex justify-between items-center w-full  text-white'>Facebook<i className="fa-brands fa-facebook fa-lg"></i></a>  </li> 
                 <li className='flex ml-[-100px] hover:ml-[-5px] items-center h-10 rounded-md  duration-300 w-40  px-4 bg-gray-500 hover:bg-gradient-to-r from-red-500 via-blue-600 to-pink-500'> <a href='mailto:adepuvineethvinni@gmail.com' rel="noreferrer" target="_blank"className='flex justify-between items-center w-full  text-white'>Mail<i className="fa-solid fa-envelope fa-lg"></i></a>  </li> 
                
               </ul>
                      
    </div>
  )
}
