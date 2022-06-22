import React, { useState } from "react";
import Comment from "./Comment";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ReactTimeAgo from "react-time-ago";

function Comments() {
  TimeAgo.addDefaultLocale(en);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [result, setResult] = useState([]);
  const timeAgo = new TimeAgo("en-US");
  const handleName = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const handleComment = (e) => {
    const { value } = e.target;
    setComment(value);
  };
  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };
  const handleSubmit = (e) => {
    if (!name && !comment) {
      alert(`Please fill in the Name and Comment fields`);
    } else {
      setResult([
        <div className='comments' key={generateKey(name)}>
          <h4>
            {name}{" "}
            <span>
              <ReactTimeAgo date={Date.now()} locale='en-US' />
            </span>
          </h4>
          <span>{comment}</span>
        </div>,
        ...result,
      ]);
      setName("");
      setComment("");
    }
    e.preventDefault();
  };
  return (
    <Comment
      name={name}
      comment={comment}
      handleName={handleName}
      handleComment={handleComment}
      handleSubmit={handleSubmit}
      result={result}
    />
  );
}

export default Comments;
