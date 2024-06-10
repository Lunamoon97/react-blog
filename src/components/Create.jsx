const Create = ({
  getTitle,
  getContent,
  saveTitleToState,
  saveContentToState,
  savePost,
}) => {
  return (
    <>
      <form className='w-50 mx-auto p-3'>
        <h1 >Create New Post</h1>
        <input
          type="text"
          placeholder="title"
          ref={getTitle}
          onChange={saveTitleToState} className='form-control '
        />
        <br />
        <br />
        <textarea
          placeholder="content"
          ref={getContent}
          onChange={saveContentToState} className='form-control'
        ></textarea>
        <br />
        <br />
        <button onClick={savePost} className="btn btn-primary">Create Post</button>

      </form>
    </>
  );
};
export default Create;
