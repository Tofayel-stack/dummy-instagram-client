import React, { useContext } from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa6";
import { PiFilmReel } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContextElements';
import { useQuery } from 'react-query';

import '../../../src/App.css'

const SideNav = () => {
    const {user,userSignOUt} = useContext(AuthContext)

    const {data:userData} = useQuery({
        queryKey:[user?.email],
        queryFn: async()=>{
            const res = await fetch(`https://dummy-instagram-server.vercel.app/user?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    const profile = userData?.data
    const userPhoto = profile?.uploadedPhotoURL



    // console.log(profile);

    const handelSubmit = () =>{

        const confirm = window.confirm("Are you leaving ? ")
        if(confirm){
            userSignOUt()
        }
       
    }

    return (
        <div>

            {/* loged user show  */}

            <h1 className='text-center text-amber-700 font-semibold mt-3 mb-0 bg-white'>User : {user?.email}</h1>


               <ul className="menu gap-y-4 bg-white p-4 w-80 min-h-full border-x text-base-content h-screen">
                    {/* Sidebar content here */}
                    <li><Link to='/' className='font-semibold text-3xl logoFont'> Panchogram </Link></li>
                    <li><Link to='/'><IoMdHome className='text-xl' /> Home</Link></li>
                    <li><a><FaSearch className='text-xl'  />Search</a></li>
                    <li><a><FaRegCompass className='text-xl'  />Explore</a></li>
                    <li><Link to='/reels'> <PiFilmReel className='text-xl'  />Reels</Link></li>
                    <li><a> <FaTelegramPlane  className='text-xl' />Message</a></li>
                    <li><a><IoMdHeartEmpty  className='text-xl' /> Notifications</a></li>
                    <li><Link to='/create-post'><MdOutlineAddToPhotos className='text-xl'  />Create</Link></li>
                    {
                        user? 

                        <li><a onClick={handelSubmit}><IoMdLogOut className='text-xl text-red-600'  />LogOut</a></li>

                        :

                        <li><Link to='/signIn'><IoMdLogOut className='text-xl text-red-600'  />Login</Link></li>
                    }
                    

                  
                    <div className='flex items-center'>
                    <div className='w-12 mask mask-squircle'>
                        {
                            user?  <img  src={userPhoto}/> : <img  src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png'/>
                        }
                           
                            
                        </div>
                        <b><Link to='/profile'>&nbsp; Profile</Link></b>
                    
                    </div>
                  

                    

                </ul>

             

        </div>
    );
};

export default SideNav;