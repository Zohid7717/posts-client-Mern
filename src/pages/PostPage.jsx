import React, { useCallback, useEffect, useState } from 'react';
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai'
import moment, { locale } from 'moment/moment';
import axios from '../utils/axios'
import { Link, useParams } from 'react-router-dom';

const PostPage = () => {
  const [post, setPost] = useState(null)
  const params = useParams()

  const fetchPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`)
    setPost(data)
  }, [params.id])

  useEffect(() => {
    fetchPost()
  },[fetchPost])

  const dateFormat = (a) => {
    return moment(a).locale('ru').format('DD MMM YYYY')
  }
  if (!post) {
    return <div className='text-xl text-center text-white py-10'>
      Постов не существует.
    </div>
  }
  return (
    <div>
      <button className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4'>
        <Link to={'/'} className='flex'>Назад</Link>
      </button>
      <div className="flex gap-10 py-8">
        <div className="w-2/3">
          <div className="flex flex-col basis-1/4 flex-grow">
            <div
              className={post?.imgUrl ? 'flex rounded-sm h-80' : 'flex rounded-sm'}
            >
              {post?.imgUrl && (
                <img
                  src={`http://localhost:3000/${post?.imgUrl}`}
                  alt='img'
                  className='object-cover w-full'
                />
              )}
            </div>
          </div>
          <div className="flex justify-between items-center pt-2">
            <div className='text-xs text-white opacity-50'>{post.username}</div>
            <div className='text-xs text-white opacity-50'>{dateFormat(post.createdAt)}</div>
          </div>
          <div className="text-white text-xl">{post.title}</div>
          <p className="text-white opacity-60 text-xs pt-4">{post.text}</p>
          <div className="flex gap-3 items-center mt-2">
            <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
              <AiFillEye /> <span>{post.views}</span>
            </button>
            <button className="flex items-center justify-center gap-2 text-xs text-white opacity-50">
              <AiOutlineMessage /> <span>{post.comments?.length || 0}</span>
            </button>
          </div>
        </div>
        <div className="w-1/3">
          comments
        </div>
      </div>
    </div>
  );
}

export default PostPage;
