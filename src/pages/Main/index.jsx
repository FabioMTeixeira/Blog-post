import { useState } from 'react';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import Post from '../../components/Post';
import './style.css';

function Main() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'titulo 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat inventore corrupti itaque placeat enim deserunt tempore quisquam, dolor libero provident.'
    },
    {
      id: 2,
      title: 'titulo 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat inventore corrupti itaque placeat enim deserunt tempore quisquam, dolor libero provident.'
    },
    {
      id: 3,
      title: 'titulo 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat inventore corrupti itaque placeat enim deserunt tempore quisquam, dolor libero provident.'
    },
    {
      id: 4,
      title: 'titulo 4',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat inventore corrupti itaque placeat enim deserunt tempore quisquam, dolor libero provident.'
    },
  ])

  return (
    <div className='container'>
      <Header />

      <div className='container-posts'>
        {posts.map((post) => (
          <Post 
          key={post.id}
          post ={post}
          />
        ))}
      </div>

      <Modal />
    </div>
  )
}

export default Main
