import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import {Link} from "react-router-dom"
const SinglePost = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://picsum.photos/200
"
          alt=""
        />
        <div className="user">
          <img
            src="https://picsum.photos/200
"
            alt=""
          />
          <div className="info">
            <span>Utku</span>
            <p>Posted 1 day ago</p>
          </div>
          <div className="edit">
            <Link to={`/post?edit=1`}>
              <AiFillEdit className="editButton"/>
            </Link>

            <AiFillDelete className="editButton"/>
          </div>
        </div>
        <h1>Lorem ipsum</h1>
        <p>
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.
        <br />
        <br />
         But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        </p>
      </div>
      <div className="menu">m</div>
    </div>
  );
};

export default SinglePost;
