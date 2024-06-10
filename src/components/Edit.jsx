import React from 'react'

const Edit = (
  {title,
  content,
  saveTitleToState,
  saveContentToState,updatePost,canclePost}
) => {
  return (
    <form className='w-50 mx-auto p-3'>
        <h1 className='mb-4'>Edit Post</h1>
        <input className='form-control mb-2' type="" placeholder='title' defaultValue={title}
          onChange={saveTitleToState}/>
        <textarea className='form-control mb-2' name="" id="" cols="" rows="" placeholder='Content' onChange={saveContentToState}
          defaultValue={content}></textarea>
        <button className='btn btn-success me-2'  onClick={updatePost}>Update Post</button>
        <button className='btn btn-danger'onClick={canclePost}  >Cancle</button>
    </form>
  )
}

export default Edit