import React from 'react'
import Post from './Post'
const posts = [
  {
    id: '123',
    username: 'NaderElhaj',
    userImage: '/images/me.jpg',
    img: '/images/instagram.png',
    caption: 'Hello !!!!!!!!!',
  },
  {
    id: '123',
    username: 'NaderElhaj',
    userImage: '/images/me.jpg',
    img: '/images/instagram.png',
    caption: 'Hello !!!!!!!!!',
  },
  {
    id: '123',
    username: 'NaderElhaj',
    userImage: '/images/me.jpg',
    img: '/images/instagram.png',
    caption: 'Hello !!!!!!!!!',
  },
]
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImage={post.userImage}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
