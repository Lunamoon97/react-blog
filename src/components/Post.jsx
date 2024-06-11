import React from 'react'


const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <tr>
          <td>{id}</td>
          <td>{title}</td>
          <td>{content}</td>
          <td>
            <button className='btn btn-info bt me-2' onClick={() => editPost(id)}>
            <i class="fa-solid fa-pen-to-square text-white"></i>
            </button>
            <button className='btn btn-danger bt' onClick={() => deletePost(id)}>
            <i class="fa-solid fa-trash"></i>
            </button>
          </td>
    </tr>
   
  )
}

export default Post