import React, { useState } from "react";
import Comment from "./Comment";
function Comments() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [result, setResult] = useState([]);

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
        ...result,
        <div key={generateKey(name)}>
          <h4>{name} ${new Date().getTime()}</h4>
          <span>{comment}</span>
        </div>,
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
