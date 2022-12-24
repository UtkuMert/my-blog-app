import axios from "axios";
import moment from "moment/moment";
import React, { useContext, useEffect, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import OtherPosts from "../components/OtherPosts";
import { AuthContext } from "../context/authContext";
const SinglePost = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split("/")[2]; // split the id from URL
  const navigate = useNavigate();
  const { currentUser, token } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        console.log(res);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/posts/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent; // prevented to html tags
  };
  return (
    <div className="single">
      <div className="content">
        <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
        <div className="user">
          <img src="https://picsum.photos/200" alt="" />
          <div className="info">
            <span>{post?.user?.userName}</span>
            <p>Posted {post.createdDate}</p>
            <p>#{post.category}</p>
          </div>
          {currentUser?.userName === post?.user?.userName && (
            <div className="edit">
              <Link to={`/post?edit=1`} state={post}>
                <AiFillEdit className="editButton" />
              </Link>

              <AiFillDelete onClick={handleDelete} className="editButton" />
            </div>
          )}
        </div>
        <h1>{post?.title}</h1>
        <p>{getText(post?.description)}</p>
      </div>
      <OtherPosts />
    </div>
  );
};

export default SinglePost;
