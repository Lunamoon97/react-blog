import React from 'react'


const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <section>
          <h1>{title}</h1>
          <p>{content}</p>
          <button className='btn btn-info bt me-2' onClick={() => editPost(id)}>Edit</button>
          <button className='btn btn-danger bt' onClick={() => deletePost(id)}>Delete</button>
    </section>
   
  )
}

export default Post