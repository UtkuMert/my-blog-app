import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Home = () => {

  const [posts,setPosts] = useState([]);
  const cat = useLocation().search;
  const navigate = useNavigate();
  useEffect(()=>{
   const fetchData = async () => {
    try {
      const res = await axios.get(`/posts${cat}`);
      console.log(res);
      setPosts(res.data);
    } catch (err) {
      console.log(err)
    }
   };
   fetchData();
  },[cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "What is Lorem Ipsum?",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //     img: "https://picsum.photos/200",
  //   },
  //   {
  //     id: 2,
  //     title: "Why do we use it?",
  //     description:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  //     img: "https://picsum.photos/200",
  //   },
  //   {
  //     id: 3,
  //     title: "Where does it come from?",
  //     description:
  //       "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
  //     img: "https://picsum.photos/200",
  //   },
  // ];

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent // prevented to html tags
  }
  return (
    <div className="home">
      <div className="posts">
        {posts?.map((post) => (
          <div className="post" key={post?.id}>
            <div className="img">
              <img src="https://picsum.photos/200" alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.description)}</p>
              <button onClick={()=>navigate(`/post/${post.id}`)}>Read more...</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
