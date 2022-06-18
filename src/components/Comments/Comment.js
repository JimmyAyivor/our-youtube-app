import React from "react";
import "./Comments.css";

function Comment(comments) {
  const {
    name,
    comment,
    handleName,
    handleComment,
    handleSubmit,
    result,
  } = comments;

  return (
    <div className='comment-box'>
      <hr />
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          Name
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={handleName}
            required
          />
        </label>
        <br />
        <br />
        <label htmlFor='comment'>
          Comment
          <input
            type='text'
            name='comment'
            id='comment'
            value={comment}
            onChange={handleComment}
            required
          />
        </label>
        <br />
        <br />
        <button className='CommentBtn' type='submit'>
          Comment
        </button>
      </form>
      <>{result}</>
    </div>
  );
}

export default Comment;
