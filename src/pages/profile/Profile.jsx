import React, { useContext } from 'react';
import PhotoGallery from '../../components/dummyPostPhoto/PhotoGallery';
import { AuthContext } from '../../context/AuthContextElements';
import { useQuery } from 'react-query';

const Profile = () => {


    const {user} = useContext(AuthContext)
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







    return (
        <div>
            <div className="bg-gray-50">
            {/* Profile Header */}
            <div className="bg-white py-16">
                <div className="container mx-auto flex flex-wrap justify-center items-center">
                <img
                    src={userPhoto}
                    alt="Profile Picture"
                    className="h-36 w-36 rounded-full object-cover border-4 border-white"
                />
                <div className="ml-4">
                    <h1 className="text-2xl font-semibold">{user?.email}</h1>
                    <p className="text-gray-600">{user?.displayName}</p>
                </div>
                <div className="ml-4">
                    <p className="text-gray-600 btn capitalize">Edit profile</p>
                </div>
                <div className="ml-4">
                    <p className="text-gray-600 btn capitalize">See Archive</p>
                </div>
                </div>
            </div>


            <div className='text-center text-zinc-400 flex gap-8 justify-center border py-4 cursor-pointer'>
                <span>Post</span>
                <span>Save</span>
                <span>Tag</span>
            </div>
            {/* Photo Grid (replace with actual data) */}
                <PhotoGallery></PhotoGallery>
            </div>
        </div>
    );
};

export default Profile;