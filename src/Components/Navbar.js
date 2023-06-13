import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons' 
import { faHeart } from '@fortawesome/free-solid-svg-icons' 
import { useState } from 'react'
import './N.css' 
import { Link } from 'react-scroll'
 const Navbar = () => {   

  const [nav,setnav]=useState(false);
  const links=[{

    id:1,
    link:"home",

},{

  id:2,
  link:"about",

},{

id:3,
link:"Portfolio",

},{

id:4,
link:"experience",

},{

id:5,
link:"contact",

},];  

  
  
  return ( 
    <div >
    <div className='flex bg-yellow-500  fixed  justify-between items-center  z-10 w-full h-20 px-4' > 
     <div className='flex' > 
     <FontAwesomeIcon  className=" text-red-600 ml-2 mt-2"icon={ faHeart} beat />
     <h1 className='ml-2 font-a text-5xl'>vineeth</h1> 
     <FontAwesomeIcon  className=" text-red-600 ml-2 mt-2"icon={ faHeart} beat />
     </div>



<div >
     <ul className="hidden md:flex  space-x-9   " >
     {  links.map((link,i)=>{
 
 return (    
           <li  key={link.id} className=" visited:text-red-700  hover:underline capitalize flex justify-between cursor-pointer text-gray-700 hover:scale-125 duration-200 font-medium "> 
           < Link  to={links[i].link} smooth={true} offset={50} spy={true} duration={500} >
           
           {links[i].link} 
           
           </Link>
           
           
           
           </li> 
           
 )





} )    }

</ul>
</div>



  <div onClick={()=>setnav(!nav)} className="md:hidden">

   {nav? <FontAwesomeIcon className='cursor-pointer ' icon={faTimes} /> :<FontAwesomeIcon className='cursor-pointer' icon={faBars} />}   
  </div>   
    
 
    
  
     {  nav &&  
     
    <ul className="flex  md:hidden   j flex-col absolute  justify-center  h-96 w-56 right-0 mb-3 rounded-lg items-center ml-9    bg-gradient-to-b from-gray-800 via-black  to-gray-800 text-white-500   " >
       {links.map((link,i)=>{
 
 return (    
           <li  key={link.id} className=" hover:underline capitalize flex justify-between cursor-pointer text-gray-700 hover:scale-125 duration-200 font-medium "> 
           
           
           < Link onClick={()=>setnav(!nav)} to={links[i].link} smooth  offsetduration={500} >
           
           {links[i].link} 
           
           </Link>
           
           
           
           </li> 
           
     )





   }  ) } 

        </ul>
    
  } 

  





  </div>
  </div>
)} 
export default Navbar;
