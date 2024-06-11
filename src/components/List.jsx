import React, { useEffect, useRef, useState } from "react";
import Create from "./Create";
import Post from "./Post";
import Edit from "./Edit";

const List = () => {
  const tempPosts = [
    { id: 1, title: "t1", content: "c1" },
    { id: 2, title: "t2", content: "c2" },
    { id: 3, title: "t3", content: "c3" },
  ];
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState(tempPosts);
  const [isCreate, setIsCreate] = useState(false);

  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  // useEffect(() => {
  //   console.log(title);
  // }, [title]);

  // useEffect(() => {
  //   console.log(content);
  // }, [content]);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const getTitle = useRef();
  const getContent = useRef();

  const saveTitleToState = (e) => {
    setTitle(e.target.value);
  };

  const saveContentToState = (e) => {
    setContent(e.target.value);
  };

  const savePost = (e) => {
    e.preventDefault();
    const id = Date.now();
    setPosts([...posts, { id, title, content }]);
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreate();
  };
  const toggleCreate = () => {
    setIsCreate(!isCreate);
  };
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const editPost = (id) => {
    setEditId(id);
    toggleEdit();
  };

  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = posts.map((eachPost) => {
      if (eachPost.id === editId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }
      return eachPost;
    });
    setPosts(updatedPost);
    toggleEdit();
  };
  const deletePost = (id) => {
    const modifiedPost = posts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setPosts(modifiedPost);
  };
  const canclePost = (id) => {
    const clcPst = posts.filter((eachPost) => {
      return setIsEdit(false);
    });
  };

  if (isCreate) {
    return (
      <>
        <Create
          saveTitleToState={saveTitleToState}
          saveContentToState={saveContentToState}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
        />
      </>
    );
  } else if (isEdit) {
    const post = posts.find((post) => {
      return post.id === editId;
    });

    return (
      <Edit
        title={post.title}
        content={post.content}
        updatePost={updatePost}
        canclePost={canclePost}
        saveTitleToState={saveTitleToState}
        saveContentToState={saveContentToState}
      />
    );
  } else {
    return (
      <div className="container my-3">
        <h2>All Posts</h2>
        {!posts.length ? (
          <div>
            <h3>There is nothing to see here!</h3>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((eachPost) => (
                <Post
                  id={eachPost.id}
                  key={eachPost.id}
                  title={eachPost.title}
                  content={eachPost.content}
                  editPost={editPost}
                  deletePost={deletePost}
                />
              ))}
            </tbody>
          </table>
        )}

        <br />
        <br />
        <button onClick={toggleCreate} className="btn btn-primary">
          Create New
        </button>
      </div>
    );
  }
};

export default List;
