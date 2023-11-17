import React, { useContext, useRef, useState } from 'react';
import { GoHeartFill } from "react-icons/go";
import { FaCommentDots } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";
import Modal from '../modal/Modal';
import { AuthContext } from '../../context/AuthContextElements';
import toast from 'react-hot-toast';

const PostCart = ({postData,refetch}) => {

    const {user} = useContext(AuthContext)

    // comment added button showing and hide 
    const [showAdd,setShowAdd] = useState(false)
    const textInput = useRef(null);


    // modal handler
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true)
    const closeModal = () => setModalOpen(false)
    // ......

// add comment function
    const addComment = ()=>{
        const comment = textInput.current.value;
        const postID = postData?._id;
        const commentAuthor = user?.email || 'anonymous user';
       
        const data = { comment,postID,commentAuthor }

        fetch('https://dummy-instagram-server.vercel.app/create-comment',{
          method:'POST',
          headers: {
            "Content-Type": "application/json",
           
          },
          body: JSON.stringify(data), 
        })
        .then(res => res.json())
        .then(result => {
          console.log(result);
          textInput.current.value = "";
          toast.success("comment added")
          refetch()
        })
    }
// .....





// updates like of a post 

    const [changeLikeButton,setChangeLikeButton] = useState(false)
    const [likeCount,setLikeCount] = useState(postData?.likes + 1)
  
    const handleLikeCount = () =>{
      setLikeCount(likeCount+1)
      setChangeLikeButton(true)

      const data = {likes:likeCount}
          fetch(`https://dummy-instagram-server.vercel.app/add-like?id=${postData?._id}`,{
            method:'put',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(data)
            
        })
        .then(res => res.json())
        .then(result => {
            if(result.data.acknowledged){
                    toast.success('liked ')
                    refetch()
            }
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }





    return (


        <div className="my-4 flex items-center justify-center">

      
        <div className="bg-white shadow-md p-4 rounded-lg w-[22rem] lg:w-[500px] cursor-pointer">
          {/* profile pic  */}
          <div className="flex items-center space-x-4">
            <img
              src="https://placekitten.com/50/50"
              alt="Profile Picture"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h1 className="font-semibold text-lg">{postData?.username}</h1>
              <p className="text-gray-500">{postData?.username}</p>
            </div>
          </div>


          <img
            src={postData?.image}
            alt="Post Image"
            className="mt-4 w-full h-72 object-cover rounded-lg"
          />


        {/* card action  ....  */}

          <div className='flex gap-x-4 my-4'>

              {/* like */}
              <button disabled={changeLikeButton}><GoHeartFill onClick={()=>handleLikeCount()} className={`text-2xl ${changeLikeButton && "text-red-500"}`} /> </button>

              {/* comment with modal box */}
              <div><FaCommentDots onClick={openModal} className='text-2xl'/> </div>
                <Modal postInfo={postData} isOpen={modalOpen} onClose={closeModal}></Modal>
              {/* share disabled */}
              <div><PiShareFatFill className='text-2xl' /></div>
          </div>

          


          {/* post meta  */}
          <div className="mt-4">
            <p className="text-gray-700">
              {postData?.likes} likes
            </p>
            <p className="text-gray-900 font-semibold">
              {postData?.caption}
            </p>
            <p className="text-gray-400 text-sm">
            View all 1,900 comments
            </p>

            <div className='mt-4 flex' onClick={()=>setShowAdd(true)}>
              <input className='border-b w-full outline-none' ref={textInput} type="text" placeholder='add your comment ' />

              {
                showAdd &&  <button className='btn btn-sm' onClick={()=>addComment()}>Add</button>
              }              
            </div>
          </div>

        </div>
      </div>


    );
};

export default PostCart;