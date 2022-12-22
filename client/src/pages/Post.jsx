import axios from "axios";
import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/authContext";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// axios.interceptors.request.use(
//   config => {
//     config.headers.authorization = `Bearer ${token}`;
//     return config;
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Post = () => {
  const state = useLocation().state;
  const [open, setOpen] = React.useState(false);
  const { currentUser, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState(state?.title || "");
  const [description, setDescription] = useState(state?.description || "");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(state?.cat || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(file.name);
    //console.log(description);
    const imgUrl = file?.name;
    try {
      state
        ? await axios.put(
            `/posts/${state.id}`,
            { title, description, category, userId: currentUser?.userId },
            { headers: { Authorization: `Bearer ${token}` } }
          )
        : await axios.post(
            `/posts`,
            {
              title,
              description,
              category,
              userId: currentUser?.userId,
              imgUrl,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
         
          setOpen(true);
        
            
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your post uploaded.
        </Alert>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Something went wrong!
        </Alert>
      </Snackbar>
      <div className="addPost">
        <div className="content">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="editContainer">
            <ReactQuill
              className="edit"
              theme="snow"
              value={description}
              onChange={setDescription}
            />
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
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <div className="buttons">
              <button>Save as a draft</button>
              <button onClick={handleSubmit}>Publish</button>
            </div>
          </div>
          <div className="item">
            <h1>Categories</h1>
            <div className="category">
              <input
                type="radio"
                checked={category === "football"}
                name="category"
                value="football"
                id="football"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="football">Football</label>
            </div>
            <div className="category">
              <input
                type="radio"
                checked={category === "cinema"}
                name="category"
                value="cinema"
                id="cinema"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className="category">
              <input
                type="radio"
                checked={category === "technology"}
                name="category"
                value="technology"
                id="technology"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="category">
              <input
                type="radio"
                checked={category === "art"}
                name="category"
                value="art"
                id="art"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="Art">Art</label>
            </div>
            <div className="category">
              <input
                type="radio"
                checked={category === "food"}
                name="category"
                value="food"
                id="food"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label htmlFor="food">Food</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
