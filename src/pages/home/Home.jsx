import React from 'react';
import PostCart from '../../components/cards/PostCart';
import StorySlider from '../../components/topStory/StorySlider';
import { useQuery } from 'react-query';

const Home = () => {


    const {data:allPost,refetch} = useQuery({
        queryKey:['allPost'],
        queryFn: async()=>{
            const res = await fetch(`https://dummy-instagram-server.vercel.app/all-post`)
            const data = await res.json()
            return data;
        }
    })


    const postData = allPost?.data

    return (
        <div>
          
            <div className=''>
                <StorySlider></StorySlider>
            </div>


            {
                postData?.map(post => <PostCart
                    key={post._id}
                    postData={post}
                    refetch={refetch}
                     >

                     </PostCart>)
            }

         
         
        </div>
    );
};

export default Home;