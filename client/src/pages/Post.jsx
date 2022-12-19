import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Post = () => {
  const [value, setValue] = useState("");
  return (
    <div className="addPost">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editContainer">
          <ReactQuill
            className="edit"
            theme="snow"
            value={value}
            onChange={setValue}
          />
          ;
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input type="file" id="file" />
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Categories</h1>
          <div className="category">
            <input type="radio" name="cat" value="football" id="football" />
            <label htmlFor="football">Football</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="cinema" id="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="category">
            <input type="radio" name="cat" value="cinema" id="cinema" />
            <label htmlFor="technology">Technology</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
