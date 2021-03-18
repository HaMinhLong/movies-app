import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../../actions/posts";
import Fade from "react-reveal/Fade";
import Footer from "../../Layout/Footer";

const SinglePost = (props) => {
  const [checkGetPost, setCheckGetPost] = useState(false);
  const id = props.match.params.id;

  const dispatch = useDispatch();

  if (checkGetPost === false) {
    dispatch(getPost(id));
    setCheckGetPost(true);
  }
  const post = useSelector((state) => state.posts);

  // const bgStyle = {
  //   backgroundImage: "url(" + post.selectedFile + ")",
  // };

  return (
    <div>
      <div>
        <div className="banner-container">
          <div className="img-box">
            <img src={post.selectedFile} alt="" />
          </div>
          <Fade left cascade>
            <div className="info-container">
              <div className="details-container">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p>
                  <span>Starting: </span>
                  {post.starting}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="some-information">
          <Fade bottom cascade>
            <p>{post.moreDes}</p>
          </Fade>
        </div>
      </div>
      <div className="more-details-container">
        <h1>More Details</h1>
        <Fade bottom cascade>
          <div className="card-list-item">
            <div className="card-item">
              <p>Watch offline</p>
              <p>{post.watchOffline}</p>
            </div>
            <div className="card-item">
              <p>This movie is...</p>
              <p>{post.movieIs}</p>
            </div>
            <div className="card-item">
              <p>Audio</p>
              <p>{post.audio}</p>
            </div>
            <div className="card-item">
              <p>Subtitles</p>
              <p>{post.subtitles}</p>
            </div>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePost;
