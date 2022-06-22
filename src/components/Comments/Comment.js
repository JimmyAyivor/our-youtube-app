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
      <h3>
        Comments: <span>{result.length}</span>
      </h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            value={name}
            onChange={handleName}
            required
          />
        </label>
        <br />
        <br />
        <label htmlFor='comment'>
          <input
            type='text'
            name='comment'
            id='comment'
            placeholder='Add a comment...'
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
      <hr />
      <>{result}</>
    </div>
  );
}

export default Comment;
