import React, { useState } from 'react';
import { useQuery } from 'react-query';

const Modal = ({ isOpen, onClose, postInfo }) => {

  const modalClass = isOpen ? 'block' : 'hidden';



// console.log(postInfo?._id);


    const {data:postComment,refetch} = useQuery({
      queryKey:[postInfo?._id,isOpen],
      queryFn: async()=>{
          const res = await fetch(`https://dummy-instagram-server.vercel.app/single-post-comment?id=${postInfo?._id}`)
          const data = await res.json()
          return data;
      }
    })


    const allComment = postComment?.data;





  return (
    <div className={`fixed inset-0 overflow-y-auto ${modalClass}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 bg-white lg:w-[500px] w-full p-4 rounded-md shadow-md">
          <button
            className="absolute -top-10 lg:-right-10 right-2 text-gray-100 cursor-pointer text-5xl"
            onClick={onClose}
          >
            &times;
          </button>

          {/* content of page  """" comments  */}


     
            {
              allComment && allComment.length > 0 ? (
                allComment.map(comment => (
                  <div key={comment?._id} className="flex items-center mb-3 border">
                    <img
                      src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' 
                      alt="User Avatar"
                      className="w-8 h-8 object-cover rounded-full mr-2"
                    />
                    <div>
                      <p className="font-semibold">{comment?.commentAuthor}</p>
                      <p className="text-gray-600">{comment?.comment}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No Comments Yet</p>
              )
            }
          
        


          {/* -------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
