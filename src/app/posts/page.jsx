import React from 'react';
import { getPosts } from '../services/postApi';
import Link from 'next/link';


const PostPage = async() => {
   const postsData = await getPosts();
//    console.log(postsData)
    return (
        <div className=''>
            <h6 className='text-center my-5'>All Posts</h6>
            <div className='grid grid-cols-4 gap-6'>
                {
                    postsData?.slice(0,10).map((post) =>(
                        <div key={post.id} className='border-2 p-6'>
                            <h6>Title: {post.title}</h6>
                            <h6>Description: {post.body}</h6>
                            <button className='bg-red-400 px-4 py-2'><Link href={`/posts/${post.id}`}>See Dettails</Link></button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostPage;